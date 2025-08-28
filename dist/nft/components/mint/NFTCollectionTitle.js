import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text } from "../../../styles/theme.js";
import { useNFTContext } from "../NFTProvider.js";
function NFTCollectionTitle({ className }) {
  const { name } = useNFTContext();
  if (!name) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(text.title1, "overflow-hidden text-ellipsis", className),
      children: name
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTCollectionTitle.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTCollectionTitle
};
//# sourceMappingURL=NFTCollectionTitle.js.map
