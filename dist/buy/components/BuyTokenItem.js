'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useCallback, useMemo } from "react";
import { getRoundedAmount } from "../../internal/utils/getRoundedAmount.js";
import { cn, color, text, pressable } from "../../styles/theme.js";
import "../../useOnchainKit.js";
import { TokenImage } from "../../token/components/TokenImage.js";
import "../../token/components/TokenRow.js";
import "../../internal/components/TextInput.js";
import "../../internal/svg/searchIconSvg.js";
import "react-dom";
import "../../token/components/TokenSelectButton.js";
import "viem";
import { useBuyContext } from "./BuyProvider.js";
function BuyTokenItem({ swapUnit }) {
  const { handleSubmit, setIsDropdownOpen } = useBuyContext();
  if (!swapUnit || !swapUnit.token) {
    return null;
  }
  const handleClick = useCallback(() => {
    setIsDropdownOpen(false);
    handleSubmit(swapUnit);
  }, [handleSubmit, swapUnit, setIsDropdownOpen]);
  const hasInsufficientBalance = !swapUnit.balance || Number.parseFloat(swapUnit.balance) < Number.parseFloat(swapUnit.amount);
  const roundedAmount = useMemo(() => {
    if (!swapUnit.amount) {
      return "";
    }
    return getRoundedAmount(swapUnit.amount, 10);
  }, [swapUnit.amount]);
  const roundedBalance = useMemo(() => {
    return getRoundedAmount(swapUnit.balance || "0", 3);
  }, [swapUnit.balance]);
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: cn(
        "flex items-center gap-2 rounded-lg p-2",
        !hasInsufficientBalance && pressable.default,
        text.label2
      ),
      onClick: handleClick,
      type: "button",
      disabled: hasInsufficientBalance,
      children: [
        /* @__PURE__ */ jsxDEV(TokenImage, { token: swapUnit.token, size: 36 }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyTokenItem.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(
              "flex flex-col items-start",
              hasInsufficientBalance ? color.foregroundMuted : color.foreground
            ),
            children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                roundedAmount,
                " ",
                swapUnit.token.name
              ] }, void 0, true, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyTokenItem.tsx",
                lineNumber: 57,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: cn(
                    "text-xs",
                    hasInsufficientBalance ? color.error : color.foregroundMuted
                  ),
                  children: `${hasInsufficientBalance ? "Insufficient balance" : "Balance"}: ${roundedBalance}`
                },
                void 0,
                false,
                {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyTokenItem.tsx",
                  lineNumber: 60,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyTokenItem.tsx",
            lineNumber: 51,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/buy/components/BuyTokenItem.tsx",
      lineNumber: 40,
      columnNumber: 5
    },
    this
  );
}
export {
  BuyTokenItem
};
//# sourceMappingURL=BuyTokenItem.js.map
