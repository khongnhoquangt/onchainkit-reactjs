'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { toggleSvg } from "../../internal/svg/toggleSvg.js";
import { cn, border, pressable } from "../../styles/theme.js";
import { useSwapContext } from "./SwapProvider.js";
function SwapToggleButton({ className }) {
  const { handleToggle } = useSwapContext();
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      className: cn(
        pressable.alternate,
        border.default,
        "-my-6 relative mx-auto",
        "flex h-12 w-12 items-center justify-center",
        "rounded-lg border-4 border-solid",
        className
      ),
      "data-testid": "SwapTokensButton",
      onClick: handleToggle,
      children: toggleSvg
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToggleButton.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
export {
  SwapToggleButton
};
//# sourceMappingURL=SwapToggleButton.js.map
