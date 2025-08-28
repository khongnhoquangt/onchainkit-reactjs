'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Spinner } from "../../internal/components/Spinner.js";
import { cn, color, text, pressable, border, background } from "../../styles/theme.js";
import { ConnectWallet } from "../../wallet/components/ConnectWallet.js";
import { useSwapContext } from "./SwapProvider.js";
function SwapButton({
  className,
  label = "Swap",
  disabled = false
}) {
  var _a, _b;
  const {
    address,
    to,
    from,
    lifecycleStatus: { statusName },
    handleSubmit
  } = useSwapContext();
  const isLoading = to.loading || from.loading || statusName === "transactionPending" || statusName === "transactionApproved";
  const isDisabled = !from.amount || !from.token || !to.amount || !to.token || disabled || isLoading;
  const isSwapInvalid = ((_a = to.token) == null ? void 0 : _a.address) === ((_b = from.token) == null ? void 0 : _b.address);
  if (!isDisabled && !address) {
    return /* @__PURE__ */ jsxDEV(ConnectWallet, { className: cn("mt-4 w-full", className) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapButton.tsx",
      lineNumber: 40,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      className: cn(
        background.primary,
        border.radius,
        "w-full rounded-xl",
        "mt-4 px-4 py-3",
        isDisabled && pressable.disabled,
        text.headline,
        className
      ),
      onClick: () => handleSubmit(),
      disabled: isDisabled || isSwapInvalid,
      "data-testid": "ockSwapButton_Button",
      children: isLoading ? /* @__PURE__ */ jsxDEV(Spinner, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapButton.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("span", { className: cn(text.headline, color.inverse), children: label }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapButton.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapButton.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}
export {
  SwapButton
};
//# sourceMappingURL=SwapButton.js.map
