'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { NFTCreator } from "./mint/NFTCreator.js";
import { NFTMintButton } from "./mint/NFTMintButton.js";
import "react";
import "clsx";
import "tailwind-merge";
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
import "./NFTProvider.js";
import { NFTQuantitySelector } from "./mint/NFTQuantitySelector.js";
import { NFTAssetCost } from "./mint/NFTAssetCost.js";
import "../../internal/svg/infoSvg.js";
import { NFTCollectionTitle } from "./mint/NFTCollectionTitle.js";
import { NFTMintCard } from "./NFTMintCard.js";
import { NFTMedia } from "./view/NFTMedia.js";
function NFTMintCardDefault({
  contractAddress,
  tokenId,
  useNFTData,
  buildMintTransaction,
  isSponsored,
  onStatus,
  onSuccess,
  onError
}) {
  return /* @__PURE__ */ jsxDEV(
    NFTMintCard,
    {
      contractAddress,
      tokenId,
      useNFTData,
      buildMintTransaction,
      isSponsored,
      onStatus,
      onSuccess,
      onError,
      children: [
        /* @__PURE__ */ jsxDEV(NFTCreator, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCardDefault.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTMedia, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCardDefault.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTCollectionTitle, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCardDefault.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTQuantitySelector, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCardDefault.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTAssetCost, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCardDefault.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTMintButton, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCardDefault.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTMintCardDefault.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTMintCardDefault
};
//# sourceMappingURL=NFTMintCardDefault.js.map
