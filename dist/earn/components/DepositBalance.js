'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { getTruncatedAmount } from "../utils/getTruncatedAmount.js";
import { Skeleton } from "../../internal/components/Skeleton.js";
import { cn } from "../../styles/theme.js";
import { useCallback, useMemo } from "react";
import { useAccount } from "wagmi";
import { EarnBalance } from "./EarnBalance.js";
import { useEarnContext } from "./EarnProvider.js";
function DepositBalance({ className }) {
  const { address } = useAccount();
  const {
    setDepositAmount,
    vaultToken,
    walletBalance,
    walletBalanceStatus: status
  } = useEarnContext();
  const handleMaxPress = useCallback(() => {
    if (walletBalance) {
      setDepositAmount(walletBalance);
    }
  }, [walletBalance, setDepositAmount]);
  const balance = useMemo(() => {
    if (!walletBalance) {
      return "0";
    }
    return getTruncatedAmount(walletBalance.toString(), 6);
  }, [walletBalance]);
  const title = useMemo(() => {
    if (!address) {
      return "Wallet not connected";
    }
    if (!vaultToken) {
      return /* @__PURE__ */ jsxDEV(
        Skeleton,
        {
          className: cn("!bg-[var(--ock-bg-alternate-active)] h-6 w-24")
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/DepositBalance.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      );
    }
    if (status === "pending") {
      return /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxDEV(Skeleton, { className: "!bg-[var(--ock-bg-alternate-active)] h-6 w-12" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/DepositBalance.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: vaultToken == null ? void 0 : vaultToken.symbol }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/DepositBalance.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/DepositBalance.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this);
    }
    return `${balance} ${vaultToken == null ? void 0 : vaultToken.symbol}`;
  }, [balance, vaultToken, address, status]);
  const subtitle = useMemo(() => {
    if (!address) {
      return "Connect wallet to deposit";
    }
    return "Available to deposit";
  }, [address]);
  return /* @__PURE__ */ jsxDEV(
    EarnBalance,
    {
      className,
      title,
      subtitle,
      onActionPress: handleMaxPress,
      showAction: !!walletBalance
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/DepositBalance.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  );
}
export {
  DepositBalance
};
//# sourceMappingURL=DepositBalance.js.map
