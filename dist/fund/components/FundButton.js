'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useCallback, useMemo } from "react";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { background, pressable, cn, color, border, text } from "../../styles/theme.js";
import { usePopupMonitor } from "../../buy/hooks/usePopupMonitor.js";
import { ErrorSvg } from "../../internal/svg/errorSvg.js";
import { openPopup } from "../../internal/utils/openPopup.js";
import { useAccount } from "wagmi";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { FundEvent } from "../../core/analytics/types.js";
import { Spinner } from "../../internal/components/Spinner.js";
import { AddSvg } from "../../internal/svg/addSvg.js";
import { SuccessSvg } from "../../internal/svg/successSvg.js";
import { ConnectWallet } from "../../wallet/components/ConnectWallet.js";
import { useGetFundingUrl } from "../hooks/useGetFundingUrl.js";
import { getFundingPopupSize } from "../utils/getFundingPopupSize.js";
function FundButton({
  className,
  disabled = false,
  fundingUrl,
  hideIcon = false,
  hideText = false,
  openIn = "popup",
  popupSize = "md",
  rel,
  target,
  text: buttonText = "Fund",
  successText: buttonSuccessText = "Success",
  errorText: buttonErrorText = "Something went wrong",
  state: buttonState = "default",
  fiatCurrency = "USD",
  onPopupClose,
  onClick
}) {
  const componentTheme = useTheme();
  const fallbackFundingUrl = useGetFundingUrl({
    fiatCurrency,
    originComponentName: "FundButton"
  });
  const { address } = useAccount();
  const fundingUrlToRender = fundingUrl ?? fallbackFundingUrl;
  const isDisabled = disabled || !fundingUrlToRender;
  const shouldShowConnectWallet = !address;
  const { startPopupMonitor } = usePopupMonitor(onPopupClose);
  const { sendAnalytics } = useAnalytics();
  const handleAnalyticsInitiated = useCallback(() => {
    sendAnalytics(FundEvent.FundInitiated, {
      currency: fiatCurrency
    });
  }, [sendAnalytics, fiatCurrency]);
  const handleAnalyticsFailure = useCallback(
    (error) => {
      sendAnalytics(FundEvent.FundFailure, {
        error,
        metadata: { currency: fiatCurrency }
      });
    },
    [sendAnalytics, fiatCurrency]
  );
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (fundingUrlToRender) {
        handleAnalyticsInitiated();
        onClick == null ? void 0 : onClick();
        const { height, width } = getFundingPopupSize(
          popupSize,
          fundingUrlToRender
        );
        const popupWindow = openPopup({
          url: fundingUrlToRender,
          height,
          width,
          target
        });
        if (popupWindow) {
          startPopupMonitor(popupWindow);
        } else {
          handleAnalyticsFailure("Failed to open funding popup");
        }
      }
    },
    [
      fundingUrlToRender,
      popupSize,
      target,
      onClick,
      startPopupMonitor,
      handleAnalyticsInitiated,
      handleAnalyticsFailure
    ]
  );
  const buttonColorClass = useMemo(() => {
    if (buttonState === "error") {
      return background.error;
    }
    return pressable.primary;
  }, [buttonState]);
  const classNames = cn(
    componentTheme,
    buttonColorClass,
    "px-4 py-3 inline-flex items-center justify-center space-x-2",
    {
      [pressable.disabled]: isDisabled
    },
    text.headline,
    border.radius,
    color.inverse,
    className
  );
  const buttonIcon = useMemo(() => {
    if (hideIcon) {
      return null;
    }
    switch (buttonState) {
      case "loading":
        return "";
      case "success":
        return /* @__PURE__ */ jsxDEV(SuccessSvg, { fill: "#F9FAFB" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
          lineNumber: 135,
          columnNumber: 16
        }, this);
      case "error":
        return /* @__PURE__ */ jsxDEV(ErrorSvg, { fill: "#F9FAFB" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
          lineNumber: 137,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV(AddSvg, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
          lineNumber: 139,
          columnNumber: 16
        }, this);
    }
  }, [buttonState, hideIcon]);
  const buttonTextContent = useMemo(() => {
    switch (buttonState) {
      case "loading":
        return "";
      case "success":
        return buttonSuccessText;
      case "error":
        return buttonErrorText;
      default:
        return buttonText;
    }
  }, [buttonState, buttonSuccessText, buttonErrorText, buttonText]);
  const buttonContent = useMemo(() => {
    if (buttonState === "loading") {
      return /* @__PURE__ */ jsxDEV(Spinner, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
        lineNumber: 158,
        columnNumber: 14
      }, this);
    }
    return /* @__PURE__ */ jsxDEV(Fragment, { children: [
      buttonIcon && /* @__PURE__ */ jsxDEV(
        "span",
        {
          "data-testid": "ockFundButtonIcon",
          className: "flex h-6 items-center",
          children: buttonIcon
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
          lineNumber: 164,
          columnNumber: 11
        },
        this
      ),
      hideText || /* @__PURE__ */ jsxDEV("span", { "data-testid": "ockFundButtonTextContent", children: buttonTextContent }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this);
  }, [buttonState, buttonIcon, buttonTextContent, hideText]);
  if (openIn === "tab") {
    return /* @__PURE__ */ jsxDEV(
      "a",
      {
        className: classNames,
        href: fundingUrlToRender,
        target: target ?? "_blank",
        rel,
        children: buttonContent
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
        lineNumber: 182,
        columnNumber: 7
      },
      this
    );
  }
  if (shouldShowConnectWallet) {
    return /* @__PURE__ */ jsxDEV(ConnectWallet, { className: cn("w-full", className) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
      lineNumber: 195,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: classNames,
      onClick: handleClick,
      type: "button",
      disabled: isDisabled,
      "data-testid": "ockFundButton",
      children: buttonContent
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundButton.tsx",
      lineNumber: 199,
      columnNumber: 5
    },
    this
  );
}
export {
  FundButton
};
//# sourceMappingURL=FundButton.js.map
