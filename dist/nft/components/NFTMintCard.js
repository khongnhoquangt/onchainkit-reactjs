'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useIsMounted } from "../../internal/hooks/useIsMounted.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { NFTLifecycleProvider } from "./NFTLifecycleProvider.js";
import { NFTProvider } from "./NFTProvider.js";
import { NFTCreator } from "./mint/NFTCreator.js";
import { NFTMintButton } from "./mint/NFTMintButton.js";
import "react";
import { cn, border, background, color } from "../../styles/theme.js";
import "../../identity/components/IdentityProvider.js";
import "viem";
import "viem/chains";
import "viem/ens";
import "../../identity/constants.js";
import "@tanstack/react-query";
import "../../identity/utils/getAddress.js";
import "../../internal/svg/defaultAvatarSVG.js";
import "../../core/network/attestations.js";
import "../../identity/utils/easSupportedChains.js";
import "../../internal/svg/badgeSvg.js";
import "../../useOnchainKit.js";
import "wagmi";
import "../../internal/svg/githubSvg.js";
import "../../internal/svg/twitterSvg.js";
import "../../internal/svg/warpcastSvg.js";
import "../../internal/svg/websiteSvg.js";
import "../../identity/utils/getAddresses.js";
import { NFTQuantitySelector } from "./mint/NFTQuantitySelector.js";
import { NFTAssetCost } from "./mint/NFTAssetCost.js";
import "../../internal/svg/infoSvg.js";
import { NFTCollectionTitle } from "./mint/NFTCollectionTitle.js";
import { useMintData } from "../hooks/useMintData.js";
import { LifecycleType } from "../types.js";
import { buildMintTransactionData } from "../utils/buildMintTransactionData.js";
import NFTErrorBoundary from "./NFTErrorBoundary.js";
import { NFTErrorFallback } from "./NFTErrorFallback.js";
import { NFTMedia } from "./view/NFTMedia.js";
function NFTMintCardDefaultContent() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(NFTCreator, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTMedia, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTCollectionTitle, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTQuantitySelector, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTAssetCost, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NFTMintButton, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function NFTMintCard({
  children = /* @__PURE__ */ jsxDEV(NFTMintCardDefaultContent, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
    lineNumber: 35,
    columnNumber: 14
  }, this),
  className,
  contractAddress,
  tokenId,
  isSponsored,
  useNFTData = useMintData,
  buildMintTransaction = buildMintTransactionData,
  onStatus,
  onError,
  onSuccess
}) {
  const componentTheme = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(NFTErrorBoundary, { fallback: NFTErrorFallback, children: /* @__PURE__ */ jsxDEV(
    NFTLifecycleProvider,
    {
      type: LifecycleType.MINT,
      onStatus,
      onError,
      onSuccess,
      children: /* @__PURE__ */ jsxDEV(
        NFTProvider,
        {
          contractAddress,
          tokenId,
          isSponsored,
          useNFTData,
          buildMintTransaction,
          children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: cn(
                componentTheme,
                color.foreground,
                background.default,
                border.defaultActive,
                border.radius,
                "flex w-full max-w-[500px] flex-col gap-2 border p-4",
                className
              ),
              "data-testid": "ockNFTMintCard_Container",
              children
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
              lineNumber: 70,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
      lineNumber: 57,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCard.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
export {
  NFTMintCard
};
//# sourceMappingURL=NFTMintCard.js.map
