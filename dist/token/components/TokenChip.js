'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn, text, pressable, background } from "../../styles/theme.js";
import { TokenImage } from "./TokenImage.js";
function TokenChip({
  token,
  onClick,
  className,
  isPressable = true
}) {
  const componentTheme = useTheme();
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      "data-testid": "ockTokenChip_Button",
      className: cn(
        componentTheme,
        isPressable ? [pressable.secondary, pressable.shadow] : [background.secondary, "cursor-default"],
        "flex w-fit shrink-0 items-center gap-2 rounded-lg py-1 pr-3 pl-1 ",
        className
      ),
      onClick: () => onClick == null ? void 0 : onClick(token),
      children: [
        /* @__PURE__ */ jsxDEV(TokenImage, { token, size: 24 }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenChip.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: text.headline, children: token.symbol }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenChip.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenChip.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  );
}
export {
  TokenChip
};
//# sourceMappingURL=TokenChip.js.map
