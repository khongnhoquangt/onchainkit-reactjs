import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useCallback } from "react";
import { TextInput } from "./TextInput.js";
import { cn, pressable, background, color, border } from "../../styles/theme.js";
const DELAY_MS = 200;
function QuantitySelector({
  className,
  disabled,
  minQuantity = 1,
  maxQuantity = Number.MAX_SAFE_INTEGER,
  onChange,
  placeholder
}) {
  const [value, setValue] = useState(`${minQuantity}`);
  const isValidQuantity = useCallback(
    (v) => {
      if (Number.parseInt(v, 10) < minQuantity) {
        return false;
      }
      if (Number.parseInt(v, 10) > maxQuantity) {
        return false;
      }
      const regex = /^[0-9]*$/;
      return regex.test(v);
    },
    [maxQuantity, minQuantity]
  );
  const handleIncrement = useCallback(() => {
    const next = `${Math.min(maxQuantity, Number.parseInt(value, 10) + 1)}`;
    setValue(next);
    onChange(next);
  }, [onChange, maxQuantity, value]);
  const handleDecrement = useCallback(() => {
    const next = `${Math.max(minQuantity, Number.parseInt(value, 10) - 1)}`;
    setValue(next);
    onChange(next);
  }, [onChange, minQuantity, value]);
  const handleOnChange = useCallback(
    (v) => {
      if (v === "") {
        return;
      }
      onChange(v);
    },
    [onChange]
  );
  const handleBlur = useCallback(() => {
    if (value === "") {
      setValue(minQuantity.toString());
      onChange(minQuantity.toString());
    }
  }, [onChange, minQuantity, value]);
  const classNames = cn(
    "h-11 w-11 rounded-lg border",
    border.defaultActive,
    color.foreground,
    background.default,
    disabled && pressable.disabled
  );
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn("relative flex items-center gap-1", className),
      "data-testid": "ockQuantitySelector",
      children: [
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(
          "button",
          {
            "aria-label": "decrement",
            className: cn(classNames, pressable.default),
            "data-testid": "ockQuantitySelector_decrement",
            disabled,
            onClick: handleDecrement,
            type: "button",
            children: "-"
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QuantitySelector.tsx",
            lineNumber: 87,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QuantitySelector.tsx",
          lineNumber: 86,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          TextInput,
          {
            "aria-label": "quantity",
            className: cn(
              classNames,
              "w-full text-center hover:bg-[var(--ock-bg-default-hover)] focus:bg-transparent"
            ),
            delayMs: DELAY_MS,
            disabled,
            inputValidator: isValidQuantity,
            onBlur: handleBlur,
            onChange: handleOnChange,
            placeholder,
            setValue,
            value
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QuantitySelector.tsx",
            lineNumber: 98,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(
          "button",
          {
            "aria-label": "increment",
            className: cn(classNames, pressable.default),
            "data-testid": "ockQuantitySelector_increment",
            disabled,
            onClick: handleIncrement,
            type: "button",
            children: "+"
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QuantitySelector.tsx",
            lineNumber: 114,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QuantitySelector.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/QuantitySelector.tsx",
      lineNumber: 82,
      columnNumber: 5
    },
    this
  );
}
export {
  DELAY_MS,
  QuantitySelector
};
//# sourceMappingURL=QuantitySelector.js.map
