'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color, text } from "../../styles/theme.js";
import "../../useOnchainKit.js";
import "react";
import { TokenImage } from "../../token/components/TokenImage.js";
import "../../token/components/TokenRow.js";
import "../../internal/components/TextInput.js";
import "../../internal/svg/searchIconSvg.js";
import "react-dom";
import "../../token/components/TokenSelectButton.js";
import { formatUnits } from "viem";
import { useWalletContext } from "./WalletProvider.js";
import { usePortfolio } from "../hooks/usePortfolio.js";
import { RequestContext } from "../../core/network/constants.js";
import { useAccount } from "wagmi";
function WalletAdvancedTokenHoldings({
  classNames
}) {
  const { address } = useAccount();
  const { animations } = useWalletContext();
  const { data: portfolioData, isFetching: isFetchingPortfolioData } = usePortfolio({ address }, RequestContext.Wallet);
  const tokenBalances = portfolioData == null ? void 0 : portfolioData.tokenBalances;
  if (isFetchingPortfolioData || !tokenBalances || tokenBalances.length === 0) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        "data-testid": "ockWalletAdvanced_LoadingPlaceholder",
        className: "mx-auto my-2 h-44 w-80 px-4 py-3"
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex flex-col items-center gap-4",
        "my-2 h-44 max-h-44",
        "scrollbar-hidden w-88 overflow-y-auto px-4 py-3",
        animations.content,
        classNames == null ? void 0 : classNames.container
      ),
      "data-testid": "ockWalletAdvanced_TokenHoldings",
      children: tokenBalances.map((tokenBalance, index) => /* @__PURE__ */ jsxDEV(
        TokenDetails,
        {
          token: {
            address: tokenBalance.address,
            chainId: tokenBalance.chainId,
            decimals: tokenBalance.decimals,
            image: tokenBalance.image,
            name: tokenBalance.name,
            symbol: tokenBalance.symbol
          },
          balance: Number(
            formatUnits(
              BigInt(tokenBalance.cryptoBalance),
              tokenBalance.decimals
            )
          ),
          valueInFiat: Number(tokenBalance.fiatBalance),
          classNames: classNames == null ? void 0 : classNames.tokenDetails
        },
        `${tokenBalance.address}-${index}`,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
      lineNumber: 53,
      columnNumber: 5
    },
    this
  );
}
function TokenDetails({
  token,
  balance,
  valueInFiat,
  classNames,
  tokenImageSize = 32
}) {
  var _a;
  const formattedBalance = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 5
  }).format(balance);
  const formattedValueInFiat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(valueInFiat);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex w-full flex-row items-center justify-between",
        classNames == null ? void 0 : classNames.container
      ),
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "data-testid": "ockWalletAdvanced_TokenDetails_TokenImage",
            className: cn(
              "flex flex-row items-center gap-2",
              classNames == null ? void 0 : classNames.tokenImage
            ),
            children: [
              /* @__PURE__ */ jsxDEV(TokenImage, { token, size: tokenImageSize }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
                lineNumber: 119,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: cn(
                      text.label1,
                      color.foreground,
                      "max-w-52 overflow-hidden text-ellipsis whitespace-nowrap text-left",
                      classNames == null ? void 0 : classNames.tokenName
                    ),
                    children: (_a = token.name) == null ? void 0 : _a.trim()
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: cn(
                      text.legal,
                      color.foregroundMuted,
                      classNames == null ? void 0 : classNames.tokenBalance
                    ),
                    children: `${formattedBalance} ${token.symbol}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
                lineNumber: 120,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
            lineNumber: 112,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: cn(
              text.label2,
              color.foregroundMuted,
              classNames == null ? void 0 : classNames.fiatValue
            ),
            children: formattedValueInFiat
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
            lineNumber: 142,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTokenHoldings.tsx",
      lineNumber: 106,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletAdvancedTokenHoldings
};
//# sourceMappingURL=WalletAdvancedTokenHoldings.js.map
