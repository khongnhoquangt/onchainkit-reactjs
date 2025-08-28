'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import "react";
import "clsx";
import "tailwind-merge";
import "../../identity/components/IdentityProvider.js";
import { Avatar } from "../../identity/components/Avatar.js";
import "../../core/network/attestations.js";
import "../../identity/utils/easSupportedChains.js";
import "@tanstack/react-query";
import "../../internal/svg/badgeSvg.js";
import "../../useOnchainKit.js";
import "viem";
import "wagmi";
import "viem/chains";
import "../../identity/constants.js";
import "../../identity/utils/getAddress.js";
import "viem/ens";
import "../../internal/svg/githubSvg.js";
import "../../internal/svg/twitterSvg.js";
import "../../internal/svg/warpcastSvg.js";
import "../../internal/svg/websiteSvg.js";
import "../../identity/utils/getAddresses.js";
import { portfolioSvg } from "../../internal/svg/portfolioSvg.js";
import { getDefaultDraggableStartingPosition } from "../utils/getDefaultDraggableStartingPosition.js";
import { ConnectWallet } from "./ConnectWallet.js";
import { Wallet } from "./Wallet.js";
import { WalletAdvancedAddressDetails } from "./WalletAdvancedAddressDetails.js";
import { WalletAdvancedTokenHoldings } from "./WalletAdvancedTokenHoldings.js";
import { WalletAdvancedTransactionActions } from "./WalletAdvancedTransactionActions.js";
import { WalletAdvancedWalletActions } from "./WalletAdvancedWalletActions.js";
import { WalletDropdown } from "./WalletDropdown.js";
function WalletIsland({
  startingPosition = getDefaultDraggableStartingPosition(),
  isSponsored
}) {
  return /* @__PURE__ */ jsxDEV(
    Wallet,
    {
      draggable: true,
      draggableStartingPosition: startingPosition,
      isSponsored,
      children: [
        /* @__PURE__ */ jsxDEV(
          ConnectWallet,
          {
            className: "!rounded-full m-0 flex h-14 w-14 min-w-14 flex-col items-center justify-center p-0",
            disconnectedLabel: /* @__PURE__ */ jsxDEV("div", { className: "h-5 w-5", children: portfolioSvg }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
              lineNumber: 29,
              columnNumber: 28
            }, this),
            children: /* @__PURE__ */ jsxDEV(Avatar, { className: "pointer-events-none h-14 w-14" }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
              lineNumber: 31,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
            lineNumber: 27,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(WalletDropdown, { children: [
          /* @__PURE__ */ jsxDEV(WalletAdvancedWalletActions, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(WalletAdvancedAddressDetails, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(WalletAdvancedTransactionActions, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(WalletAdvancedTokenHoldings, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletIsland.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletIsland
};
//# sourceMappingURL=WalletIsland.js.map
