'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { Address } from "../../identity/components/Address.js";
import { Avatar } from "../../identity/components/Avatar.js";
import "../../core/network/attestations.js";
import "../../identity/utils/easSupportedChains.js";
import "@tanstack/react-query";
import "../../internal/svg/badgeSvg.js";
import { cn, color } from "../../styles/theme.js";
import "react";
import "../../useOnchainKit.js";
import "../../identity/components/IdentityProvider.js";
import { EthBalance } from "../../identity/components/EthBalance.js";
import { Identity } from "../../identity/components/Identity.js";
import { Name } from "../../identity/components/Name.js";
import "viem/chains";
import "viem";
import "../../identity/constants.js";
import "../../identity/utils/getAddress.js";
import "viem/ens";
import "../../internal/svg/githubSvg.js";
import "../../internal/svg/twitterSvg.js";
import "../../internal/svg/warpcastSvg.js";
import "../../internal/svg/websiteSvg.js";
import "../../identity/utils/getAddresses.js";
import { WalletDropdownContent } from "./WalletDropdownContent.js";
import { WalletDropdownDisconnect } from "./WalletDropdownDisconnect.js";
import { WalletDropdownLink } from "./WalletDropdownLink.js";
import { useWalletContext } from "./WalletProvider.js";
const defaultWalletDropdownChildren = /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(Identity, { className: "px-4 pt-3 pb-2", children: [
    /* @__PURE__ */ jsxDEV(Avatar, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Name, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Address, { className: color.foregroundMuted }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(EthBalance, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, void 0)
  ] }, "wallet-dd-identity", true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    WalletDropdownLink,
    {
      icon: "wallet",
      href: "https://keys.coinbase.com",
      target: "_blank",
      children: "Wallet"
    },
    "wallet-dd-link",
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV(WalletDropdownDisconnect, {}, "wallet-dd-disconnect", false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
  lineNumber: 12,
  columnNumber: 3
}, void 0);
function WalletDropdown({
  children,
  className,
  classNames,
  swappableTokens
}) {
  const {
    address,
    breakpoint,
    isSubComponentOpen,
    showSubComponentAbove,
    alignSubComponentRight
  } = useWalletContext();
  if (!address) {
    return null;
  }
  if (!breakpoint) {
    return null;
  }
  if (!isSubComponentOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockWalletDropdown",
      className: cn(
        "absolute",
        showSubComponentAbove ? "bottom-full" : "top-full",
        alignSubComponentRight ? "right-0" : "left-0",
        className
      ),
      children: /* @__PURE__ */ jsxDEV(
        WalletDropdownContent,
        {
          classNames,
          swappableTokens,
          children: children || defaultWalletDropdownChildren
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
          lineNumber: 67,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdown.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletDropdown
};
//# sourceMappingURL=WalletDropdown.js.map
