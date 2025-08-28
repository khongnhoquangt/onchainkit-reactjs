'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { SuccessSvg } from "../../../internal/svg/fullWidthSuccessSvg.js";
import { color, cn, text, border, pressable } from "../../../styles/theme.js";
import { useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
const AppchainBridgeSuccess = ({
  title = "Success!",
  primaryButtonLabel = "View Transaction",
  secondaryButtonLabel = "Back to bridge"
}) => {
  const { handleOpenExplorer, handleResetState } = useAppchainBridgeContext();
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full flex-col justify-between", children: [
    /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-16 px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-6 flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "h-12 w-12", children: /* @__PURE__ */ jsxDEV(SuccessSvg, { fill: "var(--ock-bg-primary)" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "ock-text-foreground flex-1 text-center font-medium text-sm", children: title }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex w-full flex-col items-center gap-2", children: [
        {
          label: primaryButtonLabel,
          action: handleOpenExplorer,
          variant: "primary",
          textColor: color.inverse
        },
        {
          label: secondaryButtonLabel,
          action: handleResetState,
          variant: "secondary",
          textColor: color.foreground
        }
      ].map(({ label, action, variant, textColor }) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: cn(
            pressable[variant],
            border.radius,
            "w-full rounded-xl",
            "px-4 py-3 text-base text-white leading-6",
            text.label1
          ),
          type: "button",
          onClick: action,
          children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: cn(
                text.headline,
                textColor,
                "flex justify-center"
              ),
              children: label
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
              lineNumber: 58,
              columnNumber: 17
            },
            void 0
          )
        },
        label,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
          lineNumber: 46,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeSuccess.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, void 0);
};
export {
  AppchainBridgeSuccess
};
//# sourceMappingURL=AppchainBridgeSuccess.js.map
