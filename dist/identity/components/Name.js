'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useIdentityContext } from "./IdentityProvider.js";
import { useName } from "../hooks/useName.js";
import { getSlicedAddress } from "../utils/getSlicedAddress.js";
import { findComponent } from "../../internal/utils/findComponent.js";
import { useMemo, Children } from "react";
import { cn, color, text } from "../../styles/theme.js";
import { Badge } from "./Badge.js";
import { DisplayBadge } from "./DisplayBadge.js";
function Name({
  address = null,
  className,
  children,
  chain,
  ...props
}) {
  const { address: contextAddress, chain: contextChain } = useIdentityContext();
  if (!contextAddress && !address) {
    console.error(
      "Name: an Ethereum address must be provided to the Identity or Name component."
    );
    return null;
  }
  const accountAddress = address ?? contextAddress;
  const accountChain = chain ?? contextChain;
  const { data: name, isLoading } = useName({
    address: accountAddress,
    chain: accountChain
  });
  const badge = useMemo(() => {
    return Children.toArray(children).find(findComponent(Badge));
  }, [children]);
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("span", { className }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Name.tsx",
      lineNumber: 45,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxDEV(
      "span",
      {
        "data-testid": "ockIdentity_Text",
        className: cn(text.headline, color.foreground, className),
        ...props,
        children: name || getSlicedAddress(accountAddress)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Name.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    badge && /* @__PURE__ */ jsxDEV(DisplayBadge, { address: accountAddress, children: badge }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Name.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Name.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
export {
  Name
};
//# sourceMappingURL=Name.js.map
