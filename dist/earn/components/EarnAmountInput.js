import { jsxDEV } from "react/jsx-dev-runtime";
import { TextInput } from "../../internal/components/TextInput.js";
import { isValidAmount } from "../../internal/utils/isValidAmount.js";
import { cn, color, text } from "../../styles/theme.js";
import { formatAmount } from "../../swap/utils/formatAmount.js";
function EarnAmountInput({
  className,
  disabled,
  value,
  onChange,
  "aria-label": ariaLabel
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockEarnAmountInput",
      className: cn("flex flex-col", className),
      children: /* @__PURE__ */ jsxDEV(
        TextInput,
        {
          className: cn(
            text.base,
            color.foreground,
            "w-full border-none bg-transparent text-5xl",
            "leading-none outline-none"
          ),
          placeholder: "0.0",
          value: formatAmount(value),
          onChange,
          inputValidator: isValidAmount,
          disabled,
          "aria-label": ariaLabel
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnAmountInput.tsx",
          lineNumber: 19,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnAmountInput.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
export {
  EarnAmountInput
};
//# sourceMappingURL=EarnAmountInput.js.map
