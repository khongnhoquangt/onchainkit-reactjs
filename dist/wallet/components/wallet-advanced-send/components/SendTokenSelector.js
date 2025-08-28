'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color, text, border, pressable } from "../../../../styles/theme.js";
import "../../../../useOnchainKit.js";
import "react";
import "../../../../token/components/TokenRow.js";
import "../../../../internal/components/TextInput.js";
import "../../../../internal/svg/searchIconSvg.js";
import "react-dom";
import "../../../../token/components/TokenSelectButton.js";
import { TokenBalance } from "../../../../token/components/TokenBalance.js";
import { formatUnits } from "viem";
import { useSendContext } from "./SendProvider.js";
import { RequestContext } from "../../../../core/network/constants.js";
import { useAccount } from "wagmi";
import { usePortfolio } from "../../../hooks/usePortfolio.js";
function SendTokenSelector({ classNames }) {
  const { address } = useAccount();
  const { data: portfolioData } = usePortfolio(
    { address },
    RequestContext.Wallet
  );
  const tokenBalances = portfolioData == null ? void 0 : portfolioData.tokenBalances;
  const {
    selectedToken,
    handleTokenSelection,
    handleResetTokenSelection,
    setSelectedInputType,
    handleCryptoAmountChange,
    handleFiatAmountChange
  } = useSendContext();
  if (!selectedToken) {
    return /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex max-h-80 flex-col gap-2", children: [
      /* @__PURE__ */ jsxDEV("span", { className: cn(text.caption, color.foregroundMuted, "uppercase"), children: "Select a token" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendTokenSelector.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "scrollbar-hidden overflow-y-auto", children: tokenBalances == null ? void 0 : tokenBalances.map((token) => /* @__PURE__ */ jsxDEV(
        TokenBalance,
        {
          token,
          onClick: handleTokenSelection,
          subtitle: "",
          classNames: {
            container: cn(
              pressable.default,
              border.radius,
              classNames == null ? void 0 : classNames.container
            ),
            ...classNames
          }
        },
        token.address,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendTokenSelector.tsx",
          lineNumber: 46,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendTokenSelector.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendTokenSelector.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    TokenBalance,
    {
      token: selectedToken,
      showImage: true,
      subtitle: "available",
      onClick: handleResetTokenSelection,
      onActionPress: () => {
        setSelectedInputType("crypto");
        handleFiatAmountChange(String(selectedToken.fiatBalance));
        handleCryptoAmountChange(
          String(
            formatUnits(
              BigInt(selectedToken.cryptoBalance),
              selectedToken.decimals
            )
          )
        );
      },
      classNames: {
        container: cn(
          pressable.alternate,
          border.radius,
          classNames == null ? void 0 : classNames.container
        ),
        ...classNames
      }
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendTokenSelector.tsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}
export {
  SendTokenSelector
};
//# sourceMappingURL=SendTokenSelector.js.map
