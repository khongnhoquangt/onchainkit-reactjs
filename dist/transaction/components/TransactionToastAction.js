import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text } from "../../styles/theme.js";
import { useGetTransactionToastAction } from "../hooks/useGetTransactionToastAction.js";
function TransactionToastAction({
  className
}) {
  const { actionElement } = useGetTransactionToastAction();
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label1, "text-nowrap", className), children: actionElement }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToastAction.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  TransactionToastAction
};
//# sourceMappingURL=TransactionToastAction.js.map
