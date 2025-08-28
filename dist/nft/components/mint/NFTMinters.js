import { jsxDEV } from "react/jsx-dev-runtime";
import "react";
import { cn, color, text } from "../../../styles/theme.js";
import "../../../identity/components/IdentityProvider.js";
import { Avatar } from "../../../identity/components/Avatar.js";
import "../../../core/network/attestations.js";
import "../../../identity/utils/easSupportedChains.js";
import "@tanstack/react-query";
import "../../../internal/svg/badgeSvg.js";
import { useOnchainKit } from "../../../useOnchainKit.js";
import "viem";
import "wagmi";
import { Identity } from "../../../identity/components/Identity.js";
import { Name } from "../../../identity/components/Name.js";
import "viem/chains";
import "../../../identity/constants.js";
import "../../../identity/utils/getAddress.js";
import "viem/ens";
import "../../../internal/svg/githubSvg.js";
import "../../../internal/svg/twitterSvg.js";
import "../../../internal/svg/warpcastSvg.js";
import "../../../internal/svg/websiteSvg.js";
import "../../../identity/utils/getAddresses.js";
import { useNFTContext } from "../NFTProvider.js";
function NFTMinters({ className }) {
  const { schemaId } = useOnchainKit();
  const { totalOwners, recentOwners } = useNFTContext();
  if (!recentOwners || recentOwners.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        text.body,
        color.foregroundMuted,
        "-my-1 flex items-center",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-[-.8rem]", children: recentOwners.map((address) => /* @__PURE__ */ jsxDEV(
          Identity,
          {
            className: "space-x-0 px-0 py-0 [&>div]:space-x-2",
            address,
            schemaId,
            children: /* @__PURE__ */ jsxDEV(Avatar, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this)
          },
          address,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
            lineNumber: 29,
            columnNumber: 11
          },
          this
        )) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex", children: [
          /* @__PURE__ */ jsxDEV("div", { children: "Minted by" }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            Identity,
            {
              className: "px-1 py-0 [&>div]:space-x-0",
              address: recentOwners[0],
              schemaId,
              children: /* @__PURE__ */ jsxDEV(Name, { className: "max-w-[180px] overflow-hidden text-ellipsis" }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
                lineNumber: 46,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
              lineNumber: 41,
              columnNumber: 9
            },
            this
          ),
          totalOwners && /* @__PURE__ */ jsxDEV("div", { children: [
            "and ",
            totalOwners,
            " others"
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
            lineNumber: 48,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/mint/NFTMinters.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTMinters
};
//# sourceMappingURL=NFTMinters.js.map
