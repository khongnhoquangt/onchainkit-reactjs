'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { WalletEvent, WalletOption } from "../../core/analytics/types.js";
import { Skeleton } from "../../internal/components/Skeleton.js";
import { addSvgForeground } from "../../internal/svg/addForegroundSvg.js";
import { arrowUpRightSvg } from "../../internal/svg/arrowUpRightSvg.js";
import { toggleSvg } from "../../internal/svg/toggleSvg.js";
import { cn, color, text, pressable, border } from "../../styles/theme.js";
import { useOnchainKit } from "../../useOnchainKit.js";
import { useCallback } from "react";
import { useWalletContext } from "./WalletProvider.js";
import { RequestContext } from "../../core/network/constants.js";
import { usePortfolio } from "../hooks/usePortfolio.js";
function WalletAdvancedTransactionActions({
  classNames
}) {
  const { address, chain, setActiveFeature, animations } = useWalletContext();
  const { projectId } = useOnchainKit();
  const { sendAnalytics } = useAnalytics();
  const { isFetching: isFetchingPortfolioData } = usePortfolio(
    { address },
    RequestContext.Wallet
  );
  const handleAnalyticsOptionSelected = useCallback(
    (option) => {
      sendAnalytics(WalletEvent.OptionSelected, {
        option
      });
    },
    [sendAnalytics]
  );
  const handleBuy = useCallback(() => {
    handleAnalyticsOptionSelected(WalletOption.Buy);
    if (!projectId || !address || !(chain == null ? void 0 : chain.name)) {
      return;
    }
    const url = new URL("https://pay.coinbase.com/buy/select-asset");
    const params = new URLSearchParams({
      appId: projectId,
      destinationWallets: JSON.stringify([
        {
          address,
          blockchains: [chain.name.toLowerCase()]
        }
      ]),
      defaultAsset: "USDC",
      defaultPaymentMethod: "CRYPTO_ACCOUNT",
      presetFiatAmount: "25"
    });
    window.open(
      `${url}?${params}`,
      "popup",
      "width=400,height=600,scrollbars=yes"
    );
  }, [address, chain == null ? void 0 : chain.name, projectId, handleAnalyticsOptionSelected]);
  const handleSend = useCallback(() => {
    handleAnalyticsOptionSelected(WalletOption.Send);
    setActiveFeature("send");
  }, [handleAnalyticsOptionSelected, setActiveFeature]);
  const handleSwap = useCallback(() => {
    handleAnalyticsOptionSelected(WalletOption.Swap);
    setActiveFeature("swap");
  }, [setActiveFeature, handleAnalyticsOptionSelected]);
  if (isFetchingPortfolioData) {
    return /* @__PURE__ */ jsxDEV(Skeleton, { className: "mx-auto my-3 h-16 w-80 px-4 py-3" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
      lineNumber: 96,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockWalletAdvanced_TransactionActions",
      className: cn(
        "my-3 flex w-88 flex-row justify-between gap-2 px-4 py-3",
        animations.content,
        classNames == null ? void 0 : classNames.container
      ),
      children: [
        /* @__PURE__ */ jsxDEV(
          WalletAdvancedTransactionAction,
          {
            icon: addSvgForeground,
            label: "Buy",
            action: handleBuy,
            classNames: classNames == null ? void 0 : classNames.leftAction
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
            lineNumber: 108,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          WalletAdvancedTransactionAction,
          {
            icon: arrowUpRightSvg,
            label: "Send",
            action: handleSend,
            classNames: classNames == null ? void 0 : classNames.middleAction
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
            lineNumber: 114,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          WalletAdvancedTransactionAction,
          {
            icon: toggleSvg,
            label: "Swap",
            action: handleSwap,
            classNames: classNames == null ? void 0 : classNames.rightAction
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
            lineNumber: 120,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
      lineNumber: 100,
      columnNumber: 5
    },
    this
  );
}
function WalletAdvancedTransactionAction({
  icon,
  label,
  action,
  classNames
}) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      className: cn(
        "flex flex-col items-center justify-center gap-2 pt-2.5 pb-2",
        "h-16 flex-1",
        border.radius,
        pressable.alternate,
        classNames == null ? void 0 : classNames.container
      ),
      onClick: action,
      "aria-label": label,
      children: [
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: cn(
              "flex h-4 w-4 flex-col items-center justify-center",
              classNames == null ? void 0 : classNames.icon
            ),
            children: icon
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
            lineNumber: 149,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: cn(
              text.label2,
              color.foreground,
              "flex flex-col justify-center",
              classNames == null ? void 0 : classNames.label
            ),
            children: label
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
            lineNumber: 157,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedTransactionActions.tsx",
      lineNumber: 137,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletAdvancedTransactionActions
};
//# sourceMappingURL=WalletAdvancedTransactionActions.js.map
