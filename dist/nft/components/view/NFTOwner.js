import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTContext } from "../NFTProvider.js";
import { useOnchainKit } from "../../../useOnchainKit.js";
import "react";
import { cn, color, text } from "../../../styles/theme.js";
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
function NFTOwner({ className, label = "Owned by" }) {
  const { schemaId } = useOnchainKit();
  const { ownerAddress } = useNFTContext();
  if (!ownerAddress) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        text.label2,
        "-my-1 flex items-center justify-between",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: cn(color.foregroundMuted), children: label }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTOwner.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          Identity,
          {
            className: cn("!bg-inherit space-x-1 px-0 [&>div]:space-x-2"),
            address: ownerAddress,
            schemaId,
            children: [
              /* @__PURE__ */ jsxDEV(Avatar, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTOwner.tsx",
                lineNumber: 35,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV(Name, { children: /* @__PURE__ */ jsxDEV(Badge, {}, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTOwner.tsx",
                lineNumber: 37,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTOwner.tsx",
                lineNumber: 36,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTOwner.tsx",
            lineNumber: 30,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTOwner.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTOwner
};
//# sourceMappingURL=NFTOwner.js.map
