import { jsxDEV } from "react/jsx-dev-runtime";
import { BottomSheet } from "../../internal/components/BottomSheet.js";
import { zIndex } from "../../styles/constants.js";
import { cn, text, border, background } from "../../styles/theme.js";
import { useCallback, useMemo } from "react";
import { WALLET_ADVANCED_DEFAULT_SWAPPABLE_TOKENS } from "../constants.js";
import { WalletAdvancedQrReceive } from "./WalletAdvancedQrReceive.js";
import { WalletAdvancedSwap } from "./WalletAdvancedSwap.js";
import { useWalletContext } from "./WalletProvider.js";
import { Send } from "./wallet-advanced-send/components/Send.js";
import { RequestContext } from "../../core/network/constants.js";
import { usePortfolio } from "../hooks/usePortfolio.js";
import { useAccount } from "wagmi";
function WalletDropdownContent({
  children,
  swappableTokens,
  classNames
}) {
  const {
    isSubComponentOpen,
    setIsSubComponentOpen,
    isSubComponentClosing,
    setIsSubComponentClosing,
    connectRef,
    breakpoint,
    activeFeature,
    animations
  } = useWalletContext();
  const { address } = useAccount();
  const { data: portfolioData } = usePortfolio(
    { address, enabled: Boolean(activeFeature) },
    RequestContext.Wallet
  );
  const tokenBalances = portfolioData == null ? void 0 : portfolioData.tokenBalances;
  const handleBottomSheetClose = useCallback(() => {
    setIsSubComponentOpen(false);
  }, [setIsSubComponentOpen]);
  const handleAnimationEnd = useCallback(() => {
    if (isSubComponentClosing) {
      setIsSubComponentOpen(false);
      setIsSubComponentClosing(false);
    }
  }, [isSubComponentClosing, setIsSubComponentOpen, setIsSubComponentClosing]);
  const content = useMemo(() => {
    if (activeFeature === "send") {
      return /* @__PURE__ */ jsxDEV(ContentWrapper, { children: /* @__PURE__ */ jsxDEV(Send, { className: "border-none" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this);
    }
    if (activeFeature === "qr") {
      return /* @__PURE__ */ jsxDEV(ContentWrapper, { children: /* @__PURE__ */ jsxDEV(WalletAdvancedQrReceive, { classNames: classNames == null ? void 0 : classNames.qr }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this);
    }
    if (activeFeature === "swap") {
      return /* @__PURE__ */ jsxDEV(ContentWrapper, { children: /* @__PURE__ */ jsxDEV(
        WalletAdvancedSwap,
        {
          title: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: cn(text.headline, "w-full text-center text-base"),
              children: "Swap"
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
              lineNumber: 71,
              columnNumber: 15
            },
            this
          ),
          to: swappableTokens ?? WALLET_ADVANCED_DEFAULT_SWAPPABLE_TOKENS,
          from: (tokenBalances == null ? void 0 : tokenBalances.map((token) => ({
            address: token.address,
            chainId: token.chainId,
            symbol: token.symbol,
            decimals: token.decimals,
            image: token.image,
            name: token.name
          }))) ?? [],
          classNames: classNames == null ? void 0 : classNames.swap
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this);
    }
    return /* @__PURE__ */ jsxDEV(ContentWrapper, { children }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
      lineNumber: 94,
      columnNumber: 12
    }, this);
  }, [activeFeature, swappableTokens, tokenBalances, children, classNames]);
  if (breakpoint === "sm") {
    return /* @__PURE__ */ jsxDEV(
      BottomSheet,
      {
        isOpen: isSubComponentOpen,
        triggerRef: connectRef,
        onClose: handleBottomSheetClose,
        className: classNames == null ? void 0 : classNames.container,
        children: /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full flex-col items-center justify-center", children: content }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
        lineNumber: 99,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockWalletDropdownContent",
      className: cn(
        background.default,
        border.radius,
        border.lineDefault,
        zIndex.dropdown,
        "my-1.5 h-auto w-full",
        "flex justify-center",
        // ensure border radius is respected
        "overflow-hidden",
        animations.container,
        classNames == null ? void 0 : classNames.container
      ),
      onAnimationEnd: handleAnimationEnd,
      children: content
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
      lineNumber: 113,
      columnNumber: 5
    },
    this
  );
}
function ContentWrapper({
  children,
  className
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex flex-col justify-between",
        "min-w-80 max-h-120",
        className
      ),
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownContent.tsx",
      lineNumber: 142,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletDropdownContent
};
//# sourceMappingURL=WalletDropdownContent.js.map
