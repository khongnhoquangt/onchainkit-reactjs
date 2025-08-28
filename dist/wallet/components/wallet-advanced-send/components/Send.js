import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { Skeleton } from "../../../../internal/components/Skeleton.js";
import { cn, color, border, background } from "../../../../styles/theme.js";
import { ETH_REQUIRED_FOR_SEND } from "../constants.js";
import { SendAmountInput } from "./SendAmountInput.js";
import { SendButton } from "./SendButton.js";
import { SendFundWallet } from "./SendFundWallet.js";
import { SendHeader } from "./SendHeader.js";
import { SendProvider, useSendContext } from "./SendProvider.js";
import { SendTokenSelector } from "./SendTokenSelector.js";
import { SendAddressInput } from "./SendAddressInput.js";
import { SendAddressSelector } from "./SendAddressSelector.js";
function Send({
  children = /* @__PURE__ */ jsxDEV(SendDefaultChildren, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
    lineNumber: 15,
    columnNumber: 14
  }, this),
  className
}) {
  return /* @__PURE__ */ jsxDEV(SendProvider, { children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockSend",
      className: cn(
        background.default,
        border.radius,
        border.lineDefault,
        color.foreground,
        "h-120 w-88",
        "flex flex-col",
        "p-4",
        className
      ),
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function SendDefaultChildren() {
  const { ethBalance, isInitialized, recipientState, selectedToken } = useSendContext();
  const walletHasEth = (ethBalance ?? 0) > ETH_REQUIRED_FOR_SEND;
  if (!isInitialized) {
    return /* @__PURE__ */ jsxDEV(Skeleton, { className: "h-full w-full" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
      lineNumber: 46,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(SendHeader, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    walletHasEth ? /* @__PURE__ */ jsxDEV("div", { className: "flex h-full flex-col justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(SendAddressInput, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        recipientState.phase === "validated" && /* @__PURE__ */ jsxDEV(SendAddressSelector, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
          lineNumber: 56,
          columnNumber: 54
        }, this),
        recipientState.phase === "selected" && !selectedToken && /* @__PURE__ */ jsxDEV(SendTokenSelector, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      recipientState.phase === "selected" && selectedToken && /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(SendAmountInput, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(SendTokenSelector, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(SendButton, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV(SendFundWallet, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/Send.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  Send
};
//# sourceMappingURL=Send.js.map
