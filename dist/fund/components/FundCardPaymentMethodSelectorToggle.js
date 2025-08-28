import { jsxDEV } from "react/jsx-dev-runtime";
import { forwardRef } from "react";
import { caretUpSvg } from "../../internal/svg/caretUpSvg.js";
import { cn, color, text, border, pressable } from "../../styles/theme.js";
import { FundCardPaymentMethodImage } from "./FundCardPaymentMethodImage.js";
const FundCardPaymentMethodSelectorToggle = forwardRef(
  ({
    onClick,
    paymentMethod,
    isOpen,
    className
  }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        className: cn(
          pressable.default,
          border.radius,
          border.lineDefault,
          "flex h-12 w-full items-center gap-2 px-3 py-1",
          className
        ),
        onClick,
        ref,
        "data-testid": "ockFundCardPaymentMethodSelectorToggle",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-4", children: /* @__PURE__ */ jsxDEV(
            FundCardPaymentMethodImage,
            {
              paymentMethod,
              className: "h-4 w-4"
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectorToggle.tsx",
              lineNumber: 32,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectorToggle.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: cn(text.headline, color.foreground, "flex w-full"),
              "data-testid": "ockFundCardPaymentMethodSelectorToggle__paymentMethodName",
              children: paymentMethod.name
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectorToggle.tsx",
              lineNumber: 37,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: cn(
                "rotate-90 transition-transform duration-200",
                isOpen && "rotate-180"
              ),
              children: caretUpSvg
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectorToggle.tsx",
              lineNumber: 44,
              columnNumber: 9
            },
            void 0
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectorToggle.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      void 0
    );
  }
);
FundCardPaymentMethodSelectorToggle.displayName = "FundCardPaymentMethodSelectorToggle";
export {
  FundCardPaymentMethodSelectorToggle
};
//# sourceMappingURL=FundCardPaymentMethodSelectorToggle.js.map
