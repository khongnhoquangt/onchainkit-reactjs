'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { EarnDetails } from "./EarnDetails.js";
import { DepositAmountInput } from "./DepositAmountInput.js";
import { DepositBalance } from "./DepositBalance.js";
import { DepositButton } from "./DepositButton.js";
import { EarnCard } from "./EarnCard.js";
function EarnDepositDefaultContent() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(EarnDetails, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDeposit.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DepositAmountInput, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDeposit.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DepositBalance, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDeposit.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DepositButton, { className: "-mt-4 h-12" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDeposit.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDeposit.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function EarnDeposit({
  children = /* @__PURE__ */ jsxDEV(EarnDepositDefaultContent, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDeposit.tsx",
    lineNumber: 21,
    columnNumber: 14
  }, this),
  className
}) {
  return /* @__PURE__ */ jsxDEV(EarnCard, { className, children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDeposit.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
export {
  EarnDeposit
};
//# sourceMappingURL=EarnDeposit.js.map
