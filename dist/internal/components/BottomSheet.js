import { jsxDEV } from "react/jsx-dev-runtime";
import { DismissableLayer } from "./DismissableLayer.js";
import { FocusTrap } from "./FocusTrap.js";
import { useTheme } from "../hooks/useTheme.js";
import { zIndex } from "../../styles/constants.js";
import { cn, background } from "../../styles/theme.js";
import { createPortal } from "react-dom";
function BottomSheet({
  children,
  className,
  isOpen,
  onClose,
  triggerRef,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby
}) {
  const componentTheme = useTheme();
  if (!isOpen) {
    return null;
  }
  const bottomSheet = /* @__PURE__ */ jsxDEV("div", { "data-portal-origin": "true", children: /* @__PURE__ */ jsxDEV(FocusTrap, { active: isOpen, children: /* @__PURE__ */ jsxDEV(
    DismissableLayer,
    {
      onDismiss: onClose,
      triggerRef,
      preventTriggerEvents: !!triggerRef,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          "aria-describedby": ariaDescribedby,
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledby,
          "data-testid": "ockBottomSheet",
          role: "dialog",
          className: cn(
            componentTheme,
            background.default,
            zIndex.modal,
            "fixed right-0 bottom-0 left-0",
            "transform rounded-t-3xl p-2 transition-transform",
            "fade-in slide-in-from-bottom-1/2 animate-in",
            className
          ),
          children
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/BottomSheet.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/BottomSheet.tsx",
      lineNumber: 38,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/BottomSheet.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/BottomSheet.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
  return createPortal(bottomSheet, document.body);
}
export {
  BottomSheet
};
//# sourceMappingURL=BottomSheet.js.map
