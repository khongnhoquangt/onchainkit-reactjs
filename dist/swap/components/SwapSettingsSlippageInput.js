'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useAnalytics } from "../../core/analytics/hooks/useAnalytics.js";
import { SwapEvent } from "../../core/analytics/types.js";
import { useState, useCallback } from "react";
import { cn, color, background, pressable, border, text } from "../../styles/theme.js";
import { useSwapContext } from "./SwapProvider.js";
const SLIPPAGE_SETTINGS = {
  AUTO: "Auto",
  CUSTOM: "Custom"
};
function SwapSettingsSlippageInput({
  className
}) {
  const { sendAnalytics } = useAnalytics();
  const {
    config: { maxSlippage: defaultMaxSlippage },
    updateLifecycleStatus,
    lifecycleStatus
  } = useSwapContext();
  const [slippageSetting, setSlippageSetting] = useState(
    lifecycleStatus.statusData.maxSlippage === defaultMaxSlippage ? SLIPPAGE_SETTINGS.AUTO : SLIPPAGE_SETTINGS.CUSTOM
  );
  const handleAnalyticsSlippageChange = useCallback(
    (previousSlippage, newSlippage) => {
      sendAnalytics(SwapEvent.SlippageChanged, {
        previousSlippage,
        slippage: newSlippage
      });
    },
    [sendAnalytics]
  );
  const updateSlippage = useCallback(
    (newSlippage) => {
      const currentSlippage = lifecycleStatus.statusData.maxSlippage;
      if (newSlippage !== currentSlippage) {
        handleAnalyticsSlippageChange(currentSlippage, newSlippage);
        updateLifecycleStatus({
          statusName: "slippageChange",
          statusData: {
            maxSlippage: newSlippage
          }
        });
      }
    },
    [
      lifecycleStatus.statusData.maxSlippage,
      updateLifecycleStatus,
      handleAnalyticsSlippageChange
    ]
  );
  const handleSlippageChange = useCallback(
    (e) => {
      const newSlippage = e.target.value;
      const parsedSlippage = Number.parseFloat(newSlippage);
      const isValidNumber = !Number.isNaN(parsedSlippage);
      updateSlippage(isValidNumber ? parsedSlippage : 0);
    },
    [updateSlippage]
  );
  const handleSlippageSettingChange = useCallback(
    (setting) => {
      setSlippageSetting(setting);
      if (setting === SLIPPAGE_SETTINGS.AUTO) {
        updateSlippage(defaultMaxSlippage);
      }
    },
    [defaultMaxSlippage, updateSlippage]
  );
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      className: cn(
        background.default,
        border.defaultActive,
        border.radius,
        "flex items-center gap-2 flex-grow max-sm:pt-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV(
          "fieldset",
          {
            className: cn(
              background.default,
              border.defaultActive,
              border.radius,
              "flex h-9 flex-1 rounded-xl border p-1"
            ),
            children: [
              /* @__PURE__ */ jsxDEV("legend", { className: "sr-only", children: "Slippage Setting" }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
                lineNumber: 114,
                columnNumber: 9
              }, this),
              Object.values(SLIPPAGE_SETTINGS).map((setting) => /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  className: cn(
                    pressable.default,
                    color.foreground,
                    text.label1,
                    border.radiusInner,
                    "flex-1 px-3 py-1 transition-colors",
                    // Highlight the button if it is selected
                    slippageSetting === setting ? cn(background.inverse, color.primary, pressable.shadow) : color.foregroundMuted
                  ),
                  onClick: () => handleSlippageSettingChange(setting),
                  children: setting
                },
                setting,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
                  lineNumber: 116,
                  columnNumber: 11
                },
                this
              ))
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
            lineNumber: 106,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(
              background.default,
              border.defaultActive,
              border.radius,
              "flex h-9 w-24 items-center justify-between border px-2 py-1",
              slippageSetting === SLIPPAGE_SETTINGS.AUTO && "opacity-50"
            ),
            children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "slippage-input", className: "sr-only", children: "Slippage Percentage" }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
                lineNumber: 145,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  id: "slippage-input",
                  type: "text",
                  value: lifecycleStatus.statusData.maxSlippage,
                  onChange: handleSlippageChange,
                  disabled: slippageSetting === SLIPPAGE_SETTINGS.AUTO,
                  className: cn(
                    color.foreground,
                    text.label2,
                    "w-full flex-grow bg-transparent pl-1 font-normal leading-6 focus:outline-none",
                    slippageSetting === SLIPPAGE_SETTINGS.AUTO && "cursor-not-allowed"
                  )
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
                  lineNumber: 148,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: cn(
                    background.default,
                    color.foreground,
                    text.label2,
                    "ml-1 flex-shrink-0 font-normal leading-6"
                  ),
                  children: "%"
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
                  lineNumber: 161,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
            lineNumber: 136,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettingsSlippageInput.tsx",
      lineNumber: 97,
      columnNumber: 5
    },
    this
  );
}
export {
  SwapSettingsSlippageInput
};
//# sourceMappingURL=SwapSettingsSlippageInput.js.map
