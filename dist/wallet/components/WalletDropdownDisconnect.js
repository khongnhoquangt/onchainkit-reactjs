'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useCallback } from "react";
import { useDisconnect } from "wagmi";
import { disconnectSvg } from "../../internal/svg/disconnectSvg.js";
import { cn, text, color, pressable } from "../../styles/theme.js";
function WalletDropdownDisconnect({
  className,
  text: text$1 = "Disconnect"
}) {
  const { disconnect, connectors } = useDisconnect();
  const handleDisconnect = useCallback(() => {
    connectors.map((connector) => disconnect({ connector }));
  }, [disconnect, connectors]);
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      className: cn(
        pressable.default,
        color.foreground,
        "relative flex w-full items-center px-4 pt-3 pb-4",
        className
      ),
      onClick: handleDisconnect,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center", children: disconnectSvg }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownDisconnect.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: cn(text.body, "pl-6"), children: text$1 }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownDisconnect.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletDropdownDisconnect.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
export {
  WalletDropdownDisconnect
};
//# sourceMappingURL=WalletDropdownDisconnect.js.map
