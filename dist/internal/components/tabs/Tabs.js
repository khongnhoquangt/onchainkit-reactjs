'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { useValue } from "../../hooks/useValue.js";
import { cn } from "../../../styles/theme.js";
import { createContext, useContext, useState } from "react";
const TabsContext = createContext(void 0);
function TabsProvider({ children, defaultValue }) {
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const value = useValue({ selectedTab, setSelectedTab });
  return /* @__PURE__ */ jsxDEV(TabsContext.Provider, { value, children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/tabs/Tabs.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within an TabsProvider");
  }
  return context;
}
function Tabs({ children, defaultValue, className }) {
  return /* @__PURE__ */ jsxDEV(TabsProvider, { defaultValue, children: /* @__PURE__ */ jsxDEV("div", { "data-testid": "ockTabs", className: cn("flex flex-col", className), children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/tabs/Tabs.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/internal/components/tabs/Tabs.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
export {
  Tabs,
  useTabsContext
};
//# sourceMappingURL=Tabs.js.map
