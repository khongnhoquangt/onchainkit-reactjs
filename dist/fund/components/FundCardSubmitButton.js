'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useCallback, useMemo } from "react";
import { useFundCardFundingUrl } from "../hooks/useFundCardFundingUrl.js";
import { FundButton } from "./FundButton.js";
import { useFundContext } from "./FundCardProvider.js";
function FundCardSubmitButton() {
  const {
    fundAmountFiat,
    fundAmountCrypto,
    submitButtonState,
    setSubmitButtonState,
    buttonText,
    currency,
    updateLifecycleStatus
  } = useFundContext();
  const fundingUrl = useFundCardFundingUrl();
  const handleOnClick = useCallback(
    () => setSubmitButtonState("loading"),
    [setSubmitButtonState]
  );
  const handleOnPopupClose = useCallback(() => {
    updateLifecycleStatus({ statusName: "exit", statusData: void 0 });
    setSubmitButtonState("default");
  }, [updateLifecycleStatus, setSubmitButtonState]);
  const isButtonDisabled = useMemo(
    () => (!fundAmountFiat || Number(fundAmountCrypto) === 0) && (!fundAmountCrypto || Number(fundAmountFiat) === 0),
    [fundAmountCrypto, fundAmountFiat]
  );
  return /* @__PURE__ */ jsxDEV(
    FundButton,
    {
      disabled: isButtonDisabled,
      hideIcon: submitButtonState === "default",
      text: buttonText,
      className: "w-full",
      fundingUrl,
      state: submitButtonState,
      onClick: handleOnClick,
      onPopupClose: handleOnPopupClose,
      fiatCurrency: currency
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardSubmitButton.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  );
}
export {
  FundCardSubmitButton
};
//# sourceMappingURL=FundCardSubmitButton.js.map
