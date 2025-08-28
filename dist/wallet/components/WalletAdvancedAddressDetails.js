'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useCallback } from "react";
import { cn, border, color, text, pressable } from "../../styles/theme.js";
import "../../identity/components/IdentityProvider.js";
import { Avatar } from "../../identity/components/Avatar.js";
import "../../core/network/attestations.js";
import "../../identity/utils/easSupportedChains.js";
import "@tanstack/react-query";
import "../../internal/svg/badgeSvg.js";
import { zIndex } from "../../styles/constants.js";
import "../../useOnchainKit.js";
import "viem";
import { useAccount } from "wagmi";
import { Name } from "../../identity/components/Name.js";
import "viem/chains";
import "../../identity/constants.js";
import "../../identity/utils/getAddress.js";
import "viem/ens";
import "../../internal/svg/githubSvg.js";
import "../../internal/svg/twitterSvg.js";
import "../../internal/svg/warpcastSvg.js";
import "../../internal/svg/websiteSvg.js";
import "../../identity/utils/getAddresses.js";
import { Spinner } from "../../internal/components/Spinner.js";
import { useWalletContext } from "./WalletProvider.js";
import { usePortfolio } from "../hooks/usePortfolio.js";
import { RequestContext } from "../../core/network/constants.js";
function WalletAdvancedAddressDetails({
  classNames
}) {
  const { address, chain, animations } = useWalletContext();
  const [copyText, setCopyText] = useState("Copy");
  const handleCopyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(String(address));
      setCopyText("Copied");
      setTimeout(() => setCopyText("Copy"), 2e3);
    } catch (err) {
      console.error("Failed to copy address:", err);
      setCopyText("Failed to copy");
      setTimeout(() => setCopyText("Copy"), 2e3);
    }
  }, [address]);
  if (!address || !chain) {
    return /* @__PURE__ */ jsxDEV("div", { className: "mt-1 h-28 w-10 px-4 py-3" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
      lineNumber: 41,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockWalletAdvanced_AddressDetails",
      className: cn(
        "mt-2 flex w-88 flex-col items-center justify-center px-4 py-3",
        color.foreground,
        text.body,
        animations.content,
        classNames == null ? void 0 : classNames.container
      ),
      children: [
        /* @__PURE__ */ jsxDEV(
          Avatar,
          {
            address,
            chain,
            className: cn("pointer-events-none h-10 w-10", classNames == null ? void 0 : classNames.avatar)
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
            lineNumber: 55,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "group relative mt-2 text-base", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: handleCopyAddress,
              "data-testid": "ockWalletAdvanced_NameButton",
              children: /* @__PURE__ */ jsxDEV(
                Name,
                {
                  address,
                  chain,
                  className: cn(
                    "hover:text-[var(--ock-text-foreground-muted)] active:text-[var(--ock-text-primary)]",
                    classNames == null ? void 0 : classNames.nameButton
                  )
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
                  lineNumber: 66,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
              lineNumber: 61,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: handleCopyAddress,
              className: cn(
                pressable.alternate,
                text.legal,
                color.foreground,
                border.default,
                border.radius,
                zIndex.tooltip,
                "absolute top-full right-0 mt-0.5 px-1.5 py-0.5 opacity-0 transition-opacity group-hover:opacity-100"
              ),
              "aria-live": "polite",
              "data-testid": "ockWalletAdvanced_NameTooltip",
              children: copyText
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
              lineNumber: 75,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(AddressBalanceInFiat, { className: classNames == null ? void 0 : classNames.fiatBalance }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}
function AddressBalanceInFiat({ className }) {
  const { address } = useAccount();
  const { data: portfolioData, isFetching: isFetchingPortfolioData } = usePortfolio({ address }, RequestContext.Wallet);
  const portfolioFiatValue = portfolioData == null ? void 0 : portfolioData.portfolioBalanceInUsd;
  const formattedValueInFiat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(Number(portfolioFiatValue));
  if (isFetchingPortfolioData) {
    return /* @__PURE__ */ jsxDEV("div", { className: "mt-1 h-8 w-full", children: /* @__PURE__ */ jsxDEV(Spinner, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this);
  }
  if (portfolioFiatValue === null || portfolioFiatValue === void 0) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(text.title1, "mt-1 font-normal", className),
      "data-testid": "ockWalletAdvanced_AddressBalance",
      children: formattedValueInFiat
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedAddressDetails.tsx",
      lineNumber: 124,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletAdvancedAddressDetails
};
//# sourceMappingURL=WalletAdvancedAddressDetails.js.map
