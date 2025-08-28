import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useState, useEffect, useCallback } from "react";
import { Toast } from "../../internal/components/Toast.js";
import { SignatureIcon } from "./SignatureIcon.js";
import { SignatureLabel } from "./SignatureLabel.js";
import { useSignatureContext } from "./SignatureProvider.js";
const DEFAULT_CHILDREN = /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(SignatureIcon, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureToast.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(SignatureLabel, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureToast.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureToast.tsx",
  lineNumber: 8,
  columnNumber: 3
}, void 0);
function SignatureToast({
  children = DEFAULT_CHILDREN,
  className,
  durationMs = 5e3,
  position = "bottom-center"
}) {
  const { lifecycleStatus } = useSignatureContext();
  const [isToastVisible, setIsToastVisible] = useState(false);
  useEffect(() => {
    if (lifecycleStatus.statusName !== "init") {
      setIsToastVisible(true);
    }
  }, [lifecycleStatus]);
  const closeToast = useCallback(() => {
    setIsToastVisible(false);
  }, []);
  return /* @__PURE__ */ jsxDEV(
    Toast,
    {
      position,
      className,
      durationMs,
      isVisible: isToastVisible,
      onClose: closeToast,
      startTimeout: lifecycleStatus.statusName === "error" || lifecycleStatus.statusName === "success",
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/SignatureToast.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}
export {
  SignatureToast
};
//# sourceMappingURL=SignatureToast.js.map
