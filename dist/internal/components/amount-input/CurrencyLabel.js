import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color, text } from "../../../styles/theme.js";
import { forwardRef } from "react";
const CurrencyLabel = forwardRef(
  ({ label, className }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "span",
      {
        ref,
        className: cn(
          text.body,
          color.disabled,
          "flex items-center justify-center bg-transparent",
          "text-6xl leading-none outline-none",
          className
        ),
        "data-testid": "ockCurrencySpan",
        children: label
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/CurrencyLabel.tsx",
        lineNumber: 12,
        columnNumber: 7
      },
      void 0
    );
  }
);
CurrencyLabel.displayName = "CurrencyLabel";
export {
  CurrencyLabel
};
//# sourceMappingURL=CurrencyLabel.js.map
