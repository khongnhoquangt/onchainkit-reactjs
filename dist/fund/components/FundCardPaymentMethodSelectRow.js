import { jsxDEV } from "react/jsx-dev-runtime";
import { memo, useCallback } from "react";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { FundEvent } from "../../core/analytics/types.js";
import { cn, pressable, text, color, background, border } from "../../styles/theme.js";
import { FundCardPaymentMethodImage } from "./FundCardPaymentMethodImage.js";
const FundCardPaymentMethodSelectRow = memo(
  ({
    paymentMethod,
    onClick,
    hideImage,
    hideDescription,
    disabled,
    disabledReason,
    testId
  }) => {
    const { sendAnalytics } = useAnalytics();
    const handleOnClick = useCallback(() => {
      if (!disabled) {
        onClick == null ? void 0 : onClick(paymentMethod);
        sendAnalytics(FundEvent.FundOptionSelected, {
          option: paymentMethod.id
        });
      }
    }, [disabled, onClick, paymentMethod, sendAnalytics]);
    return /* @__PURE__ */ jsxDEV(
      "button",
      {
        "data-testid": testId,
        type: "button",
        className: cn(
          pressable.default,
          border.radius,
          background.default,
          "flex w-full items-center justify-between px-4 py-2",
          {
            [pressable.disabled]: disabled
          }
        ),
        onClick: handleOnClick,
        disabled,
        title: disabledReason,
        children: /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-3", children: [
          !hideImage && /* @__PURE__ */ jsxDEV(
            FundCardPaymentMethodImage,
            {
              paymentMethod,
              className: cn("h-4 w-4", {
                [pressable.disabled]: disabled
              })
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectRow.tsx",
              lineNumber: 55,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ jsxDEV("span", { className: cn(text.headline), children: paymentMethod.name }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectRow.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, void 0),
            !hideDescription && /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: cn(
                  text.label2,
                  color.foregroundMuted,
                  "font-normal"
                ),
                children: disabledReason || paymentMethod.description
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectRow.tsx",
                lineNumber: 65,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectRow.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectRow.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodSelectRow.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      void 0
    );
  }
);
FundCardPaymentMethodSelectRow.displayName = "FundCardPaymentMethodSelectRow";
export {
  FundCardPaymentMethodSelectRow
};
//# sourceMappingURL=FundCardPaymentMethodSelectRow.js.map
