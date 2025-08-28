import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTContext } from "../NFTProvider.js";
import { cn, text } from "../../../styles/theme.js";
function NFTTitle({ className }) {
  const { name } = useNFTContext();
  if (!name) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(text.title3, "overflow-hidden text-ellipsis", className),
      children: name
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTTitle.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTTitle
};
//# sourceMappingURL=NFTTitle.js.map
