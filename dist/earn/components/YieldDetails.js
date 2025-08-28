'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useEarnContext } from "./EarnProvider.js";
import { getTruncatedAmount } from "../utils/getTruncatedAmount.js";
import { Popover } from "../../internal/components/Popover.js";
import { Skeleton } from "../../internal/components/Skeleton.js";
import { infoSvg } from "../../internal/svg/infoSvg.js";
import { formatPercent } from "../../internal/utils/formatPercent.js";
import { cn, background, color, text, border } from "../../styles/theme.js";
import { useState, useRef } from "react";
function YieldInfo() {
  const { rewards, nativeApy, vaultToken, vaultFee } = useEarnContext();
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        color.foregroundMuted,
        border.defaultActive,
        background.default,
        "fade-in flex min-w-52 animate-in flex-col gap-2 rounded-lg border p-3 text-sm duration-200"
      ),
      children: [
        nativeApy ? /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-center justify-between gap-1",
            "data-testid": "ock-earnNativeApy",
            children: [
              /* @__PURE__ */ jsxDEV("div", { children: vaultToken == null ? void 0 : vaultToken.symbol }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
                lineNumber: 27,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", children: formatPercent(nativeApy) }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
                lineNumber: 28,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
            lineNumber: 23,
            columnNumber: 9
          },
          this
        ) : null,
        rewards == null ? void 0 : rewards.map((reward) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-center justify-between gap-1",
            "data-testid": "ock-earnRewards",
            children: [
              /* @__PURE__ */ jsxDEV("div", { children: reward.assetName }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
                lineNumber: 38,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", children: formatPercent(reward.apy) }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
                lineNumber: 39,
                columnNumber: 11
              }, this)
            ]
          },
          reward.asset,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
            lineNumber: 33,
            columnNumber: 9
          },
          this
        )),
        vaultFee && nativeApy ? /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-center justify-between gap-1",
            "data-testid": "ock-earnPerformanceFee",
            children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                "Perf. Fee",
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs", children: [
                  "(",
                  formatPercent(vaultFee, 0),
                  ")"
                ] }, void 0, true, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
                  lineNumber: 50,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
                lineNumber: 48,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", children: [
                "-",
                formatPercent(vaultFee * nativeApy)
              ] }, void 0, true, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
                lineNumber: 52,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
            lineNumber: 44,
            columnNumber: 9
          },
          this
        ) : null
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
function YieldDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const anchorRef = useRef(null);
  const { apy } = useEarnContext();
  if (!apy) {
    return /* @__PURE__ */ jsxDEV(Skeleton, { className: "!rounded-full h-7 min-w-28" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
      lineNumber: 69,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: anchorRef,
      className: cn(
        text.label1,
        color.foregroundMuted,
        background.alternate,
        "flex items-center justify-center gap-1 rounded-full p-1 px-3"
      ),
      "data-testid": "ock-yieldDetails",
      children: [
        `APY ${formatPercent(Number(getTruncatedAmount(apy.toString(), 4)))}`,
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            ref: triggerRef,
            type: "button",
            "data-testid": "ock-apyInfoButton",
            className: cn(
              "size-3 [&_path]:fill-[var(--ock-icon-color-foreground-muted)] [&_path]:transition-colors [&_path]:ease-in-out [&_path]:hover:fill-[var(--ock-icon-color-foreground)]",
              isOpen && "[&_path]:fill-[var(--ock-icon-color-foreground)]"
            ),
            onClick: () => setIsOpen(!isOpen),
            children: infoSvg
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
            lineNumber: 84,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Popover,
          {
            isOpen,
            onClose: () => setIsOpen(false),
            position: "bottom",
            align: "end",
            trigger: triggerRef,
            anchor: anchorRef.current,
            offset: 4,
            children: /* @__PURE__ */ jsxDEV(YieldInfo, {}, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
              lineNumber: 106,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
            lineNumber: 97,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/YieldDetails.tsx",
      lineNumber: 73,
      columnNumber: 5
    },
    this
  );
}
export {
  YieldDetails
};
//# sourceMappingURL=YieldDetails.js.map
