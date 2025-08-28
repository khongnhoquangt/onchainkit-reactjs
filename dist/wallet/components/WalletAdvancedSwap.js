'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { PressableIcon } from "../../internal/components/PressableIcon.js";
import { backArrowSvg } from "../../internal/svg/backArrowSvg.js";
import { cn, border } from "../../styles/theme.js";
import { Swap } from "../../swap/components/Swap.js";
import { SwapAmountInput } from "../../swap/components/SwapAmountInput.js";
import { SwapButton } from "../../swap/components/SwapButton.js";
import { SwapMessage } from "../../swap/components/SwapMessage.js";
import { SwapSettings } from "../../swap/components/SwapSettings.js";
import { SwapSettingsSlippageDescription } from "../../swap/components/SwapSettingsSlippageDescription.js";
import { SwapSettingsSlippageInput } from "../../swap/components/SwapSettingsSlippageInput.js";
import { SwapSettingsSlippageTitle } from "../../swap/components/SwapSettingsSlippageTitle.js";
import { SwapToast } from "../../swap/components/SwapToast.js";
import { SwapToggleButton } from "../../swap/components/SwapToggleButton.js";
import { useCallback } from "react";
import { useWalletContext } from "./WalletProvider.js";
function WalletAdvancedSwap({
  config,
  classNames,
  disabled,
  experimental,
  from,
  isSponsored = false,
  onError,
  onStatus,
  onSuccess,
  title,
  to
}) {
  var _a, _b, _c, _d;
  const {
    setActiveFeature,
    isActiveFeatureClosing,
    setIsActiveFeatureClosing
  } = useWalletContext();
  const handleCloseSwap = useCallback(() => {
    setIsActiveFeatureClosing(true);
  }, [setIsActiveFeatureClosing]);
  const handleAnimationEnd = useCallback(() => {
    if (isActiveFeatureClosing) {
      setActiveFeature(null);
      setIsActiveFeatureClosing(false);
    }
  }, [isActiveFeatureClosing, setActiveFeature, setIsActiveFeatureClosing]);
  const backButton = /* @__PURE__ */ jsxDEV(PressableIcon, { ariaLabel: "Back button", onClick: handleCloseSwap, children: /* @__PURE__ */ jsxDEV("div", { className: "p-2", children: backArrowSvg }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "h-full",
        border.radius,
        isActiveFeatureClosing ? "fade-out slide-out-to-right-5 animate-out fill-mode-forwards ease-in-out" : "fade-in slide-in-from-right-5 linear animate-in duration-150",
        "relative w-88 h-120",
        classNames == null ? void 0 : classNames.container
      ),
      onAnimationEnd: handleAnimationEnd,
      "data-testid": "ockWalletAdvancedSwap",
      children: /* @__PURE__ */ jsxDEV(
        Swap,
        {
          className: cn("w-full px-4 pt-3 pb-4", classNames == null ? void 0 : classNames.container),
          onStatus,
          onSuccess,
          onError,
          config,
          isSponsored,
          title,
          experimental,
          headerLeftContent: backButton,
          children: [
            /* @__PURE__ */ jsxDEV(SwapSettings, { className: cn("w-auto", (_a = classNames == null ? void 0 : classNames.settings) == null ? void 0 : _a.container), children: [
              /* @__PURE__ */ jsxDEV(
                SwapSettingsSlippageTitle,
                {
                  className: (_b = classNames == null ? void 0 : classNames.settings) == null ? void 0 : _b.slippageTitle,
                  children: "Max. slippage"
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
                  lineNumber: 82,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                SwapSettingsSlippageDescription,
                {
                  className: (_c = classNames == null ? void 0 : classNames.settings) == null ? void 0 : _c.slippageDescription,
                  children: "Your swap will revert if the prices change by more than the selected percentage."
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
                  lineNumber: 87,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                SwapSettingsSlippageInput,
                {
                  className: (_d = classNames == null ? void 0 : classNames.settings) == null ? void 0 : _d.slippageInput
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
                  lineNumber: 93,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
              lineNumber: 81,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV(
              SwapAmountInput,
              {
                label: "Sell",
                swappableTokens: from,
                type: "from",
                className: classNames == null ? void 0 : classNames.fromAmountInput
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
                lineNumber: 97,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(SwapToggleButton, { className: classNames == null ? void 0 : classNames.toggleButton }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
              lineNumber: 103,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV(
              SwapAmountInput,
              {
                label: "Buy",
                swappableTokens: to,
                type: "to",
                className: classNames == null ? void 0 : classNames.toAmountInput
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
                lineNumber: 104,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(SwapButton, { disabled, className: classNames == null ? void 0 : classNames.swapButton }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
              lineNumber: 110,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV(SwapMessage, { className: classNames == null ? void 0 : classNames.message }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
              lineNumber: 111,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV(SwapToast, { className: classNames == null ? void 0 : classNames.toast }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
              lineNumber: 112,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
          lineNumber: 70,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedSwap.tsx",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletAdvancedSwap
};
//# sourceMappingURL=WalletAdvancedSwap.js.map
