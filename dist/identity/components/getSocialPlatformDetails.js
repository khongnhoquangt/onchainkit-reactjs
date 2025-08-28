import { jsxDEV } from "react/jsx-dev-runtime";
import { githubSvg } from "../../internal/svg/githubSvg.js";
import { twitterSvg } from "../../internal/svg/twitterSvg.js";
import { warpcastSvg } from "../../internal/svg/warpcastSvg.js";
import { websiteSvg } from "../../internal/svg/websiteSvg.js";
import { cn, border, pressable } from "../../styles/theme.js";
const PLATFORM_CONFIG = {
  twitter: {
    href: (value) => `https://x.com/${value}`,
    icon: twitterSvg
  },
  github: {
    href: (value) => `https://github.com/${value}`,
    icon: githubSvg
  },
  farcaster: {
    href: (value) => {
      const username = value.split("/").pop();
      return `https://warpcast.com/${username}`;
    },
    icon: warpcastSvg
  },
  website: {
    href: (value) => value,
    icon: websiteSvg
  }
};
function GetSocialPlatformDetails({
  platform,
  value
}) {
  const config = PLATFORM_CONFIG[platform];
  return /* @__PURE__ */ jsxDEV(
    "a",
    {
      href: config.href(value),
      target: "_blank",
      rel: "noopener noreferrer",
      className: cn(
        pressable.default,
        border.radius,
        border.default,
        "flex items-center justify-center p-2"
      ),
      "data-testid": `ockSocials_${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: platform }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/getSocialPlatformDetails.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: cn("flex h-4 w-4 items-center justify-center"), children: config.icon }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/getSocialPlatformDetails.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/getSocialPlatformDetails.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
}
export {
  GetSocialPlatformDetails,
  PLATFORM_CONFIG
};
//# sourceMappingURL=getSocialPlatformDetails.js.map
