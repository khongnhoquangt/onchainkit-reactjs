'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useName } from "../../identity/hooks/useName.js";
import { Spinner } from "../../internal/components/Spinner.js";
import { basenameSvg } from "../../internal/svg/basenameSvg.js";
import { base } from "viem/chains";
import { useAccount } from "wagmi";
import { cn, text, color, pressable } from "../../styles/theme.js";
function WalletDropdownBasename({
  className
}) {
  const { address } = useAccount();
  if (!address) {
    return null;
  }
  const { data: basename, isLoading } = useName({
    address,
    chain: base
  });
  const hasBaseUserName = !!basename;
  const title = hasBaseUserName ? "Profile" : "Claim Basename";
  const href = hasBaseUserName ? `https://www.base.org/name/${basename}` : "https://www.base.org/names";
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
      target: "_blank",
      rel: "noopener noreferrer",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center", children: basenameSvg }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownBasename.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex w-full items-center pl-6", children: isLoading ? /* @__PURE__ */ jsxDEV(Spinner, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownBasename.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("span", { className: cn(text.body), children: title }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownBasename.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          !hasBaseUserName && /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: cn(
                "ml-2 rounded-full bg-[#E0E7FF] px-2 py-0.5 text-center font-bold font-inter text-[#4F46E5] text-[0.6875rem] uppercase leading-none"
              ),
              children: "NEW"
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownBasename.tsx",
              lineNumber: 54,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownBasename.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownBasename.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownBasename.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletDropdownBasename
};
//# sourceMappingURL=WalletDropdownBasename.js.map
