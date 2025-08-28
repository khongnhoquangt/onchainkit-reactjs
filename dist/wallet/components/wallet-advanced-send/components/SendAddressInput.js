'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { TextInput } from "../../../../internal/components/TextInput.js";
import { cn, color, background, border } from "../../../../styles/theme.js";
import { useSendContext } from "./SendProvider.js";
function SendAddressInput({ classNames }) {
  const {
    recipientState,
    updateRecipientInput,
    validateRecipientInput,
    deselectRecipient
  } = useSendContext();
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockSendAddressInput",
      className: cn(
        border.lineDefault,
        border.radius,
        "w-full",
        "flex items-center gap-2",
        "px-4 py-3",
        classNames == null ? void 0 : classNames.container
      ),
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: cn(color.foreground, classNames == null ? void 0 : classNames.label), children: "To" }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressInput.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            inputMode: "text",
            placeholder: "Basename, ENS, or Address",
            value: recipientState.displayValue ?? recipientState.input,
            setValue: updateRecipientInput,
            onChange: validateRecipientInput,
            onFocus: deselectRecipient,
            "aria-label": "Input Receiver Address",
            className: cn(
              background.default,
              "w-full outline-none",
              classNames == null ? void 0 : classNames.input
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressInput.tsx",
            lineNumber: 29,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendAddressInput.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
export {
  SendAddressInput
};
//# sourceMappingURL=SendAddressInput.js.map
