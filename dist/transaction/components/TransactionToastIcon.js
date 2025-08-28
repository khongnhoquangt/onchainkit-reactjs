import { jsxDEV } from "react/jsx-dev-runtime";
import { useMemo } from "react";
import { Spinner } from "../../internal/components/Spinner.js";
import { ErrorSvg } from "../../internal/svg/errorSvg.js";
import { SuccessSvg } from "../../internal/svg/successSvg.js";
import { cn, text } from "../../styles/theme.js";
import { useTransactionContext } from "./TransactionProvider.js";
function TransactionToastIcon({ className }) {
  const { errorMessage, isLoading, receipt, transactionHash, transactionId } = useTransactionContext();
  const isInProgress = isLoading || !!transactionId || !!transactionHash;
  const icon = useMemo(() => {
    if (receipt) {
      return /* @__PURE__ */ jsxDEV(SuccessSvg, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToastIcon.tsx",
        lineNumber: 17,
        columnNumber: 14
      }, this);
    }
    if (errorMessage) {
      return /* @__PURE__ */ jsxDEV(ErrorSvg, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToastIcon.tsx",
        lineNumber: 20,
        columnNumber: 14
      }, this);
    }
    if (isInProgress) {
      return /* @__PURE__ */ jsxDEV(Spinner, { className: "px-1.5 py-1.5" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToastIcon.tsx",
        lineNumber: 23,
        columnNumber: 14
      }, this);
    }
    return null;
  }, [isInProgress, errorMessage, receipt]);
  if (!icon) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, className), children: icon }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionToastIcon.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
export {
  TransactionToastIcon
};
//# sourceMappingURL=TransactionToastIcon.js.map
