import { jsxDEV } from "react/jsx-dev-runtime";
import { useMemo } from "react";
import { useChainId } from "wagmi";
import { useShowCallsStatus } from "wagmi/experimental";
import { getChainExplorer } from "../../core/network/getChainExplorer.js";
import { cn, color, text } from "../../styles/theme.js";
import { useTransactionContext } from "../components/TransactionProvider.js";
function useGetTransactionToastAction() {
  const { chainId, errorMessage, onSubmit, transactionHash, transactionId } = useTransactionContext();
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
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionToastAction.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionToastAction.tsx",
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
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionToastAction.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionToastAction.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      );
    }
    if (errorMessage) {
      actionElement = /* @__PURE__ */ jsxDEV("button", { type: "button", onClick: onSubmit, children: /* @__PURE__ */ jsxDEV("span", { className: cn(text.label1, color.primary), children: "Try again" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionToastAction.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/hooks/useGetTransactionToastAction.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this);
    }
    return { actionElement };
  }, [
    accountChainId,
    errorMessage,
    onSubmit,
    showCallsStatus,
    transactionHash,
    transactionId
  ]);
}
export {
  useGetTransactionToastAction
};
//# sourceMappingURL=useGetTransactionToastAction.js.map
