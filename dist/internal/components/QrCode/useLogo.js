import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import { coinbaseWalletSvg } from "../../svg/coinbaseWalletSvg.js";
const defaultSvgString = ReactDOMServer.renderToString(coinbaseWalletSvg);
const defaultSvgDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  defaultSvgString
)}`;
function useLogo({
  size,
  logo = defaultSvgDataUri,
  logoSize,
  logoBackgroundColor,
  logoMargin,
  logoBorderRadius
}) {
  const svgLogo = useMemo(() => {
    const transformedLogo = React.isValidElement(logo) ? `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      ReactDOMServer.renderToString(logo)
    )}` : logo;
    const logoPosition = (size - logoSize - logoMargin * 2) / 2;
    const logoBackgroundSize = logoSize + logoMargin * 2;
    return /* @__PURE__ */ jsxDEV("g", { transform: `translate(${logoPosition}, ${logoPosition})`, children: [
      /* @__PURE__ */ jsxDEV("defs", { children: /* @__PURE__ */ jsxDEV("clipPath", { id: "clip-logo", children: /* @__PURE__ */ jsxDEV(
        "rect",
        {
          width: logoSize,
          height: logoSize,
          rx: logoBorderRadius,
          ry: logoBorderRadius
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
          lineNumber: 41,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("g", { children: /* @__PURE__ */ jsxDEV(
        "rect",
        {
          width: logoBackgroundSize,
          height: logoBackgroundSize,
          rx: logoBorderRadius,
          ry: logoBorderRadius,
          fill: logoBackgroundColor
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
          lineNumber: 50,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("g", { transform: `translate(${logoMargin}, ${logoMargin})`, children: /* @__PURE__ */ jsxDEV(
        "image",
        {
          "data-testid": "qr-code-logo",
          width: logoSize,
          height: logoSize,
          preserveAspectRatio: "xMidYMid slice",
          href: String(transformedLogo),
          clipPath: "url(#clip-logo)"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QrCode/useLogo.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this);
  }, [logo, logoBackgroundColor, logoBorderRadius, logoMargin, logoSize, size]);
  return svgLogo;
}
export {
  useLogo
};
//# sourceMappingURL=useLogo.js.map
