'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useRef, useCallback } from "react";
import { DropdownMenu } from "../../internal/components/DropdownMenu.js";
import { cn, background, color, border } from "../../styles/theme.js";
import { TokenRow } from "./TokenRow.js";
import { TokenSelectButton } from "./TokenSelectButton.js";
function TokenSelectDropdown({
  options,
  setToken,
  token
}) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-fit shrink-0", children: [
    /* @__PURE__ */ jsxDEV(
      TokenSelectButton,
      {
        ref: buttonRef,
        onClick: toggleDropdown,
        isOpen,
        token
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectDropdown.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      DropdownMenu,
      {
        trigger: buttonRef,
        isOpen,
        onClose: closeDropdown,
        align: "end",
        children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            "data-testid": "ockTokenSelectDropdown_List",
            className: cn(
              border.radius,
              color.foreground,
              "flex max-h-80 w-[200px] flex-col overflow-y-hidden",
              "ock-scrollbar"
            ),
            children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-y-auto", children: options.map((token2) => /* @__PURE__ */ jsxDEV(
              TokenRow,
              {
                className: cn(background.inverse, "px-4 py-2"),
                token: token2,
                onClick: () => {
                  setToken(token2);
                  setIsOpen(false);
                }
              },
              token2.name + token2.address,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectDropdown.tsx",
                lineNumber: 51,
                columnNumber: 15
              },
              this
            )) }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectDropdown.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectDropdown.tsx",
            lineNumber: 40,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectDropdown.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSelectDropdown.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  TokenSelectDropdown
};
//# sourceMappingURL=TokenSelectDropdown.js.map
