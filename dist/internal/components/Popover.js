import { jsxDEV } from "react/jsx-dev-runtime";
import { useTheme } from "../hooks/useTheme.js";
import { zIndex } from "../../styles/constants.js";
import { cn } from "../../styles/theme.js";
import { useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { DismissableLayer } from "./DismissableLayer.js";
import { FocusTrap } from "./FocusTrap.js";
function getInitialPosition(triggerRect, contentRect, position, offset) {
  let top = 0;
  let left = 0;
  switch (position) {
    case "top":
      top = triggerRect.top - contentRect.height - offset;
      break;
    case "bottom":
      top = triggerRect.bottom + offset;
      break;
    case "left":
      left = triggerRect.left - contentRect.width - offset;
      break;
    case "right":
      left = triggerRect.right + offset;
      break;
  }
  return { top, left };
}
function adjustAlignment(triggerRect, contentRect, initialPosition, align, position) {
  const { top: initialTop, left: initialLeft } = initialPosition;
  let top = initialTop;
  let left = initialLeft;
  const isVerticalPosition = position === "top" || position === "bottom";
  switch (align) {
    case "start":
      if (isVerticalPosition) {
        left = triggerRect.left;
      } else {
        top = triggerRect.top;
      }
      break;
    case "center":
      if (isVerticalPosition) {
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
      } else {
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
      }
      break;
    case "end":
      if (isVerticalPosition) {
        left = triggerRect.right - contentRect.width;
      } else {
        top = triggerRect.bottom - contentRect.height;
      }
      break;
  }
  return { top, left };
}
function Popover({
  children,
  anchor,
  isOpen,
  onClose,
  position = "bottom",
  align = "center",
  offset = 8,
  trigger,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby
}) {
  const contentRef = useRef(null);
  const componentTheme = useTheme();
  const updatePosition = useCallback(() => {
    var _a;
    if (!anchor || !contentRef.current) {
      return;
    }
    const triggerRect = anchor.getBoundingClientRect();
    const contentRect = (_a = contentRef.current) == null ? void 0 : _a.getBoundingClientRect();
    if (!triggerRect || !contentRect) {
      return;
    }
    const initialPosition = getInitialPosition(
      triggerRect,
      contentRect,
      position,
      offset
    );
    const finalPosition = adjustAlignment(
      triggerRect,
      contentRect,
      initialPosition,
      align,
      position
    );
    contentRef.current.style.top = `${finalPosition.top}px`;
    contentRef.current.style.left = `${finalPosition.left}px`;
  }, [anchor, position, offset, align]);
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
  const popover = /* @__PURE__ */ jsxDEV(
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
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledby,
          "aria-describedby": ariaDescribedby,
          className: cn("pointer-events-auto fixed"),
          "data-testid": "ockPopover",
          ref: contentRef,
          role: "dialog",
          children
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Popover.tsx",
          lineNumber: 183,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Popover.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Popover.tsx",
        lineNumber: 181,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Popover.tsx",
      lineNumber: 173,
      columnNumber: 5
    },
    this
  );
  return createPortal(popover, document.body);
}
export {
  Popover
};
//# sourceMappingURL=Popover.js.map
