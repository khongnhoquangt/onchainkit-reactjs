'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, text } from "../../styles/theme.js";
import { useFundContext } from "./FundCardProvider.js";
function FundCardHeader({ className }) {
  const { headerText } = useFundContext();
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(text.headline, className),
      "data-testid": "ockFundCardHeader",
      children: headerText
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/fund/components/FundCardHeader.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
export {
  FundCardHeader
};
//# sourceMappingURL=FundCardHeader.js.map
