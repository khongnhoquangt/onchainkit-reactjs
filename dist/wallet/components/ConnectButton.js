'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color, text, border, pressable } from "../../styles/theme.js";
function ConnectButton({
  className,
  connectWalletText,
  onClick,
  // Text will be deprecated in the future
  text: text$1
}) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      "data-testid": "ockConnectButton",
      className: cn(
        pressable.primary,
        border.radius,
        text.headline,
        color.inverse,
        "inline-flex min-w-[153px] items-center justify-center px-4 py-3",
        className
      ),
      onClick,
      children: connectWalletText ? connectWalletText : /* @__PURE__ */ jsxDEV("span", { className: cn(color.inverse), children: text$1 }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectButton.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/ConnectButton.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
export {
  ConnectButton
};
//# sourceMappingURL=ConnectButton.js.map
