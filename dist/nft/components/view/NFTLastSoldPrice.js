import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTContext } from "../NFTProvider.js";
import { cn, color, text } from "../../../styles/theme.js";
import { formatAmount } from "../../../swap/utils/formatAmount.js";
import { formatAmount as formatAmount$1 } from "../../../token/utils/formatAmount.js";
function NFTLastSoldPrice({
  className,
  label = "Last sale price"
}) {
  const { lastSoldPrice } = useNFTContext();
  if (!(lastSoldPrice == null ? void 0 : lastSoldPrice.amount) || !(lastSoldPrice == null ? void 0 : lastSoldPrice.currency) || !(lastSoldPrice == null ? void 0 : lastSoldPrice.amountUSD)) {
    return null;
  }
  const { amount, currency, amountUSD } = lastSoldPrice;
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, "flex justify-between", className), children: [
    /* @__PURE__ */ jsxDEV("div", { className: cn(color.foregroundMuted), children: label }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTLastSoldPrice.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV("div", { className: text.label1, children: [
        formatAmount(amount),
        " ",
        currency
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTLastSoldPrice.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "px-2", children: "~" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTLastSoldPrice.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        "$",
        formatAmount$1(`${amountUSD}`, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTLastSoldPrice.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTLastSoldPrice.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTLastSoldPrice.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  NFTLastSoldPrice
};
//# sourceMappingURL=NFTLastSoldPrice.js.map
