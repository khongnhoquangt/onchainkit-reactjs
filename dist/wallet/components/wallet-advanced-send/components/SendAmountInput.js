'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { AmountInput } from "../../../../internal/components/amount-input/AmountInput.js";
import { SendAmountInputTypeSwitch } from "./SendAmountInputTypeSwitch.js";
import { useSendContext } from "./SendProvider.js";
function SendAmountInput({
  className,
  textClassName
}) {
  const {
    selectedToken,
    cryptoAmount,
    handleCryptoAmountChange,
    fiatAmount,
    handleFiatAmountChange,
    selectedInputType,
    exchangeRate
  } = useSendContext();
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full flex-col justify-center", children: [
    /* @__PURE__ */ jsxDEV(
      AmountInput,
      {
        fiatAmount: fiatAmount ?? "",
        cryptoAmount: cryptoAmount ?? "",
        asset: (selectedToken == null ? void 0 : selectedToken.symbol) ?? "",
        currency: "USD",
        selectedInputType,
        setFiatAmount: handleFiatAmountChange,
        setCryptoAmount: handleCryptoAmountChange,
        exchangeRate: String(exchangeRate),
        className,
        textClassName
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAmountInput.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(SendAmountInputTypeSwitch, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAmountInput.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAmountInput.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  SendAmountInput
};
//# sourceMappingURL=SendAmountInput.js.map
