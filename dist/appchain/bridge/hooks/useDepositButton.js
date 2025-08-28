'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Spinner } from "../../../internal/components/Spinner.js";
import { useMemo } from "react";
import { useAccount } from "wagmi";
function useDepositButton({
  depositStatus,
  withdrawStatus,
  bridgeParams
}) {
  const { isConnected } = useAccount();
  const isPending = depositStatus === "depositPending" || withdrawStatus === "withdrawPending";
  const isRejected = depositStatus === "depositRejected" || withdrawStatus === "withdrawRejected";
  const buttonContent = useMemo(() => {
    if (isPending) {
      return /* @__PURE__ */ jsxDEV(Spinner, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/hooks/useDepositButton.tsx",
        lineNumber: 22,
        columnNumber: 14
      }, this);
    }
    if (isConnected) {
      return "Confirm";
    }
    return "Connect Wallet";
  }, [isPending, isConnected]);
  const isDisabled = isConnected && (isPending || bridgeParams.amount === "" || Number(bridgeParams.amount) === 0);
  return {
    isPending,
    isRejected,
    buttonContent,
    isDisabled
  };
}
export {
  useDepositButton
};
//# sourceMappingURL=useDepositButton.js.map
