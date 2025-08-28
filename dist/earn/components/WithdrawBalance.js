'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { getTruncatedAmount } from "../utils/getTruncatedAmount.js";
import { Skeleton } from "../../internal/components/Skeleton.js";
import { useCallback, useMemo } from "react";
import { useAccount } from "wagmi";
import { EarnBalance } from "./EarnBalance.js";
import { useEarnContext } from "./EarnProvider.js";
function WithdrawBalance({ className }) {
  const {
    depositedBalance,
    depositedBalanceStatus: status,
    setWithdrawAmount,
    vaultToken
  } = useEarnContext();
  const { address } = useAccount();
  const handleMaxPress = useCallback(() => {
    if (depositedBalance) {
      setWithdrawAmount(depositedBalance);
    }
  }, [depositedBalance, setWithdrawAmount]);
  const balance = useMemo(() => {
    if (!depositedBalance) {
      return "0";
    }
    return getTruncatedAmount(depositedBalance.toString(), 4);
  }, [depositedBalance]);
  const title = useMemo(() => {
    if (!address) {
      return "Wallet not connected";
    }
    if (!vaultToken) {
      return /* @__PURE__ */ jsxDEV(Skeleton, { className: "h-6 w-24" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/WithdrawBalance.tsx",
        lineNumber: 37,
        columnNumber: 14
      }, this);
    }
    if (status === "pending") {
      return /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxDEV(Skeleton, { className: "!bg-[var(--ock-bg-alternate-active)] h-6 w-12" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/WithdrawBalance.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: vaultToken == null ? void 0 : vaultToken.symbol }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/WithdrawBalance.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/WithdrawBalance.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this);
    }
    return `${balance} ${vaultToken == null ? void 0 : vaultToken.symbol}`;
  }, [balance, vaultToken, address, status]);
  const subtitle = useMemo(() => {
    if (!address) {
      return "Connect wallet to withdraw";
    }
    return "Available to withdraw";
  }, [address]);
  return /* @__PURE__ */ jsxDEV(
    EarnBalance,
    {
      className,
      title,
      subtitle,
      onActionPress: handleMaxPress,
      showAction: balance !== "0"
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/WithdrawBalance.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}
export {
  WithdrawBalance
};
//# sourceMappingURL=WithdrawBalance.js.map
