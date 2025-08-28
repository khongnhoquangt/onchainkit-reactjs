'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useCallback } from "react";
import { TextInput } from "../../internal/components/TextInput.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { CloseSvg } from "../../internal/svg/closeSvg.js";
import { searchIconSvg } from "../../internal/svg/searchIconSvg.js";
import { cn, placeholder, color, pressable } from "../../styles/theme.js";
function TokenSearch({
  className,
  onChange,
  delayMs = 200
}) {
  const componentTheme = useTheme();
  const [value, setValue] = useState("");
  const handleClear = useCallback(() => {
    setValue("");
    onChange("");
  }, [onChange]);
  return /* @__PURE__ */ jsxDEV("div", { className: "relative flex items-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "-translate-y-1/2 absolute top-1/2 left-4", children: searchIconSvg }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSearch.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      TextInput,
      {
        className: cn(
          componentTheme,
          pressable.alternate,
          color.foreground,
          placeholder.default,
          "w-full rounded-xl py-2 pr-5 pl-12 outline-none",
          className
        ),
        placeholder: "Search for a token",
        value,
        setValue,
        onChange,
        delayMs
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSearch.tsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    ),
    value && /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        "data-testid": "ockTextInput_Clear",
        className: "-translate-y-1/2 absolute top-1/2 right-4",
        onClick: handleClear,
        children: /* @__PURE__ */ jsxDEV(CloseSvg, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSearch.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSearch.tsx",
        lineNumber: 46,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenSearch.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
export {
  TokenSearch
};
//# sourceMappingURL=TokenSearch.js.map
