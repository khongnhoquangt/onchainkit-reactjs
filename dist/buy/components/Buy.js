'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useOutsideClick } from "../../internal/hooks/useOutsideClick.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn } from "../../styles/theme.js";
import { FALLBACK_DEFAULT_MAX_SLIPPAGE } from "../../swap/constants.js";
import { useRef } from "react";
import { BuyAmountInput } from "./BuyAmountInput.js";
import { BuyButton } from "./BuyButton.js";
import { BuyDropdown } from "./BuyDropdown.js";
import { BuyMessage } from "./BuyMessage.js";
import { BuyProvider, useBuyContext } from "./BuyProvider.js";
function BuyContent({ className }) {
  const componentTheme = useTheme();
  const { isDropdownOpen, setIsDropdownOpen } = useBuyContext();
  const buyContainerRef = useRef(null);
  useOutsideClick(buyContainerRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: buyContainerRef,
      className: cn("relative flex flex-col gap-2", componentTheme, className),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: cn("flex items-center gap-4"), children: [
          /* @__PURE__ */ jsxDEV(BuyAmountInput, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(BuyButton, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          isDropdownOpen && /* @__PURE__ */ jsxDEV(BuyDropdown, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
            lineNumber: 34,
            columnNumber: 28
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(BuyMessage, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
function Buy({
  config = {
    maxSlippage: FALLBACK_DEFAULT_MAX_SLIPPAGE
  },
  className,
  disabled = false,
  experimental = { useAggregator: false },
  isSponsored = false,
  onError,
  onStatus,
  onSuccess,
  toToken,
  fromToken
}) {
  return /* @__PURE__ */ jsxDEV(
    BuyProvider,
    {
      config,
      disabled,
      experimental,
      isSponsored,
      onError,
      onStatus,
      onSuccess,
      toToken,
      fromToken,
      children: /* @__PURE__ */ jsxDEV(BuyContent, { className }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/Buy.tsx",
      lineNumber: 56,
      columnNumber: 5
    },
    this
  );
}
export {
  Buy
};
//# sourceMappingURL=Buy.js.map
