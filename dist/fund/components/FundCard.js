'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn, border, text, color, background } from "../../styles/theme.js";
import { useFundCardSetupOnrampEventListeners } from "../hooks/useFundCardSetupOnrampEventListeners.js";
import { FundCardAmountInput } from "./FundCardAmountInput.js";
import { FundCardAmountInputTypeSwitch } from "./FundCardAmountInputTypeSwitch.js";
import { FundCardHeader } from "./FundCardHeader.js";
import { FundCardPaymentMethodDropdown } from "./FundCardPaymentMethodDropdown.js";
import { FundCardPresetAmountInputList } from "./FundCardPresetAmountInputList.js";
import { FundCardProvider } from "./FundCardProvider.js";
import { FundCardSubmitButton } from "./FundCardSubmitButton.js";
function FundCard({
  assetSymbol,
  buttonText = "Buy",
  headerText,
  country = "US",
  subdivision,
  currency = "USD",
  presetAmountInputs,
  children = /* @__PURE__ */ jsxDEV(DefaultFundCardContent, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
    lineNumber: 24,
    columnNumber: 14
  }, this),
  className,
  onError,
  onStatus,
  onSuccess
}) {
  const componentTheme = useTheme();
  return /* @__PURE__ */ jsxDEV(
    FundCardProvider,
    {
      asset: assetSymbol,
      headerText,
      buttonText,
      country,
      subdivision,
      currency,
      onError,
      onStatus,
      onSuccess,
      presetAmountInputs,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(
            componentTheme,
            background.default,
            color.foreground,
            "flex w-full flex-col p-6",
            text.headline,
            border.radius,
            border.lineDefault,
            className
          ),
          children: /* @__PURE__ */ jsxDEV(FundCardContent, { children }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
}
function FundCardContent({ children }) {
  useFundCardSetupOnrampEventListeners();
  return /* @__PURE__ */ jsxDEV("form", { className: "w-full", "data-testid": "ockFundCardForm", children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
function DefaultFundCardContent() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(FundCardHeader, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FundCardAmountInput, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FundCardAmountInputTypeSwitch, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FundCardPresetAmountInputList, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FundCardPaymentMethodDropdown, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FundCardSubmitButton, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCard.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
export {
  FundCard
};
//# sourceMappingURL=FundCard.js.map
