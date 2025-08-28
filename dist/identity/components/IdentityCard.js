'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Address } from "./Address.js";
import { Avatar } from "./Avatar.js";
import { Badge } from "./Badge.js";
import { Identity } from "./Identity.js";
import { Name } from "./Name.js";
import { Socials } from "./Socials.js";
import { cn, background, border } from "../../styles/theme.js";
function IdentityCard({
  address,
  chain,
  className = "",
  schemaId,
  badgeTooltip
}) {
  return /* @__PURE__ */ jsxDEV(
    Identity,
    {
      address,
      chain,
      className: cn(
        border.radius,
        border.lineDefault,
        background.default,
        "items-left flex min-w-[300px] p-4",
        className
      ),
      schemaId,
      children: [
        /* @__PURE__ */ jsxDEV(Avatar, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityCard.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Name, { children: /* @__PURE__ */ jsxDEV(Badge, { tooltip: badgeTooltip }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityCard.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityCard.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Address, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityCard.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Socials, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityCard.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityCard.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
export {
  IdentityCard
};
//# sourceMappingURL=IdentityCard.js.map
