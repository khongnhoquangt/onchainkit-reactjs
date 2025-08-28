'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { TextInput } from "../../internal/components/TextInput.js";
import { isValidAmount } from "../../internal/utils/isValidAmount.js";
import { cn, color, background, border } from "../../styles/theme.js";
import { formatAmount } from "../../swap/utils/formatAmount.js";
import { TokenChip } from "../../token/components/TokenChip.js";
import "react";
import "../../token/components/TokenRow.js";
import "../../useOnchainKit.js";
import "../../internal/svg/searchIconSvg.js";
import "react-dom";
import "../../token/components/TokenSelectButton.js";
import "viem";
import { useBuyContext } from "./BuyProvider.js";
function BuyAmountInput() {
  const { to, handleAmountChange } = useBuyContext();
  if (!(to == null ? void 0 : to.token)) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex h-12 items-center border px-2 pl-4",
        background.default,
        border.radius,
        border.lineDefault
      ),
      children: [
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            className: cn(
              "mr-2 w-full border-none font-display",
              "leading-none outline-none disabled:cursor-not-allowed",
              background.default,
              color.foreground
            ),
            placeholder: "0.0",
            delayMs: 1e3,
            inputMode: "decimal",
            value: formatAmount(to.amount),
            setValue: to.setAmount,
            disabled: to.loading,
            onChange: handleAmountChange,
            inputValidator: isValidAmount
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyAmountInput.tsx",
            lineNumber: 25,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          TokenChip,
          {
            className: cn(color.foreground, "rounded-md"),
            token: to.token,
            isPressable: false
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyAmountInput.tsx",
            lineNumber: 41,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyAmountInput.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
export {
  BuyAmountInput
};
//# sourceMappingURL=BuyAmountInput.js.map
