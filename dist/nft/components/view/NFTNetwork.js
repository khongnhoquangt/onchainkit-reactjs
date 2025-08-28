import { jsxDEV } from "react/jsx-dev-runtime";
import { base } from "viem/chains";
import { useChainId } from "wagmi";
import { baseSvg } from "../../../internal/svg/baseSvg.js";
import { cn, color, text } from "../../../styles/theme.js";
const networkMap = {
  8453: {
    chain: base,
    icon: baseSvg
  }
};
function NFTNetwork({ className, label = "Network" }) {
  const chainId = useChainId();
  if (!chainId || !networkMap[chainId]) {
    return null;
  }
  const { chain, icon } = networkMap[chainId];
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
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTNetwork.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-4 w-4 object-cover", children: icon }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTNetwork.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: chain.name }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTNetwork.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTNetwork.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTNetwork.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTNetwork
};
//# sourceMappingURL=NFTNetwork.js.map
