'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useAmountInput } from "../../internal/hooks/useAmountInput.js";
import { FundCardPresetAmountInputItem } from "./FundCardPresetAmountInputItem.js";
import { useFundContext } from "./FundCardProvider.js";
function FundCardPresetAmountInputList() {
  const {
    presetAmountInputs,
    currency,
    selectedInputType,
    exchangeRate,
    setFundAmountFiat,
    setFundAmountCrypto
  } = useFundContext();
  const { handleFiatChange } = useAmountInput({
    setFiatAmount: setFundAmountFiat,
    setCryptoAmount: setFundAmountCrypto,
    selectedInputType,
    exchangeRate: String(exchangeRate)
  });
  if (!presetAmountInputs) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockPresetAmountInputList",
      className: "flex w-full flex-wrap items-center justify-between gap-2 pt-8",
      children: presetAmountInputs.map((amount, index) => /* @__PURE__ */ jsxDEV(
        FundCardPresetAmountInputItem,
        {
          presetAmountInput: amount,
          onClick: handleFiatChange,
          currency
        },
        index,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPresetAmountInputList.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPresetAmountInputList.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
export {
  FundCardPresetAmountInputList
};
//# sourceMappingURL=FundCardPresetAmountInputList.js.map
