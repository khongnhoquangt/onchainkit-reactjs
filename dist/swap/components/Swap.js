'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useIsMounted } from "../../internal/hooks/useIsMounted.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn, text, color, border, background } from "../../styles/theme.js";
import { FALLBACK_DEFAULT_MAX_SLIPPAGE } from "../constants.js";
import { SwapAmountInput } from "./SwapAmountInput.js";
import { SwapButton } from "./SwapButton.js";
import { SwapMessage } from "./SwapMessage.js";
import { SwapProvider } from "./SwapProvider.js";
import { SwapSettings } from "./SwapSettings.js";
import { SwapToast } from "./SwapToast.js";
import { SwapToggleButton } from "./SwapToggleButton.js";
function SwapDefaultContent({
  to,
  from,
  disabled
}) {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(SwapSettings, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      SwapAmountInput,
      {
        label: "Sell",
        swappableTokens: from,
        token: from == null ? void 0 : from[0],
        type: "from"
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(SwapToggleButton, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      SwapAmountInput,
      {
        label: "Buy",
        swappableTokens: to,
        token: to == null ? void 0 : to[0],
        type: "to"
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(SwapButton, { disabled }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SwapMessage, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SwapToast, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function Swap({
  children,
  config = {
    maxSlippage: FALLBACK_DEFAULT_MAX_SLIPPAGE
  },
  className,
  disabled,
  to,
  from,
  experimental = { useAggregator: false },
  isSponsored = false,
  onError,
  onStatus,
  onSuccess,
  title = "Swap",
  headerLeftContent
}) {
  const componentTheme = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    SwapProvider,
    {
      config,
      experimental,
      isSponsored,
      onError,
      onStatus,
      onSuccess,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(
            componentTheme,
            background.default,
            border.radius,
            color.foreground,
            "relative flex w-full max-w-[500px] flex-col px-6 pt-6 pb-4",
            className
          ),
          "data-testid": "ockSwap_Container",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute flex w-1/2 items-center justify-between", children: [
              headerLeftContent,
              /* @__PURE__ */ jsxDEV(
                "h3",
                {
                  className: cn(text.title3, "text-center"),
                  "data-testid": "ockSwap_Title",
                  children: title
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
                  lineNumber: 91,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
              lineNumber: 89,
              columnNumber: 9
            }, this),
            children ?? /* @__PURE__ */ jsxDEV(SwapDefaultContent, { to, from, disabled }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
          lineNumber: 78,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/Swap.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}
export {
  Swap
};
//# sourceMappingURL=Swap.js.map
