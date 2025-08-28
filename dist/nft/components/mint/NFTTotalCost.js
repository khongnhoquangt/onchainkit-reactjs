import { jsxDEV } from "react/jsx-dev-runtime";
import { infoSvg } from "../../../internal/svg/infoSvg.js";
import { multiplyFloats } from "../../../internal/utils/multiplyFloats.js";
import { useNFTContext } from "../NFTProvider.js";
import { cn, text, border, background } from "../../../styles/theme.js";
import { formatAmount } from "../../../token/utils/formatAmount.js";
import { useState, useCallback, useMemo } from "react";
function NFTTotalCost({
  className,
  label = "Total cost"
}) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { price, mintFee, quantity } = useNFTContext();
  const toggleOverlay = useCallback(() => {
    setIsOverlayVisible((prev) => !prev);
  }, []);
  const showOverlay = useCallback(() => {
    setIsOverlayVisible(true);
  }, []);
  const hideOverlay = useCallback(() => {
    setIsOverlayVisible(false);
  }, []);
  const overlay = useMemo(() => {
    if ((price == null ? void 0 : price.amount) === void 0 || (price == null ? void 0 : price.amountUSD) === void 0 || (mintFee == null ? void 0 : mintFee.amount) === void 0 || mintFee.amountUSD === void 0) {
      return null;
    }
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn(
          background.default,
          border.radius,
          border.defaultActive,
          "absolute z-10 w-full border"
        ),
        children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: cn(
                text.label2,
                "flex items-center justify-between px-4 py-2"
              ),
              children: [
                /* @__PURE__ */ jsxDEV("div", { children: "NFT cost" }, void 0, false, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
                  lineNumber: 58,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  "$",
                  formatAmount(
                    `${multiplyFloats(Number(price.amountUSD), quantity)}`,
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  )
                ] }, void 0, true, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
                  lineNumber: 59,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
              lineNumber: 52,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: cn(
                "flex items-center justify-between px-4 py-2",
                text.label2
              ),
              children: [
                /* @__PURE__ */ jsxDEV("div", { children: "Mint fee" }, void 0, false, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
                  lineNumber: 76,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  "$",
                  formatAmount(
                    `${multiplyFloats(Number(mintFee.amountUSD), quantity)}`,
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  )
                ] }, void 0, true, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
                  lineNumber: 77,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
              lineNumber: 70,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    );
  }, [mintFee, price, quantity]);
  if (!(price == null ? void 0 : price.amount) || !(price == null ? void 0 : price.currency) || !(price == null ? void 0 : price.amountUSD) || !(mintFee == null ? void 0 : mintFee.amount) || !mintFee.amountUSD) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn(
          text.label2,
          "flex items-center justify-between",
          className
        ),
        children: [
          /* @__PURE__ */ jsxDEV("div", { children: label }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              "$",
              formatAmount(
                `${multiplyFloats(Number(price.amountUSD), quantity)}`,
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              )
            ] }, void 0, true, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
              lineNumber: 113,
              columnNumber: 11
            }, this),
            overlay && /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                "data-testid": "ockNFTTotalCostInfo",
                className: "h-2.5 w-2.5 cursor-pointer object-cover",
                onClick: toggleOverlay,
                onMouseEnter: showOverlay,
                onMouseLeave: hideOverlay,
                children: infoSvg
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
                lineNumber: 124,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
            lineNumber: 112,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
        lineNumber: 104,
        columnNumber: 7
      },
      this
    ),
    isOverlayVisible && overlay
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTTotalCost.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
export {
  NFTTotalCost
};
//# sourceMappingURL=NFTTotalCost.js.map
