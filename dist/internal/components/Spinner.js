import { jsxDEV } from "react/jsx-dev-runtime";
import { cn } from "../../styles/theme.js";
function Spinner({ className }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "flex h-full items-center justify-center",
      "data-testid": "ockSpinner",
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(
            "animate-spin border-2 border-gray-200 border-t-3",
            "rounded-full border-t-gray-400 px-2.5 py-2.5",
            className
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Spinner.tsx",
          lineNumber: 13,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/Spinner.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}
export {
  Spinner
};
//# sourceMappingURL=Spinner.js.map
