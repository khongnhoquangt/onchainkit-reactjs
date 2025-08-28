import { jsxDEV } from "react/jsx-dev-runtime";
import { useTabsContext } from "./Tabs.js";
function TabContent({ children, value, className }) {
  const { selectedTab } = useTabsContext();
  if (selectedTab !== value) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className,
      role: "tabpanel",
      "aria-labelledby": `${value}-panel`,
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/tabs/TabContent.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
export {
  TabContent
};
//# sourceMappingURL=TabContent.js.map
