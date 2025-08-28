'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, color, text } from "../../styles/theme.js";
import { getSwapMessage } from "../utils/getSwapMessage.js";
import { useSwapContext } from "./SwapProvider.js";
function SwapMessage({ className }) {
  const { address, to, from, lifecycleStatus } = useSwapContext();
  const message = getSwapMessage({
    address,
    from,
    lifecycleStatus,
    to
  });
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex h-7 pt-2",
        text.label2,
        color.foregroundMuted,
        className
      ),
      "data-testid": "ockSwapMessage_Message",
      children: message
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/swap/components/SwapMessage.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
export {
  SwapMessage
};
//# sourceMappingURL=SwapMessage.js.map
