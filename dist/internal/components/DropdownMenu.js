import { jsxDEV } from "react/jsx-dev-runtime";
import { useTheme } from "../hooks/useTheme.js";
import { getHorizontalPosition } from "../utils/getHorizontalPosition.js";
import { zIndex } from "../../styles/constants.js";
import { cn } from "../../styles/theme.js";
import { useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { DismissableLayer } from "./DismissableLayer.js";
import { FocusTrap } from "./FocusTrap.js";
function DropdownMenu({
  align = "start",
  children,
  isOpen,
  offset = 8,
  onClose,
  trigger,
  "aria-label": ariaLabel
}) {
  const componentTheme = useTheme();
  const contentRef = useRef(null);
  const updatePosition = useCallback(() => {
    if (!(trigger == null ? void 0 : trigger.current) || !contentRef.current) {
      return;
    }
    const triggerRect = trigger.current.getBoundingClientRect();
    const menuRect = contentRef.current.getBoundingClientRect();
    if (!triggerRect || !menuRect) {
      return;
    }
    const left = getHorizontalPosition({
      triggerRect,
      contentRect: menuRect,
      align
    });
    contentRef.current.style.top = `${triggerRect.bottom + offset}px`;
    contentRef.current.style.left = `${left}px`;
  }, [trigger, offset, align]);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isOpen, updatePosition]);
  if (!isOpen) {
    return null;
  }
  const dropdownMenu = /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        componentTheme,
        zIndex.dropdown,
        "pointer-events-none fixed"
      ),
      "data-portal-origin": "true",
      children: /* @__PURE__ */ jsxDEV(FocusTrap, { active: isOpen, children: /* @__PURE__ */ jsxDEV(DismissableLayer, { onDismiss: onClose, triggerRef: trigger, children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          ref: contentRef,
          className: cn("pointer-events-auto fixed"),
          role: "listbox",
          "data-testid": "ockDropdownMenu",
          "aria-label": ariaLabel,
          children
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/DropdownMenu.tsx",
          lineNumber: 98,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/DropdownMenu.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/DropdownMenu.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/DropdownMenu.tsx",
      lineNumber: 88,
      columnNumber: 5
    },
    this
  );
  return createPortal(dropdownMenu, document.body);
}
export {
  DropdownMenu
};
//# sourceMappingURL=DropdownMenu.js.map
