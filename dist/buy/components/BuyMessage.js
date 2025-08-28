'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { color, cn, text } from "../../styles/theme.js";
import { isSwapError } from "../../swap/utils/isSwapError.js";
import { useBuyContext } from "./BuyProvider.js";
function BuyMessage() {
  var _a;
  const { lifecycleStatus } = useBuyContext();
  if (isSwapError(lifecycleStatus.statusData)) {
    const message = lifecycleStatus.statusData.message || "Something went wrong. Please try again.";
    const textColor = ((_a = lifecycleStatus == null ? void 0 : lifecycleStatus.statusData) == null ? void 0 : _a.code) === "TmBPc05" ? color.foregroundMuted : color.error;
    return /* @__PURE__ */ jsxDEV("div", { className: cn(textColor, text.label2), children: message }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyMessage.tsx",
      lineNumber: 20,
      columnNumber: 12
    }, this);
  }
  return null;
}
export {
  BuyMessage
};
//# sourceMappingURL=BuyMessage.js.map
