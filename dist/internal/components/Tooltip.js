import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { infoSvg } from "../svg/infoSvg.js";
import { cn, border, text, background } from "../../styles/theme.js";
import { useState, useCallback } from "react";
function Tooltip({ children = infoSvg, content }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const showOverlay = useCallback(() => {
    setIsOverlayVisible(true);
  }, []);
  const hideOverlay = useCallback(() => {
    setIsOverlayVisible(false);
  }, []);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        "data-testid": "ockBuyApplePayInfo",
        className: cn("h-2.5 w-2.5 cursor-pointer object-cover"),
        onMouseEnter: showOverlay,
        onMouseLeave: hideOverlay,
        children
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Tooltip.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    isOverlayVisible && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn(
          "absolute top-0 right-0 flex translate-x-[100%] translate-y-[-100%]",
          "whitespace-nowrap p-2",
          border.radius,
          background.inverse,
          text.legal,
          border.lineDefault
        ),
        children: content
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Tooltip.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Tooltip.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  Tooltip
};
//# sourceMappingURL=Tooltip.js.map
