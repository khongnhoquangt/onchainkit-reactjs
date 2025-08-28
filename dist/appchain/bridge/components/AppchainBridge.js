'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useIsMounted } from "../../../internal/hooks/useIsMounted.js";
import { useTheme } from "../../../internal/hooks/useTheme.js";
import { cn, color, border, background, text } from "../../../styles/theme.js";
import { AppchainBridgeAddressInput } from "./AppchainBridgeAddressInput.js";
import { AppchainBridgeInput } from "./AppchainBridgeInput.js";
import { AppchainBridgeNetwork } from "./AppchainBridgeNetwork.js";
import { AppchainBridgeProvider, useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
import { AppchainBridgeResumeTransaction } from "./AppchainBridgeResumeTransaction.js";
import { AppchainBridgeSuccess } from "./AppchainBridgeSuccess.js";
import { AppchainBridgeTransactionButton } from "./AppchainBridgeTransactionButton.js";
import { AppchainBridgeWithdraw } from "./AppchainBridgeWithdraw.js";
import { AppchainNetworkToggleButton } from "./AppchainNetworkToggleButton.js";
const AppchainBridgeDefaultContent = ({ title }) => {
  const {
    isAddressModalOpen,
    isWithdrawModalOpen,
    isSuccessModalOpen,
    isResumeTransactionModalOpen,
    setIsResumeTransactionModalOpen
  } = useAppchainBridgeContext();
  if (isResumeTransactionModalOpen) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative flex min-h-60",
        "data-testid": "ockAppchainBridge_ResumeTransaction",
        children: /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV(AppchainBridgeResumeTransaction, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      void 0
    );
  }
  if (isSuccessModalOpen) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative flex min-h-60",
        "data-testid": "ockAppchainBridge_Success",
        children: /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV(AppchainBridgeSuccess, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
        lineNumber: 41,
        columnNumber: 7
      },
      void 0
    );
  }
  if (isWithdrawModalOpen) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative flex min-h-60",
        "data-testid": "ockAppchainBridge_Withdraw",
        children: /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV(AppchainBridgeWithdraw, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      void 0
    );
  }
  if (isAddressModalOpen) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative flex min-h-60",
        "data-testid": "ockAppchainBridge_Address",
        children: /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV(AppchainBridgeAddressInput, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
        lineNumber: 67,
        columnNumber: 7
      },
      void 0
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "relative flex min-h-60",
      "data-testid": "ockAppchainBridge_DefaultContent",
      children: /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: cn(text.title3), "data-testid": "ockSwap_Title", children: title }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
            lineNumber: 85,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: cn(
                text.label2,
                color.foregroundMuted,
                "absolute right-0"
              ),
              children: /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setIsResumeTransactionModalOpen(true);
                  },
                  children: "Resume"
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
                  lineNumber: 95,
                  columnNumber: 13
                },
                void 0
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
              lineNumber: 88,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 84,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV(AppchainBridgeNetwork, { type: "from", label: "From" }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
              lineNumber: 108,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(AppchainNetworkToggleButton, {}, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
              lineNumber: 109,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(AppchainBridgeNetwork, { type: "to", label: "To" }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
              lineNumber: 110,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
            lineNumber: 107,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV(AppchainBridgeInput, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
            lineNumber: 112,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV(AppchainBridgeTransactionButton, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
            lineNumber: 113,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    void 0
  );
};
function AppchainBridge({
  chain,
  appchain,
  title = "Bridge",
  bridgeableTokens,
  children = /* @__PURE__ */ jsxDEV(AppchainBridgeDefaultContent, { title }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
    lineNumber: 125,
    columnNumber: 14
  }, this),
  className,
  handleFetchPrice
}) {
  const isMounted = useIsMounted();
  const componentTheme = useTheme();
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    AppchainBridgeProvider,
    {
      chain,
      appchain,
      bridgeableTokens,
      handleFetchPrice,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(
            componentTheme,
            background.default,
            border.radius,
            color.foreground,
            "ock-border-line-default flex w-full flex-col border px-6 pt-6 pb-4",
            className
          ),
          "data-testid": "ockAppchainBridge_Container",
          children
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
          lineNumber: 143,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridge.tsx",
      lineNumber: 137,
      columnNumber: 5
    },
    this
  );
}
export {
  AppchainBridge
};
//# sourceMappingURL=AppchainBridge.js.map
