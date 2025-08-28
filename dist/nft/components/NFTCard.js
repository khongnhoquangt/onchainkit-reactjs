'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useIsMounted } from "../../internal/hooks/useIsMounted.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { NFTLifecycleProvider } from "./NFTLifecycleProvider.js";
import { NFTProvider } from "./NFTProvider.js";
import { useNFTData } from "../hooks/useNFTData.js";
import { LifecycleType } from "../types.js";
import { useCallback } from "react";
import { useAccount } from "wagmi";
import { cn, border, pressable, color } from "../../styles/theme.js";
import NFTErrorBoundary from "./NFTErrorBoundary.js";
import { NFTErrorFallback } from "./NFTErrorFallback.js";
import { NFTLastSoldPrice } from "./view/NFTLastSoldPrice.js";
import { NFTMedia } from "./view/NFTMedia.js";
import { NFTOwner } from "./view/NFTOwner.js";
import { NFTTitle } from "./view/NFTTitle.js";
import { NFTNetwork } from "./view/NFTNetwork.js";
function NFTCardDefaultContent() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(NFTMedia, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTTitle, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTOwner, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTLastSoldPrice, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTNetwork, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function NFTCard({
  children = /* @__PURE__ */ jsxDEV(NFTCardDefaultContent, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
    lineNumber: 34,
    columnNumber: 14
  }, this),
  className,
  contractAddress,
  tokenId,
  useNFTData: useNFTData$1 = useNFTData,
  onStatus,
  onError,
  onSuccess
}) {
  const componentTheme = useTheme();
  const isMounted = useIsMounted();
  const { chain } = useAccount();
  const handleOnClick = useCallback(() => {
    const network = (chain == null ? void 0 : chain.name.toLowerCase()) ?? "base";
    const zoraUrl = `https://zora.co/collect/${network}:${contractAddress}/${tokenId}`;
    window.open(zoraUrl, "_blank", "noopener,noreferrer");
  }, [chain, contractAddress, tokenId]);
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(NFTErrorBoundary, { fallback: NFTErrorFallback, children: /* @__PURE__ */ jsxDEV(
    NFTLifecycleProvider,
    {
      type: LifecycleType.VIEW,
      onStatus,
      onError,
      onSuccess,
      children: /* @__PURE__ */ jsxDEV(
        NFTProvider,
        {
          contractAddress,
          tokenId,
          useNFTData: useNFTData$1,
          children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              className: cn(
                componentTheme,
                color.foreground,
                pressable.default,
                border.radius,
                "flex w-full max-w-[500px] flex-col items-stretch gap-1.5 border p-4 text-left",
                `hover:border-[${border.defaultActive}]`,
                className
              ),
              "data-testid": "ockNFTCard_Container",
              onClick: handleOnClick,
              children
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
              lineNumber: 73,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
      lineNumber: 62,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCard.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
export {
  NFTCard
};
//# sourceMappingURL=NFTCard.js.map
