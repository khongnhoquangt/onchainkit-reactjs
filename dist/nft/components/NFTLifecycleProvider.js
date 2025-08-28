import { jsxDEV } from "react/jsx-dev-runtime";
import { useLifecycleStatus } from "../../internal/hooks/useLifecycleStatus.js";
import { useValue } from "../../internal/hooks/useValue.js";
import { createContext, useContext, useEffect } from "react";
const emptyContext = {};
const NFTLifecycleContext = createContext(emptyContext);
function useNFTLifecycleContext() {
  const context = useContext(NFTLifecycleContext);
  if (context === emptyContext) {
    throw new Error(
      "useNFTLifecycleContext must be used within an NFTView or NFTMint component"
    );
  }
  return context;
}
function NFTLifecycleProvider({
  type,
  onStatus,
  onError,
  onSuccess,
  children
}) {
  const [lifecycleStatus, updateLifecycleStatus] = useLifecycleStatus({
    statusName: "init",
    statusData: null
  });
  useEffect(() => {
    var _a, _b;
    if (lifecycleStatus.statusName === "error") {
      onError == null ? void 0 : onError(lifecycleStatus.statusData);
    }
    if (lifecycleStatus.statusName === "success") {
      onSuccess == null ? void 0 : onSuccess((_b = (_a = lifecycleStatus.statusData) == null ? void 0 : _a.transactionReceipts) == null ? void 0 : _b[0]);
    }
    onStatus == null ? void 0 : onStatus(lifecycleStatus);
  }, [
    onError,
    onStatus,
    onSuccess,
    lifecycleStatus,
    lifecycleStatus.statusData,
    // Keep statusData, so that the effect runs when it changes
    lifecycleStatus.statusName
    // Keep statusName, so that the effect runs when it changes
  ]);
  const value = useValue({
    lifecycleStatus,
    type,
    updateLifecycleStatus
  });
  return /* @__PURE__ */ jsxDEV(NFTLifecycleContext.Provider, { value, children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTLifecycleProvider.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
export {
  NFTLifecycleContext,
  NFTLifecycleProvider,
  useNFTLifecycleContext
};
//# sourceMappingURL=NFTLifecycleProvider.js.map
