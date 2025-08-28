import { jsxDEV } from "react/jsx-dev-runtime";
import { useMemo } from "react";
import { useChainId } from "wagmi";
import { useShowCallsStatus } from "wagmi/experimental";
import { getChainExplorer } from "../../core/network/getChainExplorer.js";
import { cn, color, text } from "../../styles/theme.js";
import { useTransactionContext } from "../components/TransactionProvider.js";
function useGetTransactionStatusAction() {
  const { chainId, receipt, transactionHash, transactionId } = useTransactionContext();
  const accountChainId = chainId ?? useChainId();
  const { showCallsStatus } = useShowCallsStatus();
  return useMemo(() => {
    const chainExplorer = getChainExplorer(accountChainId);
    let actionElement = null;
    if (transactionHash) {
      actionElement = /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: `${chainExplorer}/tx/${transactionHash}`,
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ jsxDEV("span", { className: cn(text.label1, color.primary), children: "View transaction" }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionStatusAction.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionStatusAction.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      );
    }
    if (transactionId) {
      actionElement = /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => showCallsStatus({ id: transactionId }),
          type: "button",
          children: /* @__PURE__ */ jsxDEV("span", { className: cn(text.label1, color.primary), children: "View transaction" }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionStatusAction.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionStatusAction.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      );
    }
    if (receipt) {
      actionElement = null;
    }
    return { actionElement };
  }, [
    accountChainId,
    receipt,
    showCallsStatus,
    transactionHash,
    transactionId
  ]);
}
export {
  useGetTransactionStatusAction
};
//# sourceMappingURL=useGetTransactionStatusAction.js.map
