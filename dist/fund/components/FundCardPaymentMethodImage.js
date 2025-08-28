import { jsxDEV } from "react/jsx-dev-runtime";
import { useIcon } from "../../internal/hooks/useIcon.js";
import { cn } from "../../styles/theme.js";
function FundCardPaymentMethodImage({
  className,
  paymentMethod
}) {
  const { icon } = paymentMethod;
  const iconSvg = useIcon({ icon });
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockFundCardPaymentMethodImage__iconContainer",
      className: cn(
        "flex items-center justify-center overflow-hidden rounded-[50%]",
        className
      ),
      children: iconSvg
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardPaymentMethodImage.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
export {
  FundCardPaymentMethodImage
};
//# sourceMappingURL=FundCardPaymentMethodImage.js.map
