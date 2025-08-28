import { jsxDEV } from "react/jsx-dev-runtime";
import { cn, background, color, text } from "../../../styles/theme.js";
import { useCallback } from "react";
import { useTabsContext } from "./Tabs.js";
function Tab({
  value,
  children,
  className,
  "aria-label": ariaLabel,
  onClick
}) {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isSelected = selectedTab === value;
  const handleClick = useCallback(() => {
    setSelectedTab(value);
    onClick == null ? void 0 : onClick();
  }, [value, setSelectedTab, onClick]);
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      className: cn(
        text.headline,
        isSelected ? color.inverse : color.foreground,
        isSelected ? background.primary : background.default,
        "w-1/2 text-center",
        "cursor-pointer px-3 py-2",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ock-text-foreground)] focus-visible:ring-inset",
        className
      ),
      onClick: handleClick,
      "aria-label": ariaLabel,
      "aria-selected": isSelected,
      "aria-controls": `${value}-panel`,
      role: "tab",
      type: "button",
      tabIndex: isSelected ? 0 : -1,
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/tabs/Tab.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}
export {
  Tab
};
//# sourceMappingURL=Tab.js.map
