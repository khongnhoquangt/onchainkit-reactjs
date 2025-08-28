'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useIsMounted } from "../../internal/hooks/useIsMounted.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn } from "../../styles/theme.js";
import { CheckoutProvider } from "./CheckoutProvider.js";
function Checkout({
  chargeHandler,
  children,
  className,
  isSponsored,
  onStatus,
  productId
}) {
  const isMounted = useIsMounted();
  const componentTheme = useTheme();
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    CheckoutProvider,
    {
      chargeHandler,
      isSponsored,
      onStatus,
      productId,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(componentTheme, "flex w-full flex-col gap-2", className),
          children
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/Checkout.tsx",
          lineNumber: 31,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/checkout/components/Checkout.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}
export {
  Checkout
};
//# sourceMappingURL=Checkout.js.map
