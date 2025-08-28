import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useIsMounted } from "../../internal/hooks/useIsMounted.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn } from "../../styles/theme.js";
import { useOnchainKit } from "../../useOnchainKit.js";
import { TransactionButton } from "./TransactionButton.js";
import { TransactionProvider } from "./TransactionProvider.js";
import { TransactionToast } from "./TransactionToast.js";
function Transaction({
  calls,
  capabilities,
  chainId,
  className,
  children,
  contracts,
  disabled = false,
  isSponsored,
  onError,
  onStatus,
  onSuccess,
  resetAfter
}) {
  const isMounted = useIsMounted();
  const componentTheme = useTheme();
  const { chain } = useOnchainKit();
  if (!isMounted) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn(componentTheme, "flex w-full flex-col gap-2", className)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/Transaction.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    );
  }
  const accountChainId = chainId ? chainId : chain.id;
  return /* @__PURE__ */ jsxDEV(
    TransactionProvider,
    {
      calls,
      capabilities,
      chainId: accountChainId,
      contracts,
      isSponsored,
      onError,
      onStatus,
      onSuccess,
      resetAfter,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(componentTheme, "flex w-full flex-col gap-2", className),
          children: children ?? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(TransactionButton, { disabled }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/Transaction.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(TransactionToast, {}, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/Transaction.tsx",
              lineNumber: 59,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/Transaction.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/Transaction.tsx",
          lineNumber: 53,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/Transaction.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}
export {
  Transaction
};
//# sourceMappingURL=Transaction.js.map
