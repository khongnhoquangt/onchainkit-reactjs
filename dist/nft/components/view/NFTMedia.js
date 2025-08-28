import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTLifecycleContext } from "../NFTLifecycleProvider.js";
import { useNFTContext } from "../NFTProvider.js";
import { MediaType, LifecycleType } from "../../types.js";
import { useMemo, useCallback } from "react";
import { cn } from "../../../styles/theme.js";
import { NFTAudio } from "./NFTAudio.js";
import { NFTImage } from "./NFTImage.js";
import { NFTVideo } from "./NFTVideo.js";
function NFTMedia({ className, square }) {
  const { mimeType } = useNFTContext();
  const { type, updateLifecycleStatus } = useNFTLifecycleContext();
  const mediaType = useMemo(() => {
    if (mimeType == null ? void 0 : mimeType.startsWith("video")) {
      return MediaType.Video;
    }
    if (mimeType == null ? void 0 : mimeType.startsWith("audio")) {
      return MediaType.Audio;
    }
    if (mimeType == null ? void 0 : mimeType.startsWith("image")) {
      return MediaType.Image;
    }
    return MediaType.Unknown;
  }, [mimeType]);
  const handleLoading = useCallback(
    (mediaUrl) => {
      updateLifecycleStatus({
        statusName: "mediaLoading",
        statusData: {
          mediaType,
          mediaUrl
        }
      });
    },
    [mediaType, updateLifecycleStatus]
  );
  const handleLoaded = useCallback(() => {
    updateLifecycleStatus({
      statusName: type === LifecycleType.MINT ? "mediaLoaded" : "success"
    });
  }, [type, updateLifecycleStatus]);
  const handleError = useCallback(
    (error) => {
      updateLifecycleStatus({
        statusName: "error",
        statusData: error
      });
    },
    [updateLifecycleStatus]
  );
  const media = useMemo(() => {
    switch (mediaType) {
      case MediaType.Video:
        return /* @__PURE__ */ jsxDEV(
          NFTVideo,
          {
            square,
            onLoading: handleLoading,
            onLoaded: handleLoaded,
            onError: handleError
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMedia.tsx",
            lineNumber: 67,
            columnNumber: 11
          },
          this
        );
      case MediaType.Audio:
        return /* @__PURE__ */ jsxDEV("div", { className: "relative w-full", children: [
          /* @__PURE__ */ jsxDEV(NFTImage, { square }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMedia.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 mx-auto w-full", children: /* @__PURE__ */ jsxDEV(NFTAudio, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMedia.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMedia.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMedia.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV(
          NFTImage,
          {
            square,
            onLoading: handleLoading,
            onLoaded: handleLoaded,
            onError: handleError
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMedia.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        );
    }
  }, [handleError, handleLoaded, handleLoading, mediaType, square]);
  return /* @__PURE__ */ jsxDEV("div", { className: cn("pb-2", className), children: media }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTMedia.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
export {
  NFTMedia
};
//# sourceMappingURL=NFTMedia.js.map
