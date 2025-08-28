import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, border, background } from "../../styles/theme.js";
function Skeleton({ className }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "animate-pulse bg-opacity-50",
        background.alternate,
        border.radius,
        className
      ),
      "data-testid": "ockSkeleton"
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Skeleton.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
export {
  Skeleton
};
//# sourceMappingURL=Skeleton.js.map
