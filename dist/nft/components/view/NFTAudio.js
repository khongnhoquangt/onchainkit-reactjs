import { jsxDEV } from "react/jsx-dev-runtime";
import { useNFTContext } from "../NFTProvider.js";
import { useRef, useState, useEffect, useCallback } from "react";
import { cn, background } from "../../../styles/theme.js";
function NFTAudio({
  className,
  onLoading,
  onLoaded,
  onError
}) {
  const { animationUrl } = useNFTContext();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    function onEnded() {
      setIsPlaying(false);
    }
    if (animationUrl && (audioRef == null ? void 0 : audioRef.current)) {
      audioRef.current.onloadstart = () => {
        onLoading == null ? void 0 : onLoading(animationUrl);
      };
      audioRef.current.onloadeddata = () => {
        onLoaded == null ? void 0 : onLoaded();
      };
      audioRef.current.addEventListener("ended", onEnded);
      audioRef.current.onerror = (error) => {
        onError == null ? void 0 : onError({
          error: typeof error === "string" ? error : error.type,
          code: "NmNAc01",
          // NFT module NFTAudio component 01 error
          message: "Error loading audio"
        });
      };
    }
  }, [animationUrl, onLoading, onLoaded, onError]);
  const handlePlayPause = useCallback(
    (event) => {
      var _a, _b;
      event.stopPropagation();
      if (isPlaying) {
        (_a = audioRef.current) == null ? void 0 : _a.pause();
        setIsPlaying(false);
      } else {
        (_b = audioRef.current) == null ? void 0 : _b.play();
        setIsPlaying(true);
      }
    },
    [isPlaying]
  );
  if (!animationUrl) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn("max-h-350 w-350 max-w-350", className), children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        className: cn(
          background.reverse,
          "ml-6 inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full"
        ),
        onClick: handlePlayPause,
        children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(
              "ml-px box-border h-[18px] transition-all ease-[100ms] will-change-[border-width]",
              "border-[var(--ock-bg-default-reverse)] border-l-[var(--ock-bg-default)]",
              {
                "border-[length:0_0_0_16px] border-double": isPlaying,
                "-mr-px border-[length:9px_0_9px_16px] border-solid": !isPlaying
              }
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTAudio.tsx",
            lineNumber: 83,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTAudio.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "audio",
      {
        ref: audioRef,
        "data-testid": "ockNFTAudio",
        autoPlay: false,
        controls: false,
        src: animationUrl,
        children: /* @__PURE__ */ jsxDEV("track", { kind: "captions" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTAudio.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTAudio.tsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/view/NFTAudio.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
export {
  NFTAudio
};
//# sourceMappingURL=NFTAudio.js.map
