'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { Draggable } from "../../internal/components/Draggable/Draggable.js";
import { useIsMounted } from "../../internal/hooks/useIsMounted.js";
import { useOutsideClick } from "../../internal/hooks/useOutsideClick.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { findComponent } from "../../internal/utils/findComponent.js";
import { cn } from "../../styles/theme.js";
import { useRef, useMemo, Children, isValidElement } from "react";
import { getWalletDraggableProps } from "../utils/getWalletDraggableProps.js";
import { ConnectWallet } from "./ConnectWallet.js";
import { WalletAdvanced } from "./WalletAdvanced.js";
import { WalletDropdown } from "./WalletDropdown.js";
import { WalletProvider, useWalletContext } from "./WalletProvider.js";
const defaultWalletChildren = /* @__PURE__ */ jsxDEV(Fragment, { children: [
  /* @__PURE__ */ jsxDEV(ConnectWallet, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(WalletDropdown, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
  lineNumber: 24,
  columnNumber: 3
}, void 0);
function Wallet({
  children,
  className,
  draggable,
  draggableStartingPosition,
  isSponsored
}) {
  const componentTheme = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(WalletProvider, { isSponsored, children: /* @__PURE__ */ jsxDEV(
    WalletContent,
    {
      className: cn(componentTheme, className),
      ...getWalletDraggableProps({ draggable, draggableStartingPosition }),
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function WalletContent({
  children,
  className,
  draggable,
  draggableStartingPosition
}) {
  const {
    isSubComponentOpen,
    isConnectModalOpen,
    handleClose,
    connectRef,
    breakpoint
  } = useWalletContext();
  const walletContainerRef = useRef(null);
  useOutsideClick(walletContainerRef, handleClose);
  const { dropdown, advanced } = useMemo(() => {
    const childrenArray = Children.toArray(children);
    return {
      dropdown: childrenArray.find(findComponent(WalletDropdown)),
      advanced: childrenArray.find(findComponent(WalletAdvanced))
    };
  }, [children]);
  const childrenToRender = useMemo(() => {
    return Children.map(children, (child) => {
      if (isValidElement(child) && child.type === WalletAdvanced && dropdown) {
        return null;
      }
      return child;
    });
  }, [dropdown, children]);
  if (dropdown && advanced) {
    console.error(
      "Defaulted to WalletDropdown. Wallet cannot have both WalletDropdown and WalletAdvanced as children."
    );
  }
  const disableDraggable = isConnectModalOpen || breakpoint === "sm" && isSubComponentOpen;
  if (draggable) {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        ref: walletContainerRef,
        className: cn("relative w-fit shrink-0", className),
        children: /* @__PURE__ */ jsxDEV(
          Draggable,
          {
            startingPosition: draggableStartingPosition,
            disabled: disableDraggable,
            children: /* @__PURE__ */ jsxDEV("div", { ref: connectRef, children: childrenToRender || defaultWalletChildren }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
            lineNumber: 113,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
        lineNumber: 109,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: walletContainerRef,
      className: cn("relative w-fit shrink-0", className),
      children: /* @__PURE__ */ jsxDEV("div", { ref: connectRef, children: childrenToRender || defaultWalletChildren }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
        lineNumber: 132,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/Wallet.tsx",
      lineNumber: 127,
      columnNumber: 5
    },
    this
  );
}
export {
  Wallet
};
//# sourceMappingURL=Wallet.js.map
