import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTContext } from "../NFTProvider.js";
import { useRef, useEffect, useCallback } from "react";
import { defaultNFTSvg } from "../../../internal/svg/defaultNFTSvg.js";
import { cn } from "../../../styles/theme.js";
function NFTVideo({
  className,
  square = true,
  onLoading,
  onLoaded,
  onError
}) {
  const { animationUrl, imageUrl } = useNFTContext();
  const videoRef = useRef(null);
  useEffect(() => {
    if (animationUrl && (videoRef == null ? void 0 : videoRef.current)) {
      videoRef.current.onloadstart = () => {
        onLoading == null ? void 0 : onLoading(animationUrl);
      };
      videoRef.current.onloadeddata = () => {
        onLoaded == null ? void 0 : onLoaded();
      };
      videoRef.current.onerror = (error) => {
        onError == null ? void 0 : onError({
          error: typeof error === "string" ? error : error.type,
          code: "NmNVc01",
          // NFT module NFTVideo component 01 error
          message: "Error loading video"
        });
      };
    }
  }, [animationUrl, onLoading, onLoaded, onError]);
  const handleClick = useCallback((e) => {
    e.stopPropagation();
  }, []);
  if (!animationUrl) {
    return /* @__PURE__ */ jsxDEV("div", { className: "max-h-350 w-350 max-w-350", children: defaultNFTSvg }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTVideo.tsx",
      lineNumber: 50,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "grid w-full",
        "[&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1",
        { "content-center justify-center": !square },
        { "aspect-square": square },
        className
      ),
      children: /* @__PURE__ */ jsxDEV(
        "video",
        {
          ref: videoRef,
          "data-testid": "ockNFTVideo",
          onClick: handleClick,
          className: cn({ "h-full w-full object-cover aspect-square": square }),
          poster: imageUrl,
          controls: true,
          loop: true,
          src: animationUrl,
          muted: true,
          autoPlay: true,
          playsInline: true,
          draggable: false,
          width: "100%"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTVideo.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTVideo.tsx",
      lineNumber: 54,
      columnNumber: 5
    },
    this
  );
}
export {
  NFTVideo
};
//# sourceMappingURL=NFTVideo.js.map
