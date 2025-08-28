import { jsxDEV } from "react/jsx-dev-runtime";
import { Component } from "react";
class NFTErrorBoundary extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.error) {
      if (this.props.fallback) {
        const Fallback = this.props.fallback;
        return /* @__PURE__ */ jsxDEV(Fallback, { error: this.state.error }, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTErrorBoundary.tsx",
          lineNumber: 34,
          columnNumber: 16
        }, this);
      }
      return /* @__PURE__ */ jsxDEV("h1", { children: "Sorry, we had an unhandled error" }, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/nft/components/NFTErrorBoundary.tsx",
        lineNumber: 36,
        columnNumber: 14
      }, this);
    }
    return this.props.children;
  }
}
export {
  NFTErrorBoundary as default
};
//# sourceMappingURL=NFTErrorBoundary.js.map
