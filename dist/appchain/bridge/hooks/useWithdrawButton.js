'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Spinner } from "../../../internal/components/Spinner.js";
import { useMemo } from "react";
function useWithdrawButton({ withdrawStatus }) {
  const isPending = withdrawStatus === "withdrawSuccess";
  const isSuccess = withdrawStatus === "claimSuccess";
  const isError = withdrawStatus === "error";
  const buttonDisabled = isPending;
  const buttonContent = isPending ? /* @__PURE__ */ jsxDEV(Spinner, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/hooks/useWithdrawButton.tsx",
    lineNumber: 11,
    columnNumber: 37
  }, this) : "Claim";
  const shouldShowClaim = withdrawStatus === "claimReady" || withdrawStatus === "claimRejected";
  const label = useMemo(() => {
    if (shouldShowClaim) {
      return "Claim is ready";
    }
    if (isSuccess) {
      return "Transaction complete";
    }
    if (isError) {
      return "Error processing withdrawal";
    }
    return "Confirming transaction";
  }, [shouldShowClaim, isSuccess, isError]);
  return {
    isPending,
    isSuccess,
    isError,
    buttonDisabled,
    buttonContent,
    shouldShowClaim,
    label
  };
}
export {
  useWithdrawButton
};
//# sourceMappingURL=useWithdrawButton.js.map
