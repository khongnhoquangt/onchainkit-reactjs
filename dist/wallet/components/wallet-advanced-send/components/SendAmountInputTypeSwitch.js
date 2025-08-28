import { jsxDEV } from "react/jsx-dev-runtime";
import { Skeleton } from "../../../../internal/components/Skeleton.js";
import { AmountInputTypeSwitch } from "../../../../internal/components/amount-input/AmountInputTypeSwitch.js";
import { cn, color, text } from "../../../../styles/theme.js";
import { useSendContext } from "./SendProvider.js";
const defaultErrorDisplay = /* @__PURE__ */ jsxDEV(
  "div",
  {
    "data-testid": "ockSendAmountInputTypeSwitch_ErrorDisplay",
    className: cn(text.caption, color.foregroundMuted, "h-[1.625rem]"),
    children: "Exchange rate unavailable"
  },
  void 0,
  false,
  {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAmountInputTypeSwitch.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  void 0
);
function SendAmountInputTypeSwitch({
  errorDisplay,
  className
}) {
  const {
    selectedToken,
    fiatAmount,
    cryptoAmount,
    exchangeRate,
    exchangeRateLoading,
    selectedInputType,
    setSelectedInputType
  } = useSendContext();
  if (exchangeRateLoading) {
    return /* @__PURE__ */ jsxDEV(Skeleton, { className: "h-[1.625rem]" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAmountInputTypeSwitch.tsx",
      lineNumber: 35,
      columnNumber: 12
    }, this);
  }
  if (!exchangeRate) {
    if (errorDisplay) {
      return errorDisplay;
    }
    return defaultErrorDisplay;
  }
  return /* @__PURE__ */ jsxDEV(
    AmountInputTypeSwitch,
    {
      asset: (selectedToken == null ? void 0 : selectedToken.symbol) ?? "",
      fiatAmount: fiatAmount ?? "",
      cryptoAmount: cryptoAmount ?? "",
      exchangeRate,
      exchangeRateLoading: false,
      currency: "USD",
      selectedInputType,
      setSelectedInputType,
      className
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAmountInputTypeSwitch.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}
export {
  SendAmountInputTypeSwitch
};
//# sourceMappingURL=SendAmountInputTypeSwitch.js.map
