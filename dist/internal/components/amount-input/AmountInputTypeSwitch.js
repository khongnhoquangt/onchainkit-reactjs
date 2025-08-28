import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text, pressable } from "../../../styles/theme.js";
import { useCallback, useMemo } from "react";
import { useIcon } from "../../hooks/useIcon.js";
import { formatFiatAmount } from "../../utils/formatFiatAmount.js";
import { truncateDecimalPlaces } from "../../utils/truncateDecimalPlaces.js";
import { Skeleton } from "../Skeleton.js";
function AmountInputTypeSwitch({
  selectedInputType,
  setSelectedInputType,
  asset,
  fiatAmount,
  cryptoAmount,
  exchangeRate,
  exchangeRateLoading,
  currency,
  loadingDisplay = /* @__PURE__ */ jsxDEV(Skeleton, { className: "h-[1.625rem]" }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInputTypeSwitch.tsx",
    lineNumber: 30,
    columnNumber: 20
  }, this),
  className
}) {
  const iconSvg = useIcon({ icon: "toggle" });
  const handleToggle = useCallback(() => {
    setSelectedInputType(selectedInputType === "fiat" ? "crypto" : "fiat");
  }, [selectedInputType, setSelectedInputType]);
  const formatCrypto = useCallback(
    (amount) => {
      return `${truncateDecimalPlaces(amount || "0", 8)} ${asset}`;
    },
    [asset]
  );
  const amountLine = useMemo(() => {
    return /* @__PURE__ */ jsxDEV("span", { "data-testid": "ockAmountLine", className: cn(text.label1), children: selectedInputType === "fiat" ? formatCrypto(cryptoAmount) : formatFiatAmount({
      amount: fiatAmount,
      currency,
      minimumFractionDigits: 0
    }) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInputTypeSwitch.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this);
  }, [cryptoAmount, fiatAmount, selectedInputType, formatCrypto, currency]);
  if (exchangeRateLoading || !exchangeRate) {
    return loadingDisplay;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn("flex items-center", className), children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        "aria-label": "amount type switch",
        className: cn(
          pressable.default,
          "mr-1 rounded-full p-1 opacity-50 transition-opacity hover:opacity-100"
        ),
        "data-testid": "ockAmountTypeSwitch",
        onClick: handleToggle,
        children: /* @__PURE__ */ jsxDEV("div", { className: "h-[1.125rem] w-[1.125rem]", children: iconSvg }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInputTypeSwitch.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInputTypeSwitch.tsx",
        lineNumber: 66,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "w-full truncate", children: amountLine }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInputTypeSwitch.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/amount-input/AmountInputTypeSwitch.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
export {
  AmountInputTypeSwitch
};
//# sourceMappingURL=AmountInputTypeSwitch.js.map
