import { jsxDEV } from "react/jsx-dev-runtime";
import { useMemo } from "react";
import { cn, text } from "../../styles/theme.js";
import { useSignatureContext } from "./SignatureProvider.js";
function SignatureLabel({ className }) {
  const { lifecycleStatus } = useSignatureContext();
  const label = useMemo(() => {
    if (lifecycleStatus.statusName === "success") {
      return "Success";
    }
    if (lifecycleStatus.statusName === "error") {
      return lifecycleStatus.statusData.message;
    }
    if (lifecycleStatus.statusName === "pending") {
      return "Confirm in wallet";
    }
    return null;
  }, [lifecycleStatus.statusName, lifecycleStatus.statusData]);
  if (!label) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, className), "data-testid": "ockSignatureLabel", children: label }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureLabel.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  SignatureLabel
};
//# sourceMappingURL=SignatureLabel.js.map
