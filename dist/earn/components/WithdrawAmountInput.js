'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { EarnAmountInput } from "./EarnAmountInput.js";
import { useEarnContext } from "./EarnProvider.js";
function WithdrawAmountInput({ className }) {
  const { withdrawAmount, setWithdrawAmount } = useEarnContext();
  return /* @__PURE__ */ jsxDEV(
    EarnAmountInput,
    {
      className,
      value: withdrawAmount,
      onChange: setWithdrawAmount,
      "aria-label": "Withdraw Amount"
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/WithdrawAmountInput.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
export {
  WithdrawAmountInput
};
//# sourceMappingURL=WithdrawAmountInput.js.map
