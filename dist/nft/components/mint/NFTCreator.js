import { jsxDEV } from "react/jsx-dev-runtime";
import "react";
import { cn } from "../../../styles/theme.js";
import "../../../identity/components/IdentityProvider.js";
import { Avatar } from "../../../identity/components/Avatar.js";
import { Badge } from "../../../identity/components/Badge.js";
import "viem";
import "wagmi";
import { Identity } from "../../../identity/components/Identity.js";
import { Name } from "../../../identity/components/Name.js";
import "viem/chains";
import "../../../identity/constants.js";
import "../../../identity/utils/getAddress.js";
import "@tanstack/react-query";
import "viem/ens";
import "../../../internal/svg/githubSvg.js";
import "../../../internal/svg/twitterSvg.js";
import "../../../internal/svg/warpcastSvg.js";
import "../../../internal/svg/websiteSvg.js";
import "../../../identity/utils/getAddresses.js";
import "../../../core/network/attestations.js";
import "../../../identity/utils/easSupportedChains.js";
import { useNFTContext } from "../NFTProvider.js";
import { useOnchainKit } from "../../../useOnchainKit.js";
function NFTCreator({ className }) {
  const { schemaId } = useOnchainKit();
  const { creatorAddress } = useNFTContext();
  if (!creatorAddress) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn("-my-1 flex justify-between", className), children: /* @__PURE__ */ jsxDEV(
    Identity,
    {
      className: "px-0 py-0 [&>div]:space-x-2",
      address: creatorAddress,
      schemaId,
      children: [
        /* @__PURE__ */ jsxDEV(Avatar, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTCreator.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV(Name, { children: /* @__PURE__ */ jsxDEV(Badge, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTCreator.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTCreator.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTCreator.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTCreator.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  NFTCreator
};
//# sourceMappingURL=NFTCreator.js.map
