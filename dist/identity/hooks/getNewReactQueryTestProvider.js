import { jsxDEV } from "react/jsx-dev-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const getNewReactQueryTestProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } }
  });
  function ReactQueryTestProvider({ children }) {
    return /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/identity/hooks/getNewReactQueryTestProvider.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this);
  }
  return ReactQueryTestProvider;
};
export {
  getNewReactQueryTestProvider
};
//# sourceMappingURL=getNewReactQueryTestProvider.js.map
