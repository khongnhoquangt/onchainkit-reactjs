'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Address } from "../../../identity/components/Address.js";
import { Avatar } from "../../../identity/components/Avatar.js";
import "../../../core/network/attestations.js";
import "../../../identity/utils/easSupportedChains.js";
import "@tanstack/react-query";
import "../../../internal/svg/badgeSvg.js";
import "clsx";
import "tailwind-merge";
import { useState } from "react";
import "../../../useOnchainKit.js";
import "../../../identity/components/IdentityProvider.js";
import "viem";
import "wagmi";
import "viem/chains";
import "../../../identity/constants.js";
import "../../../identity/utils/getAddress.js";
import "viem/ens";
import "../../../internal/svg/githubSvg.js";
import "../../../internal/svg/twitterSvg.js";
import "../../../internal/svg/warpcastSvg.js";
import "../../../internal/svg/websiteSvg.js";
import "../../../identity/utils/getAddresses.js";
import { PressableIcon } from "../../../internal/components/PressableIcon.js";
import { TextInput } from "../../../internal/components/TextInput.js";
import { backArrowSvg } from "../../../internal/svg/backArrowSvg.js";
import { useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
const AppchainBridgeAddressInput = () => {
  const { setIsAddressModalOpen, handleAddressSelect } = useAppchainBridgeContext();
  const [address, setAddress] = useState(null);
  const [isValidAddress, setIsValidAddress] = useState(false);
  const validateAddress = (addr) => {
    return /^0x[a-fA-F0-9]{40}$/.test(addr);
  };
  const backButton = /* @__PURE__ */ jsxDEV(
    PressableIcon,
    {
      ariaLabel: "Back button",
      onClick: () => {
        setIsAddressModalOpen(false);
      },
      children: /* @__PURE__ */ jsxDEV("div", { className: "p-2", children: backArrowSvg }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    void 0
  );
  return /* @__PURE__ */ jsxDEV("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
      backButton,
      /* @__PURE__ */ jsxDEV("h2", { className: "ock-text-foreground mr-10 flex-1 text-center font-medium text-lg", children: "Send to" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-4 px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "absolute left-4 text-ock-line-default", children: "To" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            className: "ock-bg-default ock-text-foreground ock-border-line-default w-full rounded-lg border p-3 pl-12 placeholder-ock-default focus:border-blue-500 focus:outline-none",
            placeholder: "",
            onChange: (value) => {
              const addr = value;
              setAddress(addr);
              setIsValidAddress(validateAddress(addr));
            },
            value: address || ""
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
            lineNumber: 42,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, void 0),
      address && !isValidAddress && /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-red-500 text-sm", children: "Please enter a valid Ethereum address" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, void 0),
      address && isValidAddress && /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: "hover:ock-bg-muted mt-4 flex w-full gap-2 rounded-lg p-4 transition-colors",
          onClick: () => {
            handleAddressSelect(address);
            setIsAddressModalOpen(false);
          },
          type: "button",
          children: [
            /* @__PURE__ */ jsxDEV(Avatar, { address, className: "rounded-full bg-white" }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "flex flex-col items-start gap-1 text-ock-text-muted", children: [
              /* @__PURE__ */ jsxDEV(
                Address,
                {
                  address,
                  hasCopyAddressOnClick: false,
                  className: "!text-white font-bold"
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
                  lineNumber: 69,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                Address,
                {
                  address,
                  isSliced: false,
                  hasCopyAddressOnClick: false
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
                  lineNumber: 74,
                  columnNumber: 15
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeAddressInput.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, void 0);
};
export {
  AppchainBridgeAddressInput
};
//# sourceMappingURL=AppchainBridgeAddressInput.js.map
