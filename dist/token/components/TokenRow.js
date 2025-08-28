'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { memo } from "react";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn, text, color, pressable } from "../../styles/theme.js";
import { formatAmount } from "../utils/formatAmount.js";
import { TokenImage } from "./TokenImage.js";
const TokenRow = memo(function TokenRow2({
  className,
  token,
  amount,
  onClick,
  hideImage,
  hideSymbol
}) {
  const componentTheme = useTheme();
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      "data-testid": "ockTokenRow_Container",
      type: "button",
      className: cn(
        componentTheme,
        pressable.default,
        "flex w-full items-center justify-between px-2 py-1",
        className
      ),
      onClick: () => onClick == null ? void 0 : onClick(token),
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "flex max-w-full items-center gap-3", children: [
          !hideImage && /* @__PURE__ */ jsxDEV(TokenImage, { token, size: 28 }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenRow.tsx",
            lineNumber: 33,
            columnNumber: 24
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "flex min-w-0 flex-col items-start", children: [
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: cn(
                  text.headline,
                  "max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-left"
                ),
                children: token.name.trim()
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenRow.tsx",
                lineNumber: 35,
                columnNumber: 11
              },
              this
            ),
            !hideSymbol && /* @__PURE__ */ jsxDEV("span", { className: cn(text.body, color.foregroundMuted), children: token.symbol }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenRow.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenRow.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenRow.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            "data-testid": "ockTokenRow_Amount",
            className: cn(text.body, color.foregroundMuted),
            children: formatAmount(amount, {
              minimumFractionDigits: 2,
              maximumFractionDigits: Number(amount) < 1 ? 5 : 2
            })
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenRow.tsx",
            lineNumber: 50,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenRow.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
});
export {
  TokenRow
};
//# sourceMappingURL=TokenRow.js.map
