import { jsxDEV } from "react/jsx-dev-runtime";
import { createContext, useContext, useState, useCallback } from "react";
import { useValue } from "../../internal/hooks/useValue.js";
const emptyContext = {};
const NFTContext = createContext(emptyContext);
function useNFTContext() {
  const context = useContext(NFTContext);
  if (context === emptyContext) {
    throw new Error(
      "useNFTContext must be used within an NFTView or NFTMint component"
    );
  }
  return context;
}
function NFTProvider({
  children,
  contractAddress,
  tokenId,
  isSponsored,
  useNFTData,
  buildMintTransaction
}) {
  const [quantity, setQuantity] = useState(1);
  const nftData = useNFTData(contractAddress, tokenId);
  const handleSetQuantity = useCallback((quantity2) => {
    setQuantity(Number.parseInt(quantity2, 10));
  }, []);
  const value = useValue({
    contractAddress,
    tokenId,
    isSponsored,
    quantity,
    setQuantity: handleSetQuantity,
    buildMintTransaction,
    ...nftData
  });
  return /* @__PURE__ */ jsxDEV(NFTContext.Provider, { value, children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTProvider.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
export {
  NFTContext,
  NFTProvider,
  useNFTContext
};
//# sourceMappingURL=NFTProvider.js.map
