'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Swap } from "./Swap.js";
function SwapDefault({
  config,
  className,
  disabled,
  experimental,
  from,
  isSponsored = false,
  onError,
  onStatus,
  onSuccess,
  title = "Swap",
  to
}) {
  return /* @__PURE__ */ jsxDEV(
    Swap,
    {
      className,
      onStatus,
      onSuccess,
      onError,
      config,
      isSponsored,
      title,
      experimental,
      to,
      from,
      disabled
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapDefault.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}
export {
  SwapDefault
};
//# sourceMappingURL=SwapDefault.js.map
