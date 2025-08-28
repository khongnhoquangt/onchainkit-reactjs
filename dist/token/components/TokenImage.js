'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useMemo } from "react";
import { cn } from "../../styles/theme.js";
import { getTokenImageColor } from "../utils/getTokenImageColor.js";
function TokenImage({ className, size = 24, token }) {
  const { image, name } = token;
  const styles = useMemo(() => {
    return {
      image: {
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`
      },
      placeholderImage: {
        background: getTokenImageColor(name),
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`
      }
    };
  }, [size, name]);
  if (!image) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn("overflow-hidden rounded-full", className),
        "data-testid": "ockTokenImage_NoImage",
        style: styles.image,
        children: /* @__PURE__ */ jsxDEV("div", { style: styles.placeholderImage }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenImage.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenImage.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "img",
    {
      className: cn("overflow-hidden rounded-[50%]", className),
      alt: "token-image",
      "data-testid": "ockTokenImage_Image",
      style: styles.image,
      src: image
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenImage.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}
export {
  TokenImage
};
//# sourceMappingURL=TokenImage.js.map
