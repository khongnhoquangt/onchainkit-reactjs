import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text, color, border, background } from "../../styles/theme.js";
function EarnBalance({
  className,
  onActionPress,
  title,
  subtitle,
  showAction = false
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        background.alternate,
        border.radius,
        "flex items-center justify-between gap-4 p-3 px-4",
        className
      ),
      "data-testid": "ockEarnBalance",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: cn("flex flex-col", color.foreground), children: [
          /* @__PURE__ */ jsxDEV("div", { className: text.headline, children: title }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnBalance.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, color.foregroundMuted), children: subtitle }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnBalance.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnBalance.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, this),
        showAction && /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: onActionPress,
            className: cn(text.label2, color.primary),
            type: "button",
            "aria-label": "Use max",
            children: "Use max"
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnBalance.tsx",
            lineNumber: 26,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/EarnBalance.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
export {
  EarnBalance
};
//# sourceMappingURL=EarnBalance.js.map
