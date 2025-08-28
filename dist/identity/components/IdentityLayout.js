import { jsxDEV } from "react/jsx-dev-runtime";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { findComponent } from "../../internal/utils/findComponent.js";
import { cn, color, background } from "../../styles/theme.js";
import { useMemo, Children, cloneElement } from "react";
import { Address } from "./Address.js";
import { Avatar } from "./Avatar.js";
import { EthBalance } from "./EthBalance.js";
import { Name } from "./Name.js";
import { Socials } from "./Socials.js";
function IdentityLayout({
  children,
  className,
  hasCopyAddressOnClick
}) {
  const componentTheme = useTheme();
  const {
    avatar,
    name,
    address: addressComponent,
    ethBalance,
    socials
  } = useMemo(() => {
    const childrenArray = Children.toArray(children);
    const addressElement = childrenArray.find(findComponent(Address));
    return {
      avatar: childrenArray.find(findComponent(Avatar)),
      name: childrenArray.find(findComponent(Name)),
      address: addressElement ? cloneElement(addressElement, { hasCopyAddressOnClick }) : void 0,
      ethBalance: childrenArray.find(findComponent(EthBalance)),
      socials: childrenArray.find(findComponent(Socials))
    };
  }, [children, hasCopyAddressOnClick]);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        componentTheme,
        background.default,
        "flex flex-col px-4 py-1",
        className
      ),
      "data-testid": "ockIdentityLayout_container",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0", children: avatar }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityLayout.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
            name,
            addressComponent && !ethBalance && addressComponent,
            !addressComponent && ethBalance && ethBalance,
            addressComponent && ethBalance && /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
              addressComponent,
              /* @__PURE__ */ jsxDEV("span", { className: color.foregroundMuted, children: "·" }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityLayout.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this),
              ethBalance
            ] }, void 0, true, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityLayout.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityLayout.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityLayout.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this),
        socials
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityLayout.tsx",
      lineNumber: 46,
      columnNumber: 5
    },
    this
  );
}
export {
  IdentityLayout
};
//# sourceMappingURL=IdentityLayout.js.map
