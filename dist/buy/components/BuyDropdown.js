'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { BuyEvent } from "../../core/analytics/types.js";
import { openPopup } from "../../internal/utils/openPopup.js";
import { useOnchainKit } from "../../useOnchainKit.js";
import { useCallback, useMemo, useEffect } from "react";
import { useAccount } from "wagmi";
import { ONRAMP_BUY_URL } from "../../fund/constants.js";
import { getFundingPopupSize } from "../../fund/utils/getFundingPopupSize.js";
import { getRoundedAmount } from "../../internal/utils/getRoundedAmount.js";
import { cn, text, color, border, background } from "../../styles/theme.js";
import { ONRAMP_PAYMENT_METHODS } from "../constants.js";
import { isApplePaySupported } from "../utils/isApplePaySupported.js";
import { BuyOnrampItem } from "./BuyOnrampItem.js";
import { useBuyContext } from "./BuyProvider.js";
import { BuyTokenItem } from "./BuyTokenItem.js";
function BuyDropdown() {
  var _a, _b, _c, _d, _e, _f, _g;
  const { projectId } = useOnchainKit();
  const { to, fromETH, fromUSDC, from, startPopupMonitor, setIsDropdownOpen } = useBuyContext();
  const { address } = useAccount();
  const { sendAnalytics } = useAnalytics();
  const handleOnrampClick = useCallback(
    (paymentMethodId) => {
      return () => {
        var _a2;
        sendAnalytics(BuyEvent.BuyOptionSelected, {
          option: paymentMethodId
        });
        const assetSymbol = (_a2 = to == null ? void 0 : to.token) == null ? void 0 : _a2.symbol;
        let fundAmount = to == null ? void 0 : to.amount;
        if ((fundAmount == null ? void 0 : fundAmount[0]) === ".") {
          fundAmount = `0${fundAmount}`;
        }
        const fundingUrl = `${ONRAMP_BUY_URL}/one-click?appId=${projectId}&addresses={"${address}":["base"]}&assets=["${assetSymbol}"]&presetCryptoAmount=${fundAmount}&defaultPaymentMethod=${paymentMethodId}`;
        const { height, width } = getFundingPopupSize("md", fundingUrl);
        const popupWindow = openPopup({
          url: fundingUrl,
          height,
          width,
          target: "_blank"
        });
        if (popupWindow) {
          startPopupMonitor(popupWindow);
        }
      };
    },
    [address, to, projectId, startPopupMonitor, sendAnalytics]
  );
  const formattedAmountUSD = useMemo(() => {
    if (!(to == null ? void 0 : to.amountUSD) || (to == null ? void 0 : to.amountUSD) === "0") {
      return null;
    }
    const roundedAmount = Number(getRoundedAmount(to == null ? void 0 : to.amountUSD, 2));
    return `$${roundedAmount.toFixed(2)}`;
  }, [to == null ? void 0 : to.amountUSD]);
  const isToETH = ((_a = to == null ? void 0 : to.token) == null ? void 0 : _a.symbol) === "ETH";
  const isToUSDC = ((_b = to == null ? void 0 : to.token) == null ? void 0 : _b.symbol) === "USDC";
  const showFromToken = ((_c = to == null ? void 0 : to.token) == null ? void 0 : _c.symbol) !== ((_d = from == null ? void 0 : from.token) == null ? void 0 : _d.symbol) && from && ((_e = from == null ? void 0 : from.token) == null ? void 0 : _e.symbol) !== "ETH" && ((_f = from == null ? void 0 : from.token) == null ? void 0 : _f.symbol) !== "USDC";
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsDropdownOpen]);
  const isApplePayEnabled = isApplePaySupported();
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        color.foreground,
        background.default,
        "absolute right-0 bottom-0 flex translate-y-[102%] flex-col gap-2",
        "z-10 min-w-80 rounded border p-2",
        border.radius
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: cn(text.headline, "px-2 pt-2"), children: "Buy with" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyDropdown.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this),
        !isToETH && /* @__PURE__ */ jsxDEV(BuyTokenItem, { swapUnit: fromETH }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyDropdown.tsx",
          lineNumber: 100,
          columnNumber: 20
        }, this),
        !isToUSDC && /* @__PURE__ */ jsxDEV(BuyTokenItem, { swapUnit: fromUSDC }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyDropdown.tsx",
          lineNumber: 101,
          columnNumber: 21
        }, this),
        showFromToken && /* @__PURE__ */ jsxDEV(BuyTokenItem, { swapUnit: from }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyDropdown.tsx",
          lineNumber: 102,
          columnNumber: 25
        }, this),
        ONRAMP_PAYMENT_METHODS.map((method) => {
          if (method.id === "APPLE_PAY" && !isApplePayEnabled) {
            return null;
          }
          return /* @__PURE__ */ jsxDEV(
            BuyOnrampItem,
            {
              name: method.name,
              description: method.description,
              onClick: handleOnrampClick(method.id),
              icon: method.icon,
              to
            },
            method.id,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyDropdown.tsx",
              lineNumber: 109,
              columnNumber: 11
            },
            this
          );
        }),
        !!formattedAmountUSD && /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn("flex justify-end", text.legal, color.foregroundMuted),
            children: `${to == null ? void 0 : to.amount} ${(_g = to == null ? void 0 : to.token) == null ? void 0 : _g.name} ≈ ${formattedAmountUSD}`
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyDropdown.tsx",
            lineNumber: 121,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyDropdown.tsx",
      lineNumber: 90,
      columnNumber: 5
    },
    this
  );
}
export {
  BuyDropdown
};
//# sourceMappingURL=BuyDropdown.js.map
