import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text } from "../../styles/theme.js";
import { useGetTransactionStatusAction } from "../hooks/useGetTransactionStatusAction.js";
function TransactionStatusAction({
  className
}) {
  const { actionElement } = useGetTransactionStatusAction();
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, "min-w-[70px]", className), children: actionElement }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionStatusAction.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  TransactionStatusAction
};
//# sourceMappingURL=TransactionStatusAction.js.map
