import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color } from "../../styles/theme.js";
import { SignatureLabel } from "./SignatureLabel.js";
import { useSignatureContext } from "./SignatureProvider.js";
const DEFAULT_CHILDREN = /* @__PURE__ */ jsxDEV(SignatureLabel, {}, void 0, false, {
  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureStatus.tsx",
  lineNumber: 5,
  columnNumber: 26
}, void 0);
function SignatureStatus({
  children = DEFAULT_CHILDREN,
  className
}) {
  const { lifecycleStatus } = useSignatureContext();
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex justify-between",
        color.foregroundMuted,
        { [color.error]: lifecycleStatus.statusName === "error" },
        className
      ),
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureStatus.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
export {
  SignatureStatus
};
//# sourceMappingURL=SignatureStatus.js.map
