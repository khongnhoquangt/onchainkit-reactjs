'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { copyToClipboard } from "../../internal/utils/copyToClipboard.js";
import { useState } from "react";
import { cn, text, color, border, pressable } from "../../styles/theme.js";
import { getSlicedAddress } from "../utils/getSlicedAddress.js";
import { useIdentityContext } from "./IdentityProvider.js";
function Address({
  address = null,
  className,
  isSliced = true,
  hasCopyAddressOnClick = true
}) {
  const [copyText, setCopyText] = useState("Copy");
  const { address: contextAddress } = useIdentityContext();
  const accountAddress = address ?? contextAddress;
  if (!accountAddress) {
    console.error(
      "Address: an Ethereum address must be provided to the Identity or Address component."
    );
    return null;
  }
  const addressContent = isSliced ? getSlicedAddress(accountAddress) : accountAddress;
  if (!hasCopyAddressOnClick) {
    return /* @__PURE__ */ jsxDEV(
      "span",
      {
        "data-testid": "ockAddress",
        className: cn(color.foregroundMuted, text.label2, className),
        children: addressContent
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Address.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    );
  }
  const handleClick = async () => {
    await copyToClipboard({
      copyValue: accountAddress,
      onSuccess: () => {
        setCopyText("Copied");
        setTimeout(() => setCopyText("Copy"), 2e3);
      },
      onError: (err) => {
        console.error("Failed to copy address:", err);
        setCopyText("Failed to copy");
        setTimeout(() => setCopyText("Copy"), 2e3);
      }
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "span",
    {
      "data-testid": "ockAddress",
      className: cn(
        color.foregroundMuted,
        text.label2,
        className,
        "group relative cursor-pointer"
      ),
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: 0,
      role: "button",
      "aria-label": `Copy address ${accountAddress}`,
      children: [
        addressContent,
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            className: cn(
              pressable.alternate,
              text.legal,
              color.foreground,
              border.default,
              border.radius,
              "absolute top-full left-[0%] z-10 mt-0.5 px-1.5 py-0.5 opacity-0 transition-opacity group-hover:opacity-100"
            ),
            "aria-live": "polite",
            children: copyText
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Address.tsx",
            lineNumber: 82,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/components/Address.tsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}
export {
  Address
};
//# sourceMappingURL=Address.js.map
