'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { cn } from "../../styles/theme.js";
import { WalletAdvancedAddressDetails } from "./WalletAdvancedAddressDetails.js";
import { WalletAdvancedTokenHoldings } from "./WalletAdvancedTokenHoldings.js";
import { WalletAdvancedTransactionActions } from "./WalletAdvancedTransactionActions.js";
import { WalletAdvancedWalletActions } from "./WalletAdvancedWalletActions.js";
import { WalletDropdownContent } from "./WalletDropdownContent.js";
import { useWalletContext } from "./WalletProvider.js";
const defaultWalletAdvancedChildren = /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(WalletAdvancedWalletActions, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvanced.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(WalletAdvancedAddressDetails, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvanced.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(WalletAdvancedTransactionActions, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvanced.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(WalletAdvancedTokenHoldings, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvanced.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvanced.tsx",
  lineNumber: 13,
  columnNumber: 3
}, void 0);
function WalletAdvanced({
  children,
  classNames,
  swappableTokens
}) {
  const { isSubComponentOpen, showSubComponentAbove, alignSubComponentRight } = useWalletContext();
  if (!isSubComponentOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockWalletAdvancedContainer",
      className: cn(
        "absolute",
        showSubComponentAbove ? "bottom-full" : "top-full",
        alignSubComponentRight ? "right-0" : "left-0"
      ),
      children: /* @__PURE__ */ jsxDEV(
        WalletDropdownContent,
        {
          classNames,
          swappableTokens,
          children: children || defaultWalletAdvancedChildren
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvanced.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletAdvanced.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletAdvanced
};
//# sourceMappingURL=WalletAdvanced.js.map
