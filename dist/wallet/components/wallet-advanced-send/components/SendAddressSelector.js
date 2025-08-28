'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Address } from "../../../../identity/components/Address.js";
import { Avatar } from "../../../../identity/components/Avatar.js";
import "../../../../core/network/attestations.js";
import "../../../../identity/utils/easSupportedChains.js";
import "@tanstack/react-query";
import "../../../../internal/svg/badgeSvg.js";
import { cn, pressable, border, background } from "../../../../styles/theme.js";
import { useCallback } from "react";
import "../../../../useOnchainKit.js";
import "../../../../identity/components/IdentityProvider.js";
import "viem";
import "wagmi";
import { Name } from "../../../../identity/components/Name.js";
import "viem/chains";
import "../../../../identity/constants.js";
import "../../../../identity/utils/getAddress.js";
import "viem/ens";
import "../../../../internal/svg/githubSvg.js";
import "../../../../internal/svg/twitterSvg.js";
import "../../../../internal/svg/warpcastSvg.js";
import "../../../../internal/svg/websiteSvg.js";
import "../../../../identity/utils/getAddresses.js";
import { useWalletContext } from "../../WalletProvider.js";
import { useSendContext } from "./SendProvider.js";
function SendAddressSelector({ classNames }) {
  const { chain } = useWalletContext();
  const { recipientState, selectRecipient } = useSendContext();
  const handleSelectorClick = useCallback(async () => {
    selectRecipient({
      phase: "selected",
      input: recipientState.input,
      address: recipientState.address,
      displayValue: recipientState.displayValue
    });
  }, [
    recipientState.input,
    recipientState.address,
    recipientState.displayValue,
    selectRecipient
  ]);
  if (!recipientState.address || !chain) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      "data-testid": "ockSendAddressSelector_button",
      type: "button",
      onClick: handleSelectorClick,
      className: "w-full text-left",
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          "data-testid": "ockSendAddressSelector_container",
          className: cn(
            background.default,
            border.radius,
            pressable.default,
            "items-left flex min-w-[300px]",
            "mt-2 p-2",
            classNames == null ? void 0 : classNames.container
          ),
          children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV(
              Avatar,
              {
                address: recipientState.address,
                chain,
                className: classNames == null ? void 0 : classNames.avatar
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
                lineNumber: 53,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxDEV(
                Name,
                {
                  address: recipientState.address,
                  chain,
                  className: classNames == null ? void 0 : classNames.name
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
                  lineNumber: 60,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Address,
                {
                  address: recipientState.address,
                  hasCopyAddressOnClick: false,
                  className: classNames == null ? void 0 : classNames.address
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
                  lineNumber: 65,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
          lineNumber: 40,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressSelector.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
export {
  SendAddressSelector
};
//# sourceMappingURL=SendAddressSelector.js.map
