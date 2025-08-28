'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useState, useMemo, Children, isValidElement, useCallback, useEffect } from "react";
import { cn, pressable, color, text, border } from "../../styles/theme.js";
import { IdentityProvider } from "../../identity/components/IdentityProvider.js";
import { Avatar } from "../../identity/components/Avatar.js";
import "../../core/network/attestations.js";
import "../../identity/utils/easSupportedChains.js";
import "@tanstack/react-query";
import "../../internal/svg/badgeSvg.js";
import { useOnchainKit } from "../../useOnchainKit.js";
import "viem";
import { useAccount, useConnect } from "wagmi";
import { findComponent } from "../../internal/utils/findComponent.js";
import { Name } from "../../identity/components/Name.js";
import "viem/chains";
import "../../identity/constants.js";
import "../../identity/utils/getAddress.js";
import "viem/ens";
import "../../internal/svg/githubSvg.js";
import "../../internal/svg/twitterSvg.js";
import "../../internal/svg/warpcastSvg.js";
import "../../internal/svg/websiteSvg.js";
import "../../identity/utils/getAddresses.js";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { WalletEvent } from "../../core/analytics/types.js";
import { Spinner } from "../../internal/components/Spinner.js";
import { ConnectButton } from "./ConnectButton.js";
import { ConnectWalletText } from "./ConnectWalletText.js";
import { WalletModal } from "./WalletModal.js";
import { useWalletContext } from "./WalletProvider.js";
const connectWalletDefaultChildren = /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(Avatar, { className: "h-6 w-6" }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(Name, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
  lineNumber: 28,
  columnNumber: 3
}, void 0);
function ConnectWallet({
  children,
  className,
  // In a few version we will officially deprecate this prop,
  // but for now we will keep it for backward compatibility.
  text: text$1 = "Connect Wallet",
  onConnect,
  disconnectedLabel
}) {
  var _a, _b;
  const { config = { wallet: { display: void 0 } } } = useOnchainKit();
  const {
    setIsConnectModalOpen,
    isSubComponentOpen,
    setIsSubComponentOpen,
    handleClose
  } = useWalletContext();
  const {
    address: accountAddress,
    status,
    connector: accountConnector
  } = useAccount();
  const { connectors, connect, status: connectStatus } = useConnect();
  const { sendAnalytics } = useAnalytics();
  const [hasClickedConnect, setHasClickedConnect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { connectWalletText } = useMemo(() => {
    const childrenArray = Children.toArray(children);
    return {
      connectWalletText: childrenArray.find(findComponent(ConnectWalletText))
    };
  }, [children]);
  const childrenWithoutConnectWalletText = useMemo(() => {
    return Children.map(children, (child) => {
      if (isValidElement(child) && child.type === ConnectWalletText) {
        return null;
      }
      return child;
    });
  }, [children]);
  const connector = accountConnector || connectors[0];
  const isLoading = connectStatus === "pending" || status === "connecting";
  const handleToggle = useCallback(() => {
    if (isSubComponentOpen) {
      handleClose == null ? void 0 : handleClose();
    } else {
      setIsSubComponentOpen(true);
    }
  }, [isSubComponentOpen, handleClose, setIsSubComponentOpen]);
  const handleCloseConnectModal = useCallback(() => {
    setIsModalOpen(false);
    setIsConnectModalOpen == null ? void 0 : setIsConnectModalOpen(false);
  }, [setIsConnectModalOpen]);
  const handleOpenConnectModal = useCallback(() => {
    setIsModalOpen(true);
    setIsConnectModalOpen == null ? void 0 : setIsConnectModalOpen(true);
    setHasClickedConnect(true);
  }, [setIsConnectModalOpen]);
  const handleAnalyticsInitiated = useCallback(
    (component) => {
      sendAnalytics(WalletEvent.ConnectInitiated, {
        component
      });
    },
    [sendAnalytics]
  );
  const handleAnalyticsSuccess = useCallback(
    (walletAddress) => {
      const walletProvider = connector == null ? void 0 : connector.name;
      sendAnalytics(WalletEvent.ConnectSuccess, {
        address: walletAddress ?? "",
        walletProvider
      });
    },
    [sendAnalytics, connector]
  );
  const handleAnalyticsError = useCallback(
    (errorMessage, component) => {
      const walletProvider = connector == null ? void 0 : connector.name;
      sendAnalytics(WalletEvent.ConnectError, {
        error: errorMessage,
        metadata: {
          connector: walletProvider,
          component
        }
      });
    },
    [sendAnalytics, connector]
  );
  useEffect(() => {
    if (hasClickedConnect && status === "connected" && onConnect) {
      onConnect();
      setHasClickedConnect(false);
    }
  }, [status, hasClickedConnect, onConnect]);
  useEffect(() => {
    if (status === "connected" && accountAddress && connector) {
      handleAnalyticsSuccess(accountAddress);
    }
  }, [status, accountAddress, connector, handleAnalyticsSuccess]);
  const handleConnectClick = useCallback(() => {
    var _a2;
    if (((_a2 = config == null ? void 0 : config.wallet) == null ? void 0 : _a2.display) === "modal") {
      handleOpenConnectModal();
      setHasClickedConnect(true);
      handleAnalyticsInitiated("WalletModal");
      return;
    }
    handleAnalyticsInitiated("ConnectWallet");
    connect(
      { connector },
      {
        onSuccess: () => {
          onConnect == null ? void 0 : onConnect();
          handleAnalyticsSuccess(accountAddress);
        },
        onError: (error) => {
          handleAnalyticsError(error.message, "ConnectWallet");
        }
      }
    );
  }, [
    (_a = config == null ? void 0 : config.wallet) == null ? void 0 : _a.display,
    accountAddress,
    connect,
    connector,
    handleAnalyticsError,
    handleAnalyticsInitiated,
    handleAnalyticsSuccess,
    handleOpenConnectModal,
    onConnect
  ]);
  if (status === "disconnected") {
    return /* @__PURE__ */ jsxDEV("div", { className: "flex", "data-testid": "ockConnectWallet_Container", children: [
      /* @__PURE__ */ jsxDEV(
        ConnectButton,
        {
          className,
          connectWalletText: connectWalletText || disconnectedLabel,
          onClick: handleConnectClick,
          text: text$1
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
          lineNumber: 191,
          columnNumber: 9
        },
        this
      ),
      ((_b = config == null ? void 0 : config.wallet) == null ? void 0 : _b.display) === "modal" && /* @__PURE__ */ jsxDEV(WalletModal, { isOpen: isModalOpen, onClose: handleCloseConnectModal }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this);
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "flex", "data-testid": "ockConnectWallet_Container", children: /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        "data-testid": "ockConnectAccountButtonInner",
        className: cn(
          pressable.primary,
          text.headline,
          color.inverse,
          "inline-flex min-w-[153px] items-center justify-center rounded-xl px-4 py-3",
          pressable.disabled,
          className
        ),
        disabled: true,
        children: /* @__PURE__ */ jsxDEV(Spinner, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
        lineNumber: 207,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(IdentityProvider, { address: accountAddress, children: /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", "data-testid": "ockConnectWallet_Container", children: /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      "data-testid": "ockConnectWallet_Connected",
      className: cn(
        pressable.secondary,
        border.radius,
        color.foreground,
        "px-4 py-3",
        isSubComponentOpen && "ock-bg-secondary-active hover:ock-bg-secondary-active",
        className
      ),
      onClick: handleToggle,
      children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2", children: childrenWithoutConnectWalletText || connectWalletDefaultChildren }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
        lineNumber: 243,
        columnNumber: 11
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
      lineNumber: 229,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
    lineNumber: 228,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectWallet.tsx",
    lineNumber: 227,
    columnNumber: 5
  }, this);
}
export {
  ConnectWallet
};
//# sourceMappingURL=ConnectWallet.js.map
