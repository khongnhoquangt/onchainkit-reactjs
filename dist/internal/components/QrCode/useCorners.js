import { jsxDEV } from "react/jsx-dev-runtime";
import { useMemo } from "react";
import { CORNER_SIZE } from "./useDotsPath.js";
function useCorners(size, matrixLength, backgroundColor, fillColor, uid) {
  const dotSize = size / matrixLength;
  const rectSize = dotSize * CORNER_SIZE;
  const circleRadius = dotSize * 2;
  const circleStrokeWidth = dotSize + 1;
  const corners = useMemo(
    () => /* @__PURE__ */ jsxDEV("g", { children: [
      /* @__PURE__ */ jsxDEV(
        "rect",
        {
          x: 0,
          y: 0,
          rx: 9.5,
          ry: 9.5,
          width: rectSize,
          height: rectSize,
          fill: fillColor,
          id: `Corner-top-left-${uid}`
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useCorners.tsx",
          lineNumber: 18,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "rect",
        {
          x: 0,
          y: size - rectSize,
          rx: 9.5,
          ry: 9.5,
          width: rectSize,
          height: rectSize,
          fill: fillColor,
          id: `Corner-bottom-left-${uid}`
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useCorners.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "rect",
        {
          x: size - rectSize,
          y: 0,
          rx: 9.5,
          ry: 9.5,
          width: rectSize,
          height: rectSize,
          fill: fillColor,
          id: `Corner-top-right-${uid}`
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useCorners.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "circle",
        {
          cx: rectSize / 2,
          cy: rectSize / 2,
          r: circleRadius,
          stroke: backgroundColor,
          strokeWidth: circleStrokeWidth,
          fill: "none"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useCorners.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "circle",
        {
          cx: rectSize / 2,
          cy: size - rectSize / 2,
          r: circleRadius,
          stroke: backgroundColor,
          strokeWidth: circleStrokeWidth,
          fill: "none"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useCorners.tsx",
          lineNumber: 56,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "circle",
        {
          cx: size - rectSize / 2,
          cy: rectSize / 2,
          r: circleRadius,
          stroke: backgroundColor,
          strokeWidth: circleStrokeWidth,
          fill: "none"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useCorners.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useCorners.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    [
      backgroundColor,
      circleRadius,
      circleStrokeWidth,
      fillColor,
      rectSize,
      size,
      uid
    ]
  );
  return corners;
}
export {
  useCorners
};
//# sourceMappingURL=useCorners.js.map
