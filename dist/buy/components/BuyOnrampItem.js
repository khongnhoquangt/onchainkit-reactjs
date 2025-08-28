'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { usdcToken } from "../../token/constants.js";
import { useCallback, useMemo } from "react";
import { applePaySvg } from "../../internal/svg/applePaySvg.js";
import { cardSvg } from "../../internal/svg/cardSvg.js";
import { coinbaseLogoSvg } from "../../internal/svg/coinbaseLogoSvg.js";
import { cn, color, pressable, text } from "../../styles/theme.js";
import { useBuyContext } from "./BuyProvider.js";
const ONRAMP_ICON_MAP = {
  applePay: applePaySvg,
  coinbasePay: coinbaseLogoSvg,
  creditCard: cardSvg
};
function BuyOnrampItem({
  name,
  description,
  onClick,
  icon,
  to
}) {
  const { setIsDropdownOpen } = useBuyContext();
  const handleClick = useCallback(() => {
    setIsDropdownOpen(false);
    onClick();
  }, [onClick, setIsDropdownOpen]);
  const fiatAmount = useMemo(() => {
    var _a, _b, _c;
    if (((_b = (_a = to == null ? void 0 : to.token) == null ? void 0 : _a.address) == null ? void 0 : _b.toLowerCase()) === ((_c = usdcToken) == null ? void 0 : _c.address.toLowerCase())) {
      return to == null ? void 0 : to.amount;
    }
    return to == null ? void 0 : to.amountUSD;
  }, [to]);
  const isDisabled = !fiatAmount || Number.parseFloat(fiatAmount) < 5 && name !== "Coinbase";
  const message = useMemo(() => {
    if (isDisabled) {
      return "Minimum purchase amount is $5";
    }
    return description;
  }, [isDisabled, description]);
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: cn(
        "flex items-center gap-2 rounded-lg p-2",
        text.label2,
        !isDisabled && pressable.default,
        isDisabled && color.foregroundMuted
      ),
      onClick: handleClick,
      type: "button",
      "data-testid": `ock-${icon}OnrampItem`,
      disabled: isDisabled,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex h-9 w-9 items-center justify-center", children: ONRAMP_ICON_MAP[icon] }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyOnrampItem.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative flex items-center gap-1", children: /* @__PURE__ */ jsxDEV("div", { children: name }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyOnrampItem.tsx",
            lineNumber: 81,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyOnrampItem.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: cn("text-xs", color.foregroundMuted), children: message }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyOnrampItem.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyOnrampItem.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyOnrampItem.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  );
}
export {
  BuyOnrampItem
};
//# sourceMappingURL=BuyOnrampItem.js.map
