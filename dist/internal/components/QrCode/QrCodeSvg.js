import { jsxDEV } from "react/jsx-dev-runtime";
import { useId, useMemo } from "react";
import { useTheme } from "../../hooks/useTheme.js";
import { ockThemeToLinearGradientColorMap, linearGradientStops, ockThemeToRadialGradientColorMap, presetGradients, QR_CODE_SIZE, GRADIENT_START_COORDINATES, GRADIENT_END_COORDINATES, QR_LOGO_SIZE, QR_LOGO_BACKGROUND_COLOR, QR_LOGO_RADIUS } from "./gradientConstants.js";
import { useCorners } from "./useCorners.js";
import { useDotsPath } from "./useDotsPath.js";
import { useLogo } from "./useLogo.js";
import { useMatrix } from "./useMatrix.js";
function coordinateAsPercentage(coordinate) {
  return `${coordinate * 100}%`;
}
function QrCodeSvg({
  value,
  size = QR_CODE_SIZE,
  backgroundColor = "#ffffff",
  logo,
  logoSize = QR_LOGO_SIZE,
  logoBackgroundColor = QR_LOGO_BACKGROUND_COLOR,
  logoMargin = 5,
  logoBorderRadius = QR_LOGO_RADIUS,
  quietZone = 12,
  quietZoneBorderRadius = 10,
  ecl = "Q",
  gradientType = "radial"
}) {
  const gradientRadius = size * 0.55;
  const gradientCenterPoint = size / 2;
  const uid = useId();
  const theme = useTheme();
  const themeName = theme.split("-")[0];
  const isRadialGradient = gradientType === "radial";
  const fillColor = isRadialGradient ? `url(#radialGrad-${uid})` : "#000000";
  const bgColor = isRadialGradient ? backgroundColor : `url(#linearGrad-${uid})`;
  const linearGradientColor = ockThemeToLinearGradientColorMap[themeName] ?? ockThemeToLinearGradientColorMap.default;
  const linearColors = [
    linearGradientStops[linearGradientColor].startColor,
    linearGradientStops[linearGradientColor].endColor
  ];
  const radialGradientColor = ockThemeToRadialGradientColorMap[themeName] ?? ockThemeToRadialGradientColorMap.default;
  const presetGradientForColor = presetGradients[radialGradientColor];
  const matrix = useMatrix(ecl, value);
  const corners = useCorners(size, matrix.length, bgColor, fillColor, uid);
  const { x: x1, y: y1 } = GRADIENT_START_COORDINATES;
  const { x: x2, y: y2 } = GRADIENT_END_COORDINATES;
  const viewBox = useMemo(() => {
    return [
      -quietZone,
      -quietZone,
      size + quietZone * 2,
      size + quietZone * 2
    ].join(" ");
  }, [quietZone, size]);
  const svgLogo = useLogo({
    size,
    logo,
    logoSize,
    logoBackgroundColor,
    logoMargin,
    logoBorderRadius
  });
  const path = useDotsPath({
    matrix,
    size,
    logoSize,
    logoMargin,
    logoBorderRadius,
    hasLogo: !!logo
  });
  if (!path || !value) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("svg", { viewBox, width: size, height: size, children: [
    /* @__PURE__ */ jsxDEV("title", { children: "QR Code" }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("defs", { children: isRadialGradient ? /* @__PURE__ */ jsxDEV(
      "radialGradient",
      {
        id: `radialGrad-${uid}`,
        "data-testid": "radialGrad",
        rx: gradientRadius,
        ry: gradientRadius,
        cx: gradientCenterPoint,
        cy: gradientCenterPoint,
        gradientUnits: "userSpaceOnUse",
        children: presetGradientForColor.map(([gradientColor, offset]) => /* @__PURE__ */ jsxDEV(
          "stop",
          {
            offset,
            stopColor: gradientColor,
            stopOpacity: 1
          },
          `${gradientColor}${offset}`,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
            lineNumber: 133,
            columnNumber: 15
          },
          this
        ))
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
        lineNumber: 123,
        columnNumber: 11
      },
      this
    ) : /* @__PURE__ */ jsxDEV(
      "linearGradient",
      {
        id: `linearGrad-${uid}`,
        "data-testid": "linearGrad",
        x1: coordinateAsPercentage(x1),
        y1: coordinateAsPercentage(y1),
        x2: coordinateAsPercentage(x2),
        y2: coordinateAsPercentage(y2),
        gradientUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ jsxDEV("stop", { offset: "0", stopColor: linearColors[0] }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
            lineNumber: 151,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("stop", { offset: "1", stopColor: linearColors[1] }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("g", { children: /* @__PURE__ */ jsxDEV(
      "rect",
      {
        rx: quietZoneBorderRadius,
        ry: quietZoneBorderRadius,
        x: -quietZone,
        y: -quietZone,
        width: size + quietZone * 2,
        height: size + quietZone * 2,
        fill: backgroundColor,
        stroke: bgColor,
        strokeWidth: 2
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
        lineNumber: 157,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("g", { children: [
      /* @__PURE__ */ jsxDEV(
        "path",
        {
          d: path,
          fill: fillColor,
          strokeLinecap: "butt",
          stroke: fillColor,
          strokeWidth: 0,
          opacity: 0.6
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
          lineNumber: 170,
          columnNumber: 9
        },
        this
      ),
      corners,
      svgLogo
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/QrCodeSvg.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
export {
  QrCodeSvg
};
//# sourceMappingURL=QrCodeSvg.js.map
