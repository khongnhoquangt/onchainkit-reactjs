'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { WalletEvent, WalletOption } from "../../core/analytics/types.js";
import { PressableIcon } from "../../internal/components/PressableIcon.js";
import { baseScanSvg } from "../../internal/svg/baseScanSvg.js";
import { disconnectSvg } from "../../internal/svg/disconnectSvg.js";
import { qrIconSvg } from "../../internal/svg/qrIconSvg.js";
import { refreshSvg } from "../../internal/svg/refreshSvg.js";
import { cn } from "../../styles/theme.js";
import { useCallback } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useWalletContext } from "./WalletProvider.js";
import { usePortfolio } from "../hooks/usePortfolio.js";
import { RequestContext } from "../../core/network/constants.js";
function WalletAdvancedWalletActions({
  classNames
}) {
  const { address } = useAccount();
  const { handleClose, setActiveFeature, animations } = useWalletContext();
  const { disconnect, connectors } = useDisconnect();
  const { sendAnalytics } = useAnalytics();
  const { refetch: refetchPortfolioData } = usePortfolio(
    { address },
    RequestContext.Wallet
  );
  const handleAnalyticsOptionSelected = useCallback(
    (option) => {
      sendAnalytics(WalletEvent.OptionSelected, {
        option
      });
    },
    [sendAnalytics]
  );
  const handleAnalyticsDisconnect = useCallback(
    (walletProvider) => {
      sendAnalytics(WalletEvent.Disconnect, {
        component: "WalletAdvanced",
        walletProvider
      });
    },
    [sendAnalytics]
  );
  const handleTransactions = useCallback(() => {
    handleAnalyticsOptionSelected(WalletOption.Explorer);
    window.open(`https://basescan.org/address/${address}`, "_blank");
  }, [address, handleAnalyticsOptionSelected]);
  const handleDisconnect = useCallback(() => {
    var _a;
    const walletProvider = ((_a = connectors[0]) == null ? void 0 : _a.name) || "unknown";
    handleAnalyticsDisconnect(walletProvider);
    handleClose();
    for (const connector of connectors) {
      disconnect({ connector });
    }
  }, [disconnect, connectors, handleClose, handleAnalyticsDisconnect]);
  const handleQr = useCallback(() => {
    handleAnalyticsOptionSelected(WalletOption.QR);
    setActiveFeature("qr");
  }, [setActiveFeature, handleAnalyticsOptionSelected]);
  const handleRefreshPortfolioData = useCallback(async () => {
    handleAnalyticsOptionSelected(WalletOption.Refresh);
    await refetchPortfolioData();
  }, [refetchPortfolioData, handleAnalyticsOptionSelected]);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockWalletAdvanced_WalletActions",
      className: cn(
        "flex w-88 items-center justify-between px-4 py-3",
        animations.content,
        classNames == null ? void 0 : classNames.container
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV(
            PressableIcon,
            {
              ariaLabel: "Open transaction history",
              onClick: handleTransactions,
              children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  "data-testid": "ockWalletAdvanced_TransactionsButton",
                  className: cn("h-7 w-7 scale-110 p-2", classNames == null ? void 0 : classNames.baseScanIcon),
                  children: baseScanSvg
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
                  lineNumber: 98,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
              lineNumber: 94,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(PressableIcon, { ariaLabel: "Show QR code", onClick: handleQr, children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              "data-testid": "ockWalletAdvanced_QrButton",
              className: cn("h-7 w-7 scale-110", classNames == null ? void 0 : classNames.qrIcon),
              children: qrIconSvg
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
              lineNumber: 106,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV(PressableIcon, { ariaLabel: "Disconnect wallet", onClick: handleDisconnect, children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              "data-testid": "ockWalletAdvanced_DisconnectButton",
              className: cn("h-7 w-7 scale-110 p-2", classNames == null ? void 0 : classNames.disconnectIcon),
              children: disconnectSvg
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
              lineNumber: 116,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
            lineNumber: 115,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            PressableIcon,
            {
              ariaLabel: "Refresh portfolio data",
              onClick: handleRefreshPortfolioData,
              children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  "data-testid": "ockWalletAdvanced_RefreshButton",
                  className: cn("h-7 w-7 scale-110 p-2", classNames == null ? void 0 : classNames.refreshIcon),
                  children: refreshSvg
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
                  lineNumber: 127,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
              lineNumber: 123,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
          lineNumber: 114,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedWalletActions.tsx",
      lineNumber: 85,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletAdvancedWalletActions
};
//# sourceMappingURL=WalletAdvancedWalletActions.js.map
