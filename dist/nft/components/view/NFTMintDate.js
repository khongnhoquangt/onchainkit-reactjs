import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTContext } from "../NFTProvider.js";
import { useMemo } from "react";
import { cn, color, text } from "../../../styles/theme.js";
const DATE_OPTIONS = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
function NFTMintDate({
  className,
  label = "Mint date"
}) {
  const { mintDate } = useNFTContext();
  const formattedDate = useMemo(() => {
    if (!mintDate) {
      return null;
    }
    const formatter = new Intl.DateTimeFormat(void 0, DATE_OPTIONS);
    return formatter.format(mintDate);
  }, [mintDate]);
  if (!formattedDate) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        text.label2,
        "flex items-center justify-between",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: cn(color.foregroundMuted), children: label }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMintDate.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: formattedDate }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMintDate.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMintDate.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTMintDate
};
//# sourceMappingURL=NFTMintDate.js.map
