import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color, text } from "../../styles/theme.js";
import { useGetTransactionToastLabel } from "../hooks/useGetTransactionToastLabel.js";
function TransactionToastLabel({
  className
}) {
  const { label } = useGetTransactionToastLabel();
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label1, "text-nowrap", className), children: /* @__PURE__ */ jsxDEV("p", { className: color.foreground, children: label }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToastLabel.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToastLabel.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  TransactionToastLabel
};
//# sourceMappingURL=TransactionToastLabel.js.map
