'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { Identity } from "../../identity/components/Identity.js";
import { cn, background } from "../../styles/theme.js";
import { useMemo, Children, isValidElement, cloneElement, useCallback } from "react";
import { useWalletContext } from "./WalletProvider.js";
function WalletBottomSheet({
  children,
  className
}) {
  const { address, isSubComponentOpen, setIsSubComponentOpen } = useWalletContext();
  const childrenArray = useMemo(() => {
    return Children.toArray(children).map((child) => {
      if (isValidElement(child) && child.type === Identity) {
        return cloneElement(child, { address });
      }
      return child;
    });
  }, [children, address]);
  const handleOverlayClick = useCallback(() => {
    setIsSubComponentOpen(false);
  }, [setIsSubComponentOpen]);
  const handleEscKeyPress = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setIsSubComponentOpen(false);
      }
    },
    [setIsSubComponentOpen]
  );
  if (!address) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    isSubComponentOpen && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-40 bg-black bg-opacity-20",
        onClick: handleOverlayClick,
        onKeyDown: handleEscKeyPress,
        role: "button",
        tabIndex: 0
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletBottomSheet.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn(
          background.default,
          "fixed right-0 bottom-0 left-0 z-50",
          "transform rounded-[20px_20px_0_0] p-4 transition-transform",
          `${isSubComponentOpen ? "translate-y-0" : "translate-y-full"}`,
          className
        ),
        "data-testid": "ockWalletBottomSheet",
        children: childrenArray
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletBottomSheet.tsx",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletBottomSheet.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  WalletBottomSheet
};
//# sourceMappingURL=WalletBottomSheet.js.map
