'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text, border, background } from "../../../styles/theme.js";
import { useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
const AppchainBridgeNetwork = ({
  type,
  label
}) => {
  const { from, to } = useAppchainBridgeContext();
  const displayNetwork = type === "from" ? from.name : to.name;
  const displayIcon = type === "from" ? from.icon : to.icon;
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        background.secondary,
        border.radius,
        "box-border flex h-[80px] w-full flex-col items-start justify-center p-4"
      ),
      "data-testid": "ockAppchainBridgeNetwork_Container",
      children: /* @__PURE__ */ jsxDEV("div", { className: "flex w-full items-center justify-between", children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(
            "flex-col items-center gap-2 p-3",
            border.radius,
            "w-full",
            {
              "items-start": type === "from",
              "items-end": type === "to"
            }
          ),
          children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: cn("flex w-full items-center", {
                  "justify-start": type === "from",
                  "justify-end": type === "to"
                }),
                children: /* @__PURE__ */ jsxDEV("span", { className: cn(text.label2, "text-[#8A919E]"), children: label }, void 0, false, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
                  lineNumber: 46,
                  columnNumber: 13
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
                lineNumber: 40,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: cn("flex items-center gap-2", {
                  "justify-start": type === "from",
                  "justify-end": type === "to"
                }),
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex h-4 w-4 items-center justify-center", children: displayIcon }, void 0, false, {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
                    lineNumber: 54,
                    columnNumber: 13
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: cn(text.headline), children: displayNetwork }, void 0, false, {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
                    lineNumber: 57,
                    columnNumber: 13
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
                lineNumber: 48,
                columnNumber: 11
              },
              void 0
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        void 0
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainBridgeNetwork.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    void 0
  );
};
export {
  AppchainBridgeNetwork
};
//# sourceMappingURL=AppchainBridgeNetwork.js.map
