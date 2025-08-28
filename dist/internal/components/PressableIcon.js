import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, border, pressable } from "../../styles/theme.js";
function PressableIcon({
  children,
  className,
  onClick,
  ariaLabel
}) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      onClick,
      "data-testid": "ockPressableIconButton",
      "aria-label": ariaLabel,
      className: cn(
        pressable.default,
        border.radiusInner,
        border.default,
        "flex items-center justify-center",
        className
      ),
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/PressableIcon.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
export {
  PressableIcon
};
//# sourceMappingURL=PressableIcon.js.map
