import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text } from "../../styles/theme.js";
import { useGetTransactionStatusLabel } from "../hooks/useGetTransactionStatusLabel.js";
function TransactionStatusLabel({
  className
}) {
  const { label, labelClassName } = useGetTransactionStatusLabel();
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, className), children: /* @__PURE__ */ jsxDEV("p", { className: labelClassName, children: label }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionStatusLabel.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionStatusLabel.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  TransactionStatusLabel
};
//# sourceMappingURL=TransactionStatusLabel.js.map
