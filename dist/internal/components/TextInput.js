import { jsxDEV } from "react/jsx-dev-runtime";
import { forwardRef, useCallback } from "react";
import { useDebounce } from "../hooks/useDebounce.js";
const TextInput = forwardRef(
  ({
    "aria-label": ariaLabel,
    className,
    delayMs = 0,
    disabled = false,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    setValue,
    inputMode,
    value,
    inputValidator = () => true
  }, ref) => {
    const handleDebounce = useDebounce((value2) => {
      onChange(value2);
    }, delayMs);
    const handleChange = useCallback(
      (evt) => {
        const value2 = evt.target.value;
        if (inputValidator(value2)) {
          setValue == null ? void 0 : setValue(value2);
          if (delayMs > 0) {
            handleDebounce(value2);
          } else {
            onChange(value2);
          }
        }
      },
      [onChange, handleDebounce, delayMs, setValue, inputValidator]
    );
    return /* @__PURE__ */ jsxDEV(
      "input",
      {
        "aria-label": ariaLabel,
        "data-testid": "ockTextInput_Input",
        ref,
        type: "text",
        className,
        inputMode,
        placeholder,
        value,
        onBlur,
        onChange: handleChange,
        onFocus,
        disabled,
        autoComplete: "off",
        "data-1p-ignore": true
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/TextInput.tsx",
        lineNumber: 64,
        columnNumber: 7
      },
      void 0
    );
  }
);
TextInput.displayName = "TextInput";
export {
  TextInput
};
//# sourceMappingURL=TextInput.js.map
