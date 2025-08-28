import { jsxDEV } from "react/jsx-dev-runtime";
import "react";
import "../../../../useOnchainKit.js";
import { cn, color, text } from "../../../../styles/theme.js";
import "wagmi";
import "viem/chains";
import "@farcaster/frame-sdk";
import "../../../../identity/components/IdentityProvider.js";
import "viem";
import "viem/ens";
import "../../../../identity/constants.js";
import "@tanstack/react-query";
import "../../../../identity/utils/getAddress.js";
import "../../../../internal/svg/defaultAvatarSVG.js";
import "../../../../core/network/attestations.js";
import "../../../../identity/utils/easSupportedChains.js";
import "../../../../internal/svg/badgeSvg.js";
import "../../../../internal/svg/githubSvg.js";
import "../../../../internal/svg/twitterSvg.js";
import "../../../../internal/svg/warpcastSvg.js";
import "../../../../internal/svg/websiteSvg.js";
import "../../../../identity/utils/getAddresses.js";
import "react-dom";
import "../../../../internal/svg/trustWalletSvg.js";
import "wagmi/connectors";
import "../../WalletProvider.js";
import "wagmi/experimental";
import { FundCard } from "../../../../fund/components/FundCard.js";
import { FundCardAmountInput } from "../../../../fund/components/FundCardAmountInput.js";
import { FundCardAmountInputTypeSwitch } from "../../../../fund/components/FundCardAmountInputTypeSwitch.js";
import "../../../../fund/components/FundCardProvider.js";
import { FundCardPaymentMethodDropdown } from "../../../../fund/components/FundCardPaymentMethodDropdown.js";
import { FundCardPresetAmountInputList } from "../../../../fund/components/FundCardPresetAmountInputList.js";
import { FundCardSubmitButton } from "../../../../fund/components/FundCardSubmitButton.js";
function SendFundWallet({
  onError,
  onStatus,
  onSuccess,
  classNames
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-between",
        classNames == null ? void 0 : classNames.container
      ),
      "data-testid": "ockSendFundWallet",
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(text.label2, color.foregroundMuted, classNames == null ? void 0 : classNames.subtitle),
            children: "Insufficient ETH balance to send transaction. Fund your wallet to continue."
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
            lineNumber: 36,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          FundCard,
          {
            assetSymbol: "ETH",
            country: "US",
            currency: "USD",
            presetAmountInputs: ["2", "5", "10"],
            onError,
            onStatus,
            onSuccess,
            className: cn("mt-3 w-88 border-none py-0", classNames == null ? void 0 : classNames.fundCard),
            children: [
              /* @__PURE__ */ jsxDEV(FundCardAmountInput, {}, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
                lineNumber: 52,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV(FundCardAmountInputTypeSwitch, {}, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
                lineNumber: 53,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV(FundCardPresetAmountInputList, {}, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
                lineNumber: 54,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV(FundCardPaymentMethodDropdown, {}, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
                lineNumber: 55,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV(FundCardSubmitButton, {}, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
                lineNumber: 56,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
            lineNumber: 42,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendFundWallet.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
export {
  SendFundWallet
};
//# sourceMappingURL=SendFundWallet.js.map
