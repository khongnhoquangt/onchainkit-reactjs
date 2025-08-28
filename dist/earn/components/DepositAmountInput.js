'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { EarnAmountInput } from "./EarnAmountInput.js";
import { useEarnContext } from "./EarnProvider.js";
function DepositAmountInput({ className }) {
  const { depositAmount, setDepositAmount } = useEarnContext();
  return /* @__PURE__ */ jsxDEV(
    EarnAmountInput,
    {
      className,
      value: depositAmount,
      onChange: setDepositAmount,
      "aria-label": "Deposit Amount"
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/DepositAmountInput.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
export {
  DepositAmountInput
};
//# sourceMappingURL=DepositAmountInput.js.map
