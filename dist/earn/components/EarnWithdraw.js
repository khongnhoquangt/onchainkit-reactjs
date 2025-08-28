'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { EarnDetails } from "./EarnDetails.js";
import { EarnCard } from "./EarnCard.js";
import { WithdrawAmountInput } from "./WithdrawAmountInput.js";
import { WithdrawBalance } from "./WithdrawBalance.js";
import { WithdrawButton } from "./WithdrawButton.js";
function EarnWithdrawDefaultContent() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(EarnDetails, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnWithdraw.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(WithdrawAmountInput, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnWithdraw.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(WithdrawBalance, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnWithdraw.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(WithdrawButton, { className: "-mt-4 h-12" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnWithdraw.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnWithdraw.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function EarnWithdraw({
  children = /* @__PURE__ */ jsxDEV(EarnWithdrawDefaultContent, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnWithdraw.tsx",
    lineNumber: 21,
    columnNumber: 14
  }, this),
  className
}) {
  return /* @__PURE__ */ jsxDEV(EarnCard, { className, children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnWithdraw.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
export {
  EarnWithdraw
};
//# sourceMappingURL=EarnWithdraw.js.map
