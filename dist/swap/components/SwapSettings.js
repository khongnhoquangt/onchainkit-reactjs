import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { DismissableLayer } from "../../internal/components/DismissableLayer.js";
import { FocusTrap } from "../../internal/components/FocusTrap.js";
import { Popover } from "../../internal/components/Popover.js";
import { useBreakpoints } from "../../internal/hooks/useBreakpoints.js";
import { useIcon } from "../../internal/hooks/useIcon.js";
import { cn, text, pressable, background, border } from "../../styles/theme.js";
import { useState, useRef, useCallback } from "react";
import { SwapSettingsSlippageDescription } from "./SwapSettingsSlippageDescription.js";
import { SwapSettingsSlippageInput } from "./SwapSettingsSlippageInput.js";
import { SwapSettingsSlippageLayout } from "./SwapSettingsSlippageLayout.js";
import { SwapSettingsSlippageLayoutBottomSheet } from "./SwapSettingsSlippageLayoutBottomSheet.js";
import { SwapSettingsSlippageTitle } from "./SwapSettingsSlippageTitle.js";
const DEFAULT_CHILDREN = /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(SwapSettingsSlippageTitle, { children: "Max. slippage" }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(SwapSettingsSlippageDescription, { children: "Your swap will revert if the prices change by more than the selected percentage." }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(SwapSettingsSlippageInput, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
  lineNumber: 16,
  columnNumber: 3
}, void 0);
function SwapSettings({
  children = DEFAULT_CHILDREN,
  className,
  icon = "swapSettings",
  text: buttonText = ""
}) {
  const breakpoint = useBreakpoints();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const handleToggle = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const iconSvg = useIcon({ icon });
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex w-auto items-center justify-end space-x-1 pb-4",
        className
      ),
      "data-testid": "ockSwapSettings_Settings",
      children: [
        buttonText && /* @__PURE__ */ jsxDEV("span", { className: cn(text.body), children: buttonText }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
          lineNumber: 56,
          columnNumber: 22
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: cn("relative", isOpen && "group"), ref: dropdownRef, children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              ref: triggerRef,
              type: "button",
              "aria-label": "Toggle swap settings",
              className: cn(
                pressable.default,
                "rounded-full p-2 opacity-50 transition-opacity hover:opacity-100"
              ),
              onClick: handleToggle,
              children: /* @__PURE__ */ jsxDEV("div", { className: "h-[1.125rem] w-[1.125rem]", children: iconSvg }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
                lineNumber: 68,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
              lineNumber: 58,
              columnNumber: 9
            },
            this
          ),
          breakpoint === "sm" ? /* @__PURE__ */ jsxDEV(FocusTrap, { active: isOpen, children: /* @__PURE__ */ jsxDEV(
            DismissableLayer,
            {
              onDismiss: handleClose,
              triggerRef,
              preventTriggerEvents: true,
              children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: cn(
                    background.inverse,
                    pressable.shadow,
                    "fixed inset-x-0 z-50 transition-[bottom] duration-300 ease-in-out",
                    isOpen ? "bottom-0" : "-bottom-[12.875rem]",
                    "h-[12.875rem] rounded-t-lg",
                    className
                  ),
                  "data-testid": "ockSwapSettingsSlippageLayoutBottomSheet_container",
                  children: /* @__PURE__ */ jsxDEV(SwapSettingsSlippageLayoutBottomSheet, { className, children }, void 0, false, {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
                  lineNumber: 77,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
              lineNumber: 72,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV(
            Popover,
            {
              isOpen,
              onClose: handleClose,
              anchor: dropdownRef.current,
              position: "bottom",
              align: "end",
              trigger: triggerRef,
              children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: cn(
                    border.radius,
                    background.default,
                    pressable.shadow,
                    "absolute right-0 z-10 mt-1 w-[21.75rem] rounded-lg"
                  ),
                  "data-testid": "ockSwapSettingsDropdown",
                  children: /* @__PURE__ */ jsxDEV(SwapSettingsSlippageLayout, { children }, void 0, false, {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
                    lineNumber: 112,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
                  lineNumber: 103,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
              lineNumber: 95,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapSettings.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}
export {
  SwapSettings
};
//# sourceMappingURL=SwapSettings.js.map
