'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { getTruncatedAmount } from "../utils/getTruncatedAmount.js";
import { Popover } from "../../internal/components/Popover.js";
import { Skeleton } from "../../internal/components/Skeleton.js";
import { etherscanSvg } from "../../internal/svg/etherscanSvg.js";
import { infoSvg } from "../../internal/svg/infoSvg.js";
import { cn, color, background, border, text } from "../../styles/theme.js";
import "../../useOnchainKit.js";
import { useState, useRef } from "react";
import { TokenImage } from "../../token/components/TokenImage.js";
import "../../token/components/TokenRow.js";
import "../../internal/components/TextInput.js";
import "../../internal/svg/searchIconSvg.js";
import "react-dom";
import "../../token/components/TokenSelectButton.js";
import "viem";
import { useEarnContext } from "./EarnProvider.js";
function Row({ label, value }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-8", children: [
    /* @__PURE__ */ jsxDEV("div", { children: label }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", children: value }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function VaultDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const anchorRef = useRef(null);
  const { vaultToken, vaultName, deposits, liquidity, vaultAddress } = useEarnContext();
  if (!vaultToken || !vaultName) {
    return /* @__PURE__ */ jsxDEV(Skeleton, { className: "!rounded-full h-7 min-w-28" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
      lineNumber: 30,
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
        "flex items-center justify-center gap-2 rounded-full p-1 px-3"
      ),
      "data-testid": "ock-vaultDetails",
      children: [
        /* @__PURE__ */ jsxDEV(TokenImage, { token: vaultToken, size: 16 }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "max-w-24 truncate", title: vaultName, children: vaultName }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            ref: triggerRef,
            type: "button",
            "data-testid": "ock-vaultDetailsButton",
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
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
            lineNumber: 48,
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
            align: "start",
            trigger: triggerRef,
            anchor: anchorRef.current,
            offset: 4,
            children: /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: cn(
                  background.default,
                  color.foreground,
                  border.defaultActive,
                  background.default,
                  "flex min-w-40 flex-col gap-3 rounded-lg border p-3 text-sm",
                  "fade-in animate-in duration-200"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", children: vaultName }, void 0, false, {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxDEV(
                      Row,
                      {
                        label: "Token",
                        value: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxDEV(TokenImage, { token: vaultToken, size: 16 }, void 0, false, {
                            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                            lineNumber: 86,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "max-w-24 truncate", children: vaultToken.symbol }, void 0, false, {
                            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                            lineNumber: 87,
                            columnNumber: 19
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                          lineNumber: 85,
                          columnNumber: 17
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                      },
                      this
                    ),
                    deposits ? /* @__PURE__ */ jsxDEV(
                      Row,
                      {
                        label: "Total deposits",
                        value: `${getTruncatedAmount(deposits, 1, "compact")} ${vaultToken.symbol}`
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                        lineNumber: 92,
                        columnNumber: 15
                      },
                      this
                    ) : null,
                    liquidity ? /* @__PURE__ */ jsxDEV(
                      Row,
                      {
                        label: "Liquidity",
                        value: `${getTruncatedAmount(liquidity, 1, "compact")} ${vaultToken.symbol}`
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                      },
                      this
                    ) : null
                  ] }, void 0, true, {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "a",
                    {
                      href: `https://basescan.org/address/${vaultAddress}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: cn(
                        color.primary,
                        "flex max-w-fit items-center gap-1 hover:opacity-80"
                      ),
                      "data-testid": "ock-vaultDetailsBaseScanLink",
                      children: [
                        /* @__PURE__ */ jsxDEV("div", { children: "View on BaseScan" }, void 0, false, {
                          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                          lineNumber: 118,
                          columnNumber: 13
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "h-3 w-3", children: etherscanSvg }, void 0, false, {
                          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                          lineNumber: 119,
                          columnNumber: 13
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                      lineNumber: 108,
                      columnNumber: 11
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
                lineNumber: 70,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
            lineNumber: 61,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/VaultDetails.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
export {
  VaultDetails
};
//# sourceMappingURL=VaultDetails.js.map
