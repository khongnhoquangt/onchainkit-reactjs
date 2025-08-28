'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Spinner } from "../../../internal/components/Spinner.js";
import { ErrorSvg } from "../../../internal/svg/fullWidthErrorSvg.js";
import { SuccessSvg } from "../../../internal/svg/fullWidthSuccessSvg.js";
import { cn, text, border, pressable, color } from "../../../styles/theme.js";
import { useEffect } from "react";
import { useWithdrawButton } from "../hooks/useWithdrawButton.js";
import { useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
const buttonStyles = cn(
  pressable.primary,
  border.radius,
  "w-full rounded-xl",
  "px-4 py-3 font-medium text-base text-white leading-6",
  text.headline
);
const AppchainBridgeWithdraw = () => {
  const {
    withdrawStatus,
    waitForWithdrawal,
    resumeWithdrawalTxHash,
    handleResetState
  } = useAppchainBridgeContext();
  const { shouldShowClaim, label, isError, isPending } = useWithdrawButton({
    withdrawStatus
  });
  useEffect(() => {
    (async () => {
      if (withdrawStatus === "withdrawSuccess") {
        waitForWithdrawal();
      }
      if (resumeWithdrawalTxHash) {
        waitForWithdrawal(resumeWithdrawalTxHash);
      }
    })();
  }, [withdrawStatus, waitForWithdrawal, resumeWithdrawalTxHash]);
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full flex-col justify-between", children: [
    /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV("h2", { className: "ock-text-foreground flex-1 text-center font-medium text-lg", children: label }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-16 px-4 pb-4", children: [
      isError && /* @__PURE__ */ jsxDEV(ErrorContent, { onBack: handleResetState }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, void 0),
      isPending && /* @__PURE__ */ jsxDEV(LoadingContent, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 54,
        columnNumber: 23
      }, void 0),
      shouldShowClaim && /* @__PURE__ */ jsxDEV(ClaimContent, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 55,
        columnNumber: 29
      }, void 0),
      withdrawStatus === "claimRejected" && /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, color.error, "mt-2"), children: "Transaction denied" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, void 0);
};
function LoadingContent() {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-full flex-col items-center justify-center gap-16", children: [
    /* @__PURE__ */ jsxDEV(Spinner, { className: "!border-t-[var(--ock-bg-primary)] h-24 w-24" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { className: "px-4 text-center font-medium text-base", children: [
      "Waiting for claim to be ready...",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      "Please do not close this window."
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
function ErrorContent({ onBack }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-16", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "h-20 w-20", children: /* @__PURE__ */ jsxDEV(ErrorSvg, { fill: "var(--ock-bg-error)" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "px-4 text-center font-medium text-base", children: [
        "There was an error processing your withdrawal.",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        "If the issue persists, please contact support."
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: onBack, className: buttonStyles, type: "button", children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(text.headline, color.inverse, "flex justify-center"),
          children: "Back to bridge"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
          lineNumber: 94,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
function ClaimContent() {
  const { withdrawStatus, proveAndFinalizeWithdrawal } = useAppchainBridgeContext();
  const { buttonDisabled, buttonContent } = useWithdrawButton({
    withdrawStatus
  });
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-16", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "h-20 w-20", children: /* @__PURE__ */ jsxDEV(SuccessSvg, { fill: "var(--ock-bg-primary)" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: proveAndFinalizeWithdrawal,
        className: cn(buttonStyles, buttonDisabled && pressable.disabled),
        type: "button",
        children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(text.headline, color.inverse, "flex justify-center"),
            children: buttonContent
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
            lineNumber: 125,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
        lineNumber: 120,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeWithdraw.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}
export {
  AppchainBridgeWithdraw
};
//# sourceMappingURL=AppchainBridgeWithdraw.js.map
