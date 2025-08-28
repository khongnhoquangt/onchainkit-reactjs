'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useEarnContext } from "./EarnProvider.js";
import { VaultDetails } from "./VaultDetails.js";
import { YieldDetails } from "./YieldDetails.js";
import { cn, color, border } from "../../styles/theme.js";
function EarnDetails({ className }) {
  const { error } = useEarnContext();
  if (error) {
    return /* @__PURE__ */ jsxDEV("div", { className: cn("flex w-full flex-col gap-1 text-sm", color.error), children: [
      /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", children: "Error fetching vault details" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDetails.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs", children: error.message }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDetails.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDetails.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockEarnDetails",
      className: cn(
        border.radius,
        "flex w-full items-center justify-between gap-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV(VaultDetails, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDetails.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(YieldDetails, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDetails.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnDetails.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}
export {
  EarnDetails
};
//# sourceMappingURL=EarnDetails.js.map
