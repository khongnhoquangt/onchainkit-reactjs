import { jsxDEV } from "react/jsx-dev-runtime";
import { useInputResize } from "../../hooks/useInputResize.js";
import { cn, text } from "../../../styles/theme.js";
import { useRef, useCallback, useEffect } from "react";
import { useAmountInput } from "../../hooks/useAmountInput.js";
import { isValidAmount } from "../../utils/isValidAmount.js";
import { TextInput } from "../TextInput.js";
import { CurrencyLabel } from "./CurrencyLabel.js";
function AmountInput({
  fiatAmount,
  cryptoAmount,
  asset,
  selectedInputType,
  currency,
  setFiatAmount,
  setCryptoAmount,
  exchangeRate,
  delayMs,
  className,
  textClassName
}) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const measureRef = useRef(null);
  const labelRef = useRef(null);
  const currencyOrAsset = selectedInputType === "fiat" ? currency : asset;
  const value = selectedInputType === "fiat" ? fiatAmount : cryptoAmount;
  const updateScale = useInputResize(
    containerRef,
    wrapperRef,
    inputRef,
    measureRef,
    labelRef
  );
  const { handleChange } = useAmountInput({
    setFiatAmount,
    setCryptoAmount,
    selectedInputType,
    exchangeRate
  });
  const handleAmountChange = useCallback(
    (value2) => {
      handleChange(value2, () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    },
    [handleChange]
  );
  useEffect(() => {
    updateScale();
  }, [value, updateScale]);
  const selectedInputTypeRef = useRef(selectedInputType);
  useEffect(() => {
    if (selectedInputTypeRef.current !== selectedInputType) {
      selectedInputTypeRef.current = selectedInputType;
      handleFocusInput();
    }
  }, [selectedInputType]);
  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      "data-testid": "ockAmountInputContainer",
      className: cn("relative h-24 cursor-text", className),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 top-6 bottom-4", children: /* @__PURE__ */ jsxDEV("div", { className: "relative flex h-14", children: /* @__PURE__ */ jsxDEV("div", { ref: wrapperRef, className: "flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ jsxDEV(
            TextInput,
            {
              className: cn(
                text.body,
                "border-none bg-transparent",
                "text-6xl leading-none outline-none",
                "[appearance:textfield]",
                "[&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none",
                "[&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
                textClassName
              ),
              value,
              onChange: handleAmountChange,
              delayMs,
              inputValidator: isValidAmount,
              ref: inputRef,
              inputMode: "decimal",
              placeholder: "0"
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
              lineNumber: 103,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "ml-1", children: /* @__PURE__ */ jsxDEV(
            CurrencyLabel,
            {
              ref: labelRef,
              label: currencyOrAsset,
              className: textClassName
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
              lineNumber: 122,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
          lineNumber: 100,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            "data-testid": "ockHiddenSpan",
            ref: measureRef,
            className: cn(
              text.body,
              "border-none bg-transparent",
              "text-6xl leading-none outline-none",
              "pointer-events-none absolute whitespace-nowrap opacity-0",
              "left-[-99999px]"
              // Hide the span from the DOM
            ),
            children: value ? `${value}.` : "0."
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
            lineNumber: 139,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInput.tsx",
      lineNumber: 95,
      columnNumber: 5
    },
    this
  );
}
export {
  AmountInput
};
//# sourceMappingURL=AmountInput.js.map
