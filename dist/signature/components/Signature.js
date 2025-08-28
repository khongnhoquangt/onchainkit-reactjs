import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useIsMounted } from "../../internal/hooks/useIsMounted.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn } from "../../styles/theme.js";
import { SignatureButton } from "./SignatureButton.js";
import { SignatureProvider } from "./SignatureProvider.js";
import { SignatureStatus } from "./SignatureStatus.js";
import { SignatureToast } from "./SignatureToast.js";
function SignatureDefaultContent({
  label,
  disabled
}) {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(SignatureButton, { label, disabled }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SignatureStatus, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SignatureToast, {}, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function Signature({
  className,
  domain,
  types,
  message,
  primaryType,
  children,
  label,
  disabled = false,
  onSuccess,
  onStatus,
  onError,
  resetAfter
}) {
  const isMounted = useIsMounted();
  const componentTheme = useTheme();
  if (!isMounted) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn(componentTheme, "flex w-full flex-col gap-2", className)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    SignatureProvider,
    {
      onSuccess,
      onStatus,
      onError,
      domain,
      types,
      message,
      primaryType,
      resetAfter,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(componentTheme, "flex w-full flex-col gap-2", className),
          children: children ?? /* @__PURE__ */ jsxDEV(SignatureDefaultContent, { label, disabled }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
          lineNumber: 59,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/signature/components/Signature.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}
export {
  Signature
};
//# sourceMappingURL=Signature.js.map
