'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useCallback } from "react";
import { cn, text, color } from "../../styles/theme.js";
import { useAccount } from "wagmi";
import { getChainExplorer } from "../../core/network/getChainExplorer.js";
import { Toast } from "../../internal/components/Toast.js";
import { SuccessSvg } from "../../internal/svg/successSvg.js";
import { useSwapContext } from "./SwapProvider.js";
function SwapToast({
  className,
  durationMs = 5e3,
  position = "bottom-center"
}) {
  const {
    isToastVisible,
    setIsToastVisible,
    setTransactionHash,
    transactionHash
  } = useSwapContext();
  const { chainId } = useAccount();
  const chainExplorer = getChainExplorer(chainId);
  const resetToastState = useCallback(() => {
    setIsToastVisible(false);
    setTransactionHash("");
  }, [setIsToastVisible, setTransactionHash]);
  if (!isToastVisible) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    Toast,
    {
      position,
      className,
      durationMs,
      isVisible: isToastVisible,
      onClose: resetToastState,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2), children: /* @__PURE__ */ jsxDEV(SuccessSvg, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: cn(text.label1, "text-nowrap"), children: /* @__PURE__ */ jsxDEV("p", { className: color.foreground, children: "Successful" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: cn(text.label1, "text-nowrap"), children: /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: `${chainExplorer}/tx/${transactionHash}`,
            target: "_blank",
            rel: "noreferrer",
            children: /* @__PURE__ */ jsxDEV("span", { className: cn(text.label1, color.primary), children: "View transaction" }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
            lineNumber: 51,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapToast.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}
export {
  SwapToast
};
//# sourceMappingURL=SwapToast.js.map
