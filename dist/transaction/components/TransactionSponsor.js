import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color, text } from "../../styles/theme.js";
import { useTransactionContext } from "./TransactionProvider.js";
function TransactionSponsor({ className }) {
  const {
    errorMessage,
    lifecycleStatus,
    paymasterUrl,
    receipt,
    transactionHash,
    transactionId
  } = useTransactionContext();
  const transactionInProgress = transactionId || transactionHash;
  if (lifecycleStatus.statusName !== "init" || !paymasterUrl || errorMessage || transactionInProgress || receipt) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, "flex", className), children: /* @__PURE__ */ jsxDEV("p", { className: color.foregroundMuted, children: "Zero transaction fee" }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionSponsor.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionSponsor.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  TransactionSponsor
};
//# sourceMappingURL=TransactionSponsor.js.map
