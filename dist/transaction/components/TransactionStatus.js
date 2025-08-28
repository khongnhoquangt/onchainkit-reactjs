import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { cn } from "../../styles/theme.js";
import { TransactionStatusAction } from "./TransactionStatusAction.js";
import { TransactionStatusLabel } from "./TransactionStatusLabel.js";
function TransactionStatus({
  children,
  className
}) {
  return /* @__PURE__ */ jsxDEV("div", { className: cn("flex justify-between", className), children: children ?? /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(TransactionStatusLabel, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionStatus.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(TransactionStatusAction, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionStatus.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionStatus.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/transaction/components/TransactionStatus.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  TransactionStatus
};
//# sourceMappingURL=TransactionStatus.js.map
