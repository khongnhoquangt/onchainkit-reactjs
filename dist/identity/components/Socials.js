'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useIdentityContext } from "./IdentityProvider.js";
import { useName } from "../hooks/useName.js";
import { useSocials } from "../hooks/useSocials.js";
import { cn, border } from "../../styles/theme.js";
import { GetSocialPlatformDetails } from "./getSocialPlatformDetails.js";
function Socials({ address, chain, className }) {
  const { address: contextAddress, chain: contextChain } = useIdentityContext();
  const accountAddress = address ?? contextAddress;
  const accountChain = chain ?? contextChain;
  if (!accountAddress) {
    console.error(
      "Socials: an Ethereum address must be provided to the Socials component."
    );
    return null;
  }
  const { data: name, isLoading: isLoadingName } = useName({
    address: accountAddress,
    chain: accountChain
  });
  const { data: socials, isLoading: isLoadingSocials } = useSocials(
    {
      ensName: name ?? "",
      chain: accountChain
    },
    { enabled: !!name }
  );
  if (isLoadingName || isLoadingSocials) {
    return /* @__PURE__ */ jsxDEV("span", { className }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Socials.tsx",
      lineNumber: 46,
      columnNumber: 12
    }, this);
  }
  if (!socials || Object.values(socials).every((value) => !value)) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn(border.default, "mt-2 w-full pl-1", className), children: /* @__PURE__ */ jsxDEV("div", { className: "left-4 flex space-x-2", children: Object.entries(socials).map(
    ([platform, value]) => value && /* @__PURE__ */ jsxDEV(
      GetSocialPlatformDetails,
      {
        platform,
        value
      },
      platform,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Socials.tsx",
        lineNumber: 59,
        columnNumber: 15
      },
      this
    )
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Socials.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Socials.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
export {
  Socials
};
//# sourceMappingURL=Socials.js.map
