'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useIdentityContext } from "./IdentityProvider.js";
import { getRoundedAmount } from "../../internal/utils/getRoundedAmount.js";
import { cn, color, text } from "../../styles/theme.js";
import { useGetETHBalance } from "../../wallet/hooks/useGetETHBalance.js";
function EthBalance({ address, className }) {
  const { address: contextAddress } = useIdentityContext();
  if (!contextAddress && !address) {
    console.error(
      "Address: an Ethereum address must be provided to the Identity or EthBalance component."
    );
    return null;
  }
  const { convertedBalance: balance, error } = useGetETHBalance(
    address ?? contextAddress
  );
  if (!balance || error) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "span",
    {
      "data-testid": "ockEthBalance",
      className: cn(text.label2, color.foregroundMuted, className),
      children: [
        getRoundedAmount(balance, 4),
        " ETH"
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/EthBalance.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
export {
  EthBalance
};
//# sourceMappingURL=EthBalance.js.map
