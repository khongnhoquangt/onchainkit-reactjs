'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { toggleSvg } from "../../../internal/svg/toggleSvg.js";
import { cn, border, pressable } from "../../../styles/theme.js";
import { useAppchainBridgeContext } from "./AppchainBridgeProvider.js";
function AppchainNetworkToggleButton({
  className
}) {
  const { handleToggle } = useAppchainBridgeContext();
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      className: cn(
        pressable.alternate,
        border.default,
        "flex h-14 w-14 items-center justify-center",
        "rounded-lg border-4 border-solid",
        "rotate-90",
        "-translate-x-1/2 absolute left-1/2 z-10",
        className
      ),
      "data-testid": "AppchainNetworkToggleButton",
      onClick: handleToggle,
      children: toggleSvg
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/appchain/bridge/components/AppchainNetworkToggleButton.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
export {
  AppchainNetworkToggleButton
};
//# sourceMappingURL=AppchainNetworkToggleButton.js.map
