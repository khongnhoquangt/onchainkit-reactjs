import { jsxDEV } from "react/jsx-dev-runtime";
import { useValue } from "../../internal/hooks/useValue.js";
import { useOnchainKit } from "../../useOnchainKit.js";
import { createContext, useContext } from "react";
const emptyContext = {};
const IdentityContext = createContext(emptyContext);
function useIdentityContext() {
  return useContext(IdentityContext);
}
function IdentityProvider(props) {
  const { chain: contextChain } = useOnchainKit();
  const accountChain = props.chain ?? contextChain;
  const value = useValue({
    address: props.address || "",
    chain: accountChain,
    schemaId: props.schemaId
  });
  return /* @__PURE__ */ jsxDEV(IdentityContext.Provider, { value, children: props.children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/IdentityProvider.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  IdentityContext,
  IdentityProvider,
  useIdentityContext
};
//# sourceMappingURL=IdentityProvider.js.map
