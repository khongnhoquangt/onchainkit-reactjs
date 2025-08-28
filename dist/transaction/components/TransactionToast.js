import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useCallback } from "react";
import { Toast } from "../../internal/components/Toast.js";
import { useTransactionContext } from "./TransactionProvider.js";
import { TransactionToastAction } from "./TransactionToastAction.js";
import { TransactionToastIcon } from "./TransactionToastIcon.js";
import { TransactionToastLabel } from "./TransactionToastLabel.js";
function TransactionToast({
  children,
  className,
  durationMs = 5e3,
  position = "bottom-center"
}) {
  const {
    errorMessage,
    isLoading,
    isToastVisible,
    receipt,
    setIsToastVisible,
    transactionHash,
    transactionId
  } = useTransactionContext();
  const closeToast = useCallback(() => {
    setIsToastVisible(false);
  }, [setIsToastVisible]);
  const isInProgress = !receipt && !isLoading && !transactionHash && !errorMessage && !transactionId;
  if (!isToastVisible || isInProgress) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    Toast,
    {
      position,
      className,
      durationMs,
      isVisible: isToastVisible,
      onClose: closeToast,
      startTimeout: !!receipt || !!errorMessage,
      children: children ?? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(TransactionToastIcon, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToast.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TransactionToastLabel, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToast.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TransactionToastAction, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToast.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToast.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToast.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}
export {
  TransactionToast
};
//# sourceMappingURL=TransactionToast.js.map
