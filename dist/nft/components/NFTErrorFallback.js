import { jsxDEV } from "react/jsx-dev-runtime";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn, border, background, color } from "../../styles/theme.js";
function NFTErrorFallback({ error }) {
  const componentTheme = useTheme();
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        componentTheme,
        color.foreground,
        background.default,
        border.defaultActive,
        border.radius,
        "flex w-full max-w-[500px] flex-col items-center justify-center border px-6 py-4"
      ),
      "data-testid": "ockNFTErrorFallback_Container",
      children: [
        /* @__PURE__ */ jsxDEV("div", { children: "Sorry, please try again later." }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTErrorFallback.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: error.message }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTErrorFallback.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTErrorFallback.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTErrorFallback
};
//# sourceMappingURL=NFTErrorFallback.js.map
