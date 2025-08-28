import { jsxDEV } from "react/jsx-dev-runtime";
import { multiplyFloats } from "../../../internal/utils/multiplyFloats.js";
import { useNFTContext } from "../NFTProvider.js";
import { cn, text } from "../../../styles/theme.js";
import { formatAmount } from "../../../swap/utils/formatAmount.js";
import { formatAmount as formatAmount$1 } from "../../../token/utils/formatAmount.js";
function NFTAssetCost({ className }) {
  const { price, quantity } = useNFTContext();
  if ((price == null ? void 0 : price.amount) === void 0 || !price.currency || price.amountUSD === void 0) {
    return null;
  }
  if (Number(price == null ? void 0 : price.amount) === 0) {
    return /* @__PURE__ */ jsxDEV("div", { className: cn(text.body, "flex py-1", className), children: "Free" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTAssetCost.tsx",
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.body, "flex py-1", className), children: [
    /* @__PURE__ */ jsxDEV("div", { className: text.headline, children: [
      formatAmount(`${multiplyFloats(Number(price.amount), quantity)}`),
      " ",
      price.currency
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTAssetCost.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "px-2", children: "~" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTAssetCost.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      "$",
      formatAmount$1(`${multiplyFloats(Number(price.amountUSD), quantity)}`, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTAssetCost.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTAssetCost.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  NFTAssetCost
};
//# sourceMappingURL=NFTAssetCost.js.map
