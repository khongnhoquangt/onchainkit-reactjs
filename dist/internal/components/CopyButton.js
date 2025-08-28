'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { copyToClipboard } from "../utils/copyToClipboard.js";
import { useCallback } from "react";
function CopyButton({
  label,
  copyValue,
  onSuccess,
  onError,
  className,
  "aria-label": ariaLabel
}) {
  const handleCopy = useCallback(
    () => copyToClipboard({ copyValue, onSuccess, onError }),
    [copyValue, onSuccess, onError]
  );
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      "data-testid": "ockCopyButton",
      className,
      onClick: handleCopy,
      onKeyDown: handleCopy,
      "aria-label": ariaLabel,
      children: label
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/CopyButton.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
export {
  CopyButton
};
//# sourceMappingURL=CopyButton.js.map
