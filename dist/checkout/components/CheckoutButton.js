'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useMemo, useEffect } from "react";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { CheckoutEvent } from "../../core/analytics/types.js";
import { Spinner } from "../../internal/components/Spinner.js";
import { useIcon } from "../../internal/hooks/useIcon.js";
import { cn, color, text, pressable, border } from "../../styles/theme.js";
import { CHECKOUT_LIFECYCLESTATUS } from "../constants.js";
import { useCheckoutContext } from "./CheckoutProvider.js";
function CheckoutButton({
  className,
  coinbaseBranded,
  disabled,
  icon,
  text: text$1 = "Pay"
}) {
  if (coinbaseBranded) {
    icon = "coinbasePay";
    text$1 = "Pay";
  }
  const { lifecycleStatus, onSubmit } = useCheckoutContext();
  const iconSvg = useIcon({ icon });
  const { sendAnalytics } = useAnalytics();
  const isLoading = (lifecycleStatus == null ? void 0 : lifecycleStatus.statusName) === CHECKOUT_LIFECYCLESTATUS.PENDING;
  const isFetchingData = (lifecycleStatus == null ? void 0 : lifecycleStatus.statusName) === CHECKOUT_LIFECYCLESTATUS.FETCHING_DATA;
  const isDisabled = disabled || isLoading || isFetchingData;
  const buttonText = useMemo(() => {
    if ((lifecycleStatus == null ? void 0 : lifecycleStatus.statusName) === CHECKOUT_LIFECYCLESTATUS.SUCCESS) {
      return "View payment details";
    }
    return text$1;
  }, [lifecycleStatus == null ? void 0 : lifecycleStatus.statusName, text$1]);
  const shouldRenderIcon = buttonText === text$1 && iconSvg;
  useEffect(() => {
    var _a;
    if ((lifecycleStatus == null ? void 0 : lifecycleStatus.statusName) === CHECKOUT_LIFECYCLESTATUS.SUCCESS && lifecycleStatus.statusData) {
      const { transactionReceipts, chargeId } = lifecycleStatus.statusData;
      const transactionHash = (_a = transactionReceipts == null ? void 0 : transactionReceipts[0]) == null ? void 0 : _a.transactionHash;
      if (transactionHash && chargeId) {
        sendAnalytics(CheckoutEvent.CheckoutSuccess, {
          chargeHandlerId: chargeId,
          transactionHash
        });
      }
    }
  }, [lifecycleStatus, sendAnalytics]);
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: cn(
        coinbaseBranded ? pressable.coinbaseBranding : pressable.primary,
        border.radius,
        isDisabled && pressable.disabled,
        text.headline,
        "mt-4 w-full px-4 py-3",
        className
      ),
      onClick: onSubmit,
      type: "button",
      disabled: isDisabled,
      children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center whitespace-nowrap", children: isLoading ? /* @__PURE__ */ jsxDEV(Spinner, { className: "h-5 w-5" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutButton.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
        shouldRenderIcon && /* @__PURE__ */ jsxDEV("div", { className: "mr-2 flex h-5 w-5 shrink-0 items-center justify-center", children: iconSvg }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutButton.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: cn(
              text.headline,
              coinbaseBranded ? "text-gray-50" : color.inverse
            ),
            children: buttonText
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutButton.tsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutButton.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutButton.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/CheckoutButton.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
}
export {
  CheckoutButton
};
//# sourceMappingURL=CheckoutButton.js.map
