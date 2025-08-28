import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTContext } from "../NFTProvider.js";
import { useState, useCallback, useEffect } from "react";
import { defaultNFTSvg } from "../../../internal/svg/defaultNFTSvg.js";
import { cn } from "../../../styles/theme.js";
function NFTImage({
  className,
  square = true,
  onLoading,
  onLoaded,
  onError
}) {
  const { imageUrl, description } = useNFTContext();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const loadImage = useCallback(() => {
    if (imageUrl) {
      onLoading == null ? void 0 : onLoading(imageUrl);
      const img = new Image();
      img.onload = () => {
        setLoaded(true);
        onLoaded == null ? void 0 : onLoaded();
      };
      img.onerror = (error2) => {
        onError == null ? void 0 : onError({
          error: typeof error2 === "string" ? error2 : error2.type,
          code: "NmNIc01",
          // NFT module NFTImage component 01 error
          message: "Error loading image"
        });
        setError(true);
      };
      img.src = imageUrl;
    }
  }, [imageUrl, onLoading, onLoaded, onError]);
  useEffect(() => {
    loadImage();
  }, [loadImage]);
  const handleRetry = useCallback(
    async (e) => {
      e.stopPropagation();
      setError(false);
      loadImage();
    },
    [loadImage]
  );
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "grid w-full",
        "[&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1",
        { "aspect-square": square },
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center", children: defaultNFTSvg }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTImage.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(
              "grid h-full w-full content-center justify-center overflow-hidden",
              { "aspect-square": square }
            ),
            children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                "data-testid": "ockNFTImage",
                src: imageUrl,
                alt: description,
                decoding: "async",
                className: cn(
                  "transition-opacity duration-500 ease-in-out",
                  loaded ? "opacity-100" : "opacity-0",
                  { "h-full w-full object-cover": square }
                )
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTImage.tsx",
                lineNumber: 77,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTImage.tsx",
            lineNumber: 71,
            columnNumber: 7
          },
          this
        ),
        error && /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("button", { type: "button", onClick: handleRetry, className: "z-10 mt-[60%]", children: "retry" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTImage.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTImage.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTImage.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTImage
};
//# sourceMappingURL=NFTImage.js.map
