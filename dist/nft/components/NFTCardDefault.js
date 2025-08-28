'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { NFTCard } from "./NFTCard.js";
import { NFTLastSoldPrice } from "./view/NFTLastSoldPrice.js";
import { NFTMedia } from "./view/NFTMedia.js";
import "./NFTProvider.js";
import "react";
import "clsx";
import "tailwind-merge";
import { NFTOwner } from "./view/NFTOwner.js";
import { NFTTitle } from "./view/NFTTitle.js";
import { NFTNetwork } from "./view/NFTNetwork.js";
function NFTCardDefault({
  contractAddress,
  tokenId,
  useNFTData,
  onStatus,
  onSuccess,
  onError
}) {
  return /* @__PURE__ */ jsxDEV(
    NFTCard,
    {
      contractAddress,
      tokenId,
      useNFTData,
      onStatus,
      onSuccess,
      onError,
      children: [
        /* @__PURE__ */ jsxDEV(NFTMedia, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCardDefault.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTTitle, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCardDefault.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTOwner, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCardDefault.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTLastSoldPrice, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCardDefault.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(NFTNetwork, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCardDefault.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTCardDefault.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTCardDefault
};
//# sourceMappingURL=NFTCardDefault.js.map
