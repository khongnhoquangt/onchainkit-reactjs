'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { CopyButton } from "../../internal/components/CopyButton.js";
import { PressableIcon } from "../../internal/components/PressableIcon.js";
import { QrCodeSvg } from "../../internal/components/QrCode/QrCodeSvg.js";
import { backArrowSvg } from "../../internal/svg/backArrowSvg.js";
import { copySvg } from "../../internal/svg/copySvg.js";
import { zIndex } from "../../styles/constants.js";
import { cn, border, pressable, color, text } from "../../styles/theme.js";
import { useState, useCallback } from "react";
import { useWalletContext } from "./WalletProvider.js";
function WalletAdvancedQrReceive({
  classNames
}) {
  const {
    address,
    setActiveFeature,
    isActiveFeatureClosing,
    setIsActiveFeatureClosing
  } = useWalletContext();
  const [copyText, setCopyText] = useState("Copy");
  const [copyButtonText, setCopyButtonText] = useState("Copy address");
  const handleCloseQr = useCallback(() => {
    setIsActiveFeatureClosing(true);
  }, [setIsActiveFeatureClosing]);
  const handleAnimationEnd = useCallback(() => {
    if (isActiveFeatureClosing) {
      setActiveFeature(null);
      setIsActiveFeatureClosing(false);
    }
  }, [isActiveFeatureClosing, setActiveFeature, setIsActiveFeatureClosing]);
  const resetAffordanceText = useCallback(() => {
    setTimeout(() => {
      setCopyText("Copy");
      setCopyButtonText("Copy address");
    }, 2e3);
  }, []);
  const handleCopyButtonSuccess = useCallback(() => {
    setCopyButtonText("Address copied");
    resetAffordanceText();
  }, [resetAffordanceText]);
  const handleCopyButtonError = useCallback(() => {
    setCopyButtonText("Failed to copy address");
    resetAffordanceText();
  }, [resetAffordanceText]);
  const handleCopyIconSuccess = useCallback(() => {
    setCopyText("Copied");
    resetAffordanceText();
  }, [resetAffordanceText]);
  const handleCopyIconError = useCallback(() => {
    setCopyText("Failed to copy");
    resetAffordanceText();
  }, [resetAffordanceText]);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockWalletAdvancedQrReceive",
      className: cn(
        border.radius,
        color.foreground,
        text.headline,
        "flex flex-col items-center justify-between",
        "h-120 w-88 px-4 pt-3 pb-4",
        isActiveFeatureClosing ? "fade-out slide-out-to-left-5 animate-out fill-mode-forwards ease-in-out" : "fade-in slide-in-from-left-5 linear animate-in duration-150",
        classNames == null ? void 0 : classNames.container
      ),
      onAnimationEnd: handleAnimationEnd,
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(
              "flex h-[34px] w-full flex-row items-center justify-between",
              classNames == null ? void 0 : classNames.header
            ),
            children: [
              /* @__PURE__ */ jsxDEV(PressableIcon, { ariaLabel: "Back button", onClick: handleCloseQr, children: /* @__PURE__ */ jsxDEV("div", { className: "p-2", children: backArrowSvg }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
                lineNumber: 88,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
                lineNumber: 87,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Scan to receive" }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
                lineNumber: 90,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "group relative", children: [
                /* @__PURE__ */ jsxDEV(
                  CopyButton,
                  {
                    label: copySvg,
                    copyValue: address ?? "",
                    onSuccess: handleCopyIconSuccess,
                    onError: handleCopyIconError,
                    className: cn(
                      pressable.default,
                      border.radiusInner,
                      border.default,
                      "flex items-center justify-center p-2"
                    ),
                    "aria-label": "Copy your address by clicking the icon"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  CopyButton,
                  {
                    label: copyText,
                    copyValue: address ?? "",
                    onSuccess: handleCopyIconSuccess,
                    onError: handleCopyIconError,
                    className: cn(
                      pressable.alternate,
                      text.legal,
                      color.foreground,
                      border.default,
                      border.radius,
                      zIndex.dropdown,
                      "absolute top-full right-0 mt-0.5 px-1.5 py-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                    ),
                    "aria-label": "Copy your address by clicking the tooltip"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
                lineNumber: 91,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
            lineNumber: 81,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(QrCodeSvg, { value: address }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          CopyButton,
          {
            copyValue: address ?? "",
            label: copyButtonText,
            className: cn(
              border.radius,
              pressable.alternate,
              "w-full p-3",
              classNames == null ? void 0 : classNames.copyButton
            ),
            onSuccess: handleCopyButtonSuccess,
            onError: handleCopyButtonError,
            "aria-label": "Copy your address by clicking the button"
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
            lineNumber: 124,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvancedQrReceive.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletAdvancedQrReceive
};
//# sourceMappingURL=WalletAdvancedQrReceive.js.map
