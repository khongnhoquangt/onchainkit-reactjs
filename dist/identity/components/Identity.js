'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { IdentityLayout } from "./IdentityLayout.js";
import { IdentityProvider } from "./IdentityProvider.js";
import { useOnchainKit } from "../../useOnchainKit.js";
import { useAccount } from "wagmi";
function Identity({
  address: addressProp,
  chain,
  children,
  className,
  hasCopyAddressOnClick,
  schemaId
}) {
  const { chain: contextChain } = useOnchainKit();
  const accountChain = chain ?? contextChain;
  const { address } = useAccount();
  if (!address && !addressProp) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    IdentityProvider,
    {
      address: addressProp || address,
      schemaId,
      chain: accountChain,
      children: /* @__PURE__ */ jsxDEV(
        IdentityLayout,
        {
          className,
          hasCopyAddressOnClick,
          children
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Identity.tsx",
          lineNumber: 30,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Identity.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}
export {
  Identity
};
//# sourceMappingURL=Identity.js.map
