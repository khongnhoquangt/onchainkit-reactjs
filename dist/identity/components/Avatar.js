'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useIdentityContext } from "./IdentityProvider.js";
import { useAvatar } from "../hooks/useAvatar.js";
import { useName } from "../hooks/useName.js";
import { findComponent } from "../../internal/utils/findComponent.js";
import { useMemo, Children } from "react";
import { defaultAvatarSVG } from "../../internal/svg/defaultAvatarSVG.js";
import { defaultLoadingSVG } from "../../internal/svg/defaultLoadingSVG.js";
import { cn, border } from "../../styles/theme.js";
import { Badge } from "./Badge.js";
import { DisplayBadge } from "./DisplayBadge.js";
function Avatar({
  address = null,
  chain,
  className,
  defaultComponent,
  loadingComponent,
  children,
  ...props
}) {
  const { address: contextAddress, chain: contextChain } = useIdentityContext();
  const accountAddress = address ?? contextAddress;
  const accountChain = chain ?? contextChain;
  if (!accountAddress) {
    console.error(
      "Avatar: an Ethereum address must be provided to the Identity or Avatar component."
    );
    return null;
  }
  const { data: name, isLoading: isLoadingName } = useName({
    address: accountAddress,
    chain: accountChain
  });
  const { data: avatar, isLoading: isLoadingAvatar } = useAvatar(
    { ensName: name ?? "", chain: accountChain },
    { enabled: !!name }
  );
  const badge = useMemo(() => {
    return Children.toArray(children).find(findComponent(Badge));
  }, [children]);
  const defaultAvatar = defaultComponent || defaultAvatarSVG;
  const loadingAvatar = loadingComponent || defaultLoadingSVG;
  if (isLoadingName || isLoadingAvatar) {
    return /* @__PURE__ */ jsxDEV("div", { className: cn("h-8 w-8 overflow-hidden rounded-full", className), children: loadingAvatar }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this);
  }
  const displayAvatarImg = name && avatar;
  return /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        "data-testid": "ockAvatar_ImageContainer",
        className: cn("h-10 w-10 overflow-hidden rounded-full", className),
        children: displayAvatarImg ? /* @__PURE__ */ jsxDEV(
          "img",
          {
            className: "min-h-full min-w-full object-cover",
            "data-testid": "ockAvatar_Image",
            loading: "lazy",
            width: "100%",
            height: "100%",
            decoding: "async",
            src: avatar,
            alt: name,
            ...props
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        ) : /* @__PURE__ */ jsxDEV("div", { className: cn(border.default, "h-full w-full border"), children: defaultAvatar }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
        lineNumber: 74,
        columnNumber: 7
      },
      this
    ),
    badge && /* @__PURE__ */ jsxDEV(DisplayBadge, { address: accountAddress, children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        "data-testid": "ockAvatar_BadgeContainer",
        className: "-bottom-0.5 -right-0.5 absolute flex h-[15px] w-[15px] items-center justify-center rounded-full bg-transparent",
        children: /* @__PURE__ */ jsxDEV("div", { className: "flex h-3 w-3 items-center justify-center", children: badge }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
        lineNumber: 98,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Avatar.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
export {
  Avatar
};
//# sourceMappingURL=Avatar.js.map
