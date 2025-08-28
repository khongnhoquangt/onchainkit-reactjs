'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useIcon } from "../../internal/hooks/useIcon.js";
import { cn, text, color, pressable } from "../../styles/theme.js";
function WalletDropdownLink({
  children,
  className,
  icon,
  href,
  rel,
  target
}) {
  const iconSvg = useIcon({ icon });
  return /* @__PURE__ */ jsxDEV(
    "a",
    {
      className: cn(
        pressable.default,
        color.foreground,
        "relative flex items-center px-4 py-3",
        className
      ),
      href,
      target,
      rel,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center", children: iconSvg }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownLink.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: cn(text.body, "pl-6"), children }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownLink.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownLink.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletDropdownLink
};
//# sourceMappingURL=WalletDropdownLink.js.map
