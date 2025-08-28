'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Address } from "../../../identity/components/Address.js";
import "../../../identity/components/IdentityProvider.js";
import "viem";
import "viem/chains";
import "viem/ens";
import "../../../identity/constants.js";
import "@tanstack/react-query";
import "../../../identity/utils/getAddress.js";
import { useState, useMemo } from "react";
import "../../../internal/svg/defaultAvatarSVG.js";
import { cn, text, color, border, background } from "../../../styles/theme.js";
import "../../../core/network/attestations.js";
import "../../../identity/utils/easSupportedChains.js";
import "../../../internal/svg/badgeSvg.js";
import "../../../useOnchainKit.js";
import { useAccount } from "wagmi";
import "../../../internal/svg/githubSvg.js";
import "../../../internal/svg/twitterSvg.js";
import "../../../internal/svg/warpcastSvg.js";
import "../../../internal/svg/websiteSvg.js";
import "../../../identity/utils/getAddresses.js";
import { TextInput } from "../../../internal/components/TextInput.js";
import { isValidAmount } from "../../../internal/utils/isValidAmount.js";
import "../../../token/components/TokenRow.js";
import "../../../internal/svg/searchIconSvg.js";
import { TokenSelectDropdown } from "../../../token/components/TokenSelectDropdown.js";
import "../../../token/components/TokenSelectButton.js";
import { useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
function AppchainBridgeInput({
  className,
  delayMs = 50
}) {
  const {
    balance,
    bridgeParams,
    bridgeableTokens,
    to,
    isPriceLoading,
    handleAmountChange,
    setIsAddressModalOpen,
    resetDepositStatus
  } = useAppchainBridgeContext();
  const [currentToken, setCurrentToken] = useState(bridgeableTokens[0]);
  const { address } = useAccount();
  const insufficientBalance = useMemo(() => {
    return balance && Number(balance) < Number(bridgeParams.amount);
  }, [balance, bridgeParams.amount]);
  const label = useMemo(() => {
    if (insufficientBalance) {
      return "Insufficient funds";
    }
    if (isPriceLoading) {
      return /* @__PURE__ */ jsxDEV("div", { className: "h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this);
    }
    if (bridgeParams.amountUSD === "NaN") {
      return "";
    }
    return `~$${bridgeParams.amountUSD}`;
  }, [insufficientBalance, isPriceLoading, bridgeParams.amountUSD]);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        background.secondary,
        border.radius,
        "box-border flex h-[148px] w-full flex-col items-start p-4",
        className
      ),
      "data-testid": "ockBridgeAmountInput_Container",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex w-full items-center justify-between", children: /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: cn(
              text.label2,
              color.foregroundMuted,
              "flex items-center gap-1"
            ),
            children: [
              "Send to",
              " ",
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  className: cn(
                    "cursor-pointer hover:underline focus:outline-none",
                    text.label2
                  ),
                  onClick: () => {
                    setIsAddressModalOpen(true);
                  },
                  title: bridgeParams.recipient,
                  children: /* @__PURE__ */ jsxDEV(
                    Address,
                    {
                      address: bridgeParams.recipient || "0x0000000000000000000000000000000000000000",
                      hasCopyAddressOnClick: false,
                      className: cn(text.label2, "!text-[var(--ock-text-foreground)]")
                    },
                    void 0,
                    false,
                    {
                      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
                      lineNumber: 81,
                      columnNumber: 13
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
                  lineNumber: 70,
                  columnNumber: 11
                },
                this
              ),
              " ",
              "on ",
              /* @__PURE__ */ jsxDEV("span", { className: "inline-flex h-4 w-4 items-center", children: to.icon }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
                lineNumber: 90,
                columnNumber: 14
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
            lineNumber: 62,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex w-full items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV(
            TextInput,
            {
              className: cn(
                "mr-2 w-full border-[none] bg-transparent font-display text-[2.5rem]",
                "leading-none outline-none",
                color.foreground,
                insufficientBalance && color.error
              ),
              placeholder: "0.00",
              delayMs,
              inputValidator: isValidAmount,
              onChange: (value) => {
                handleAmountChange({
                  amount: value,
                  token: currentToken
                });
              },
              value: bridgeParams.amount
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
              lineNumber: 94,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            TokenSelectDropdown,
            {
              token: currentToken,
              options: bridgeableTokens,
              setToken: (token) => {
                handleAmountChange({
                  amount: bridgeParams.amount,
                  token
                });
                resetDepositStatus();
                setCurrentToken(token);
              }
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
              lineNumber: 112,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex w-full justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: cn(
                text.label2,
                color.foregroundMuted,
                insufficientBalance && color.error
              ),
              children: label
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
              lineNumber: 127,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
            lineNumber: 126,
            columnNumber: 9
          }, this),
          address && /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: cn(text.label2, color.foregroundMuted),
                children: `Balance: ${Number(balance).toLocaleString(void 0, {
                  maximumFractionDigits: 5,
                  minimumFractionDigits: 0
                })}`
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
                lineNumber: 139,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                className: "flex cursor-pointer items-center justify-center px-2 py-1",
                "data-testid": "ockBridgeAmountInput_MaxButton",
                onClick: () => {
                  handleAmountChange({
                    amount: balance,
                    token: bridgeParams.token
                  });
                },
                children: /* @__PURE__ */ jsxDEV("span", { className: cn(text.label1, color.primary), children: "Max" }, void 0, false, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
                  lineNumber: 156,
                  columnNumber: 15
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
                lineNumber: 145,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
            lineNumber: 138,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
          lineNumber: 125,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeInput.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
}
export {
  AppchainBridgeInput
};
//# sourceMappingURL=AppchainBridgeInput.js.map
