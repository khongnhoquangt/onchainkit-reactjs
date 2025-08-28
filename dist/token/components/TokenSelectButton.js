import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { forwardRef } from "react";
import { caretDownSvg } from "../../internal/svg/caretDownSvg.js";
import { caretUpSvg } from "../../internal/svg/caretUpSvg.js";
import { cn, color, text, border, pressable } from "../../styles/theme.js";
import { TokenImage } from "./TokenImage.js";
const TokenSelectButton = forwardRef(function TokenSelectButton2({ onClick, token, isOpen, className }, ref) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      "data-testid": "ockTokenSelectButton_Button",
      className: cn(
        pressable.default,
        pressable.shadow,
        border.radius,
        border.lineDefault,
        "flex w-fit items-center gap-2 px-3 py-1",
        className
      ),
      onClick,
      ref,
      children: [
        token ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-4", children: /* @__PURE__ */ jsxDEV(TokenImage, { token, size: 16 }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: cn(text.headline, color.foreground),
              "data-testid": "ockTokenSelectButton_Symbol",
              children: token.symbol
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
              lineNumber: 32,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this) : /* @__PURE__ */ jsxDEV("span", { className: text.headline, children: "Select token" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 h-4 w-4" }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          isOpen ? caretUpSvg : caretDownSvg
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectButton.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
});
export {
  TokenSelectButton
};
//# sourceMappingURL=TokenSelectButton.js.map
