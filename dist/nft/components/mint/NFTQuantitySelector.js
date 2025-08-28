import { jsxDEV } from "react/jsx-dev-runtime";
import { QuantitySelector } from "../../../internal/components/QuantitySelector.js";
import { useNFTContext } from "../NFTProvider.js";
import { useMintAnalytics } from "../../hooks/useMintAnalytics.js";
import { cn } from "../../../styles/theme.js";
function NFTQuantitySelector({ className }) {
  const { maxMintsPerWallet, setQuantity } = useNFTContext();
  const { handleQuantityChange } = useMintAnalytics();
  if (maxMintsPerWallet === 1) {
    return null;
  }
  const handleQuantityUpdate = (value) => {
    setQuantity(value);
    const quantity = Number.parseInt(value, 10);
    if (!Number.isNaN(quantity)) {
      handleQuantityChange(quantity);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: cn("py-1", className), children: /* @__PURE__ */ jsxDEV(
    QuantitySelector,
    {
      className,
      onChange: handleQuantityUpdate,
      minQuantity: 1,
      maxQuantity: maxMintsPerWallet,
      placeholder: ""
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTQuantitySelector.tsx",
      lineNumber: 29,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTQuantitySelector.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
export {
  NFTQuantitySelector
};
//# sourceMappingURL=NFTQuantitySelector.js.map
