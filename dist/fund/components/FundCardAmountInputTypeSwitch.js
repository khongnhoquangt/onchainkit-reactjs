'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { AmountInputTypeSwitch } from "../../internal/components/amount-input/AmountInputTypeSwitch.js";
import { useFundContext } from "./FundCardProvider.js";
const FundCardAmountInputTypeSwitch = ({
  className
}) => {
  const {
    selectedInputType,
    setSelectedInputType,
    asset,
    fundAmountFiat,
    fundAmountCrypto,
    exchangeRate,
    exchangeRateLoading,
    currency
  } = useFundContext();
  return /* @__PURE__ */ jsxDEV(
    AmountInputTypeSwitch,
    {
      selectedInputType,
      setSelectedInputType,
      asset,
      fiatAmount: fundAmountFiat,
      cryptoAmount: fundAmountCrypto,
      exchangeRate,
      exchangeRateLoading,
      currency,
      className
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardAmountInputTypeSwitch.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    void 0
  );
};
export {
  FundCardAmountInputTypeSwitch,
  FundCardAmountInputTypeSwitch as default
};
//# sourceMappingURL=FundCardAmountInputTypeSwitch.js.map
