'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text } from "../../styles/theme.js";
import { useGetCheckoutStatus } from "../hooks/useGetCheckoutStatus.js";
function CheckoutStatus({ className }) {
  const { label, labelClassName } = useGetCheckoutStatus();
  return /* @__PURE__ */ jsxDEV("div", { className: cn("flex justify-between", className), children: /* @__PURE__ */ jsxDEV("div", { className: text.label2, children: /* @__PURE__ */ jsxDEV("p", { className: labelClassName, children: label }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutStatus.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutStatus.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutStatus.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  CheckoutStatus
};
//# sourceMappingURL=CheckoutStatus.js.map
