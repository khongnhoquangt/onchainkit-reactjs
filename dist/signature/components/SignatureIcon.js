import { jsxDEV } from "react/jsx-dev-runtime";
import { useMemo } from "react";
import { Spinner } from "../../internal/components/Spinner.js";
import { ErrorSvg } from "../../internal/svg/errorSvg.js";
import { SuccessSvg } from "../../internal/svg/successSvg.js";
import { cn, text } from "../../styles/theme.js";
import { useSignatureContext } from "./SignatureProvider.js";
function SignatureIcon({ className }) {
  const { lifecycleStatus } = useSignatureContext();
  const icon = useMemo(() => {
    if (lifecycleStatus.statusName === "success") {
      return /* @__PURE__ */ jsxDEV(SuccessSvg, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureIcon.tsx",
        lineNumber: 17,
        columnNumber: 14
      }, this);
    }
    if (lifecycleStatus.statusName === "error") {
      return /* @__PURE__ */ jsxDEV(ErrorSvg, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureIcon.tsx",
        lineNumber: 20,
        columnNumber: 14
      }, this);
    }
    if (lifecycleStatus.statusName === "pending") {
      return /* @__PURE__ */ jsxDEV(Spinner, { className: "px-1.5 py-1.5" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureIcon.tsx",
        lineNumber: 23,
        columnNumber: 14
      }, this);
    }
    return null;
  }, [lifecycleStatus.statusName]);
  if (!icon) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV("div", { className: cn(text.label2, className), "data-testid": "ockSignatureIcon", children: icon }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureIcon.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
export {
  SignatureIcon
};
//# sourceMappingURL=SignatureIcon.js.map
