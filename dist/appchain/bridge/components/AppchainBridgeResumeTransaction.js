'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { PressableIcon } from "../../../internal/components/PressableIcon.js";
import { TextInput } from "../../../internal/components/TextInput.js";
import { backArrowSvg } from "../../../internal/svg/backArrowSvg.js";
import { cn, color, text, background, border, pressable } from "../../../styles/theme.js";
import { useState } from "react";
import { useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
const AppchainBridgeResumeTransaction = () => {
  const { setIsResumeTransactionModalOpen, handleResumeTransaction } = useAppchainBridgeContext();
  const [withdrawalTxHash, setWithdrawalTxHash] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);
  const backButton = /* @__PURE__ */ jsxDEV(
    PressableIcon,
    {
      ariaLabel: "Back button",
      onClick: () => {
        setIsResumeTransactionModalOpen(false);
      },
      children: /* @__PURE__ */ jsxDEV("div", { className: "p-2", children: backArrowSvg }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    void 0
  );
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full flex-col justify-between", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
        backButton,
        /* @__PURE__ */ jsxDEV("h2", { className: "ock-text-foreground flex-1 text-center font-medium text-md", children: "Resume Transaction" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(
            background.secondary,
            border.radius,
            "box-border flex h-20 w-full flex-col items-start justify-center gap-2 p-4",
            "mt-4"
          ),
          children: [
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: cn(
                  text.label2,
                  color.foregroundMuted,
                  "flex items-center gap-1"
                ),
                children: "Transaction hash"
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
                lineNumber: 44,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TextInput,
              {
                className: cn(
                  text.label2,
                  color.foregroundMuted,
                  background.secondary,
                  "w-full border-none",
                  "focus:border-none focus:outline-none focus:ring-0"
                ),
                placeholder: "0x...",
                onChange: (value) => {
                  setWithdrawalTxHash(value);
                },
                value: withdrawalTxHash || ""
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
                lineNumber: 53,
                columnNumber: 11
              },
              void 0
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        void 0
      ),
      withdrawalTxHash && invalidInput && /* @__PURE__ */ jsxDEV("div", { className: "mt-2 flex", children: /* @__PURE__ */ jsxDEV("p", { className: "text-foregroundMuted text-red-500 text-sm", children: "Please enter a valid transaction hash" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex w-full justify-between", children: /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        className: cn(
          pressable.primary,
          "w-full rounded-xl px-4 py-3 font-medium text-base leading-6",
          "text-center"
        ),
        onClick: () => {
          if (!(withdrawalTxHash == null ? void 0 : withdrawalTxHash.startsWith("0x")) || withdrawalTxHash.length !== 66) {
            setInvalidInput(true);
            return;
          }
          handleResumeTransaction(withdrawalTxHash);
        },
        children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(text.headline, color.inverse, "flex justify-center"),
            children: "Resume Transaction"
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
            lineNumber: 95,
            columnNumber: 11
          },
          void 0
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
        lineNumber: 77,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeResumeTransaction.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, void 0);
};
export {
  AppchainBridgeResumeTransaction
};
//# sourceMappingURL=AppchainBridgeResumeTransaction.js.map
