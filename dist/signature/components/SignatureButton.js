import { jsxDEV } from "react/jsx-dev-runtime";
import { ConnectWallet } from "../../wallet/components/ConnectWallet.js";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { cn, color, text, pressable, border } from "../../styles/theme.js";
import { useSignatureContext } from "./SignatureProvider.js";
function SignatureButton({
  className,
  disabled = false,
  label = "Sign",
  connectLabel = "Connect Wallet",
  errorLabel = "Try again",
  successLabel = "Signed",
  pendingLabel = "Signing..."
}) {
  const { handleSign, lifecycleStatus } = useSignatureContext();
  const { address } = useAccount();
  const buttonLabel = useMemo(() => {
    if (lifecycleStatus.statusName === "pending") {
      return pendingLabel;
    }
    if (lifecycleStatus.statusName === "error") {
      return errorLabel;
    }
    if (lifecycleStatus.statusName === "success") {
      return successLabel;
    }
    return label;
  }, [
    lifecycleStatus.statusName,
    label,
    errorLabel,
    successLabel,
    pendingLabel
  ]);
  if (!address) {
    return /* @__PURE__ */ jsxDEV(
      ConnectWallet,
      {
        className: cn("w-full", className),
        disconnectedLabel: connectLabel
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureButton.tsx",
        lineNumber: 53,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: cn(
        pressable.primary,
        border.radius,
        "w-full rounded-xl",
        "px-4 py-3 font-medium leading-6",
        disabled && pressable.disabled,
        text.headline,
        color.inverse,
        className
      ),
      type: "button",
      onClick: handleSign,
      disabled,
      children: buttonLabel
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureButton.tsx",
      lineNumber: 61,
      columnNumber: 5
    },
    this
  );
}
export {
  SignatureButton
};
//# sourceMappingURL=SignatureButton.js.map
