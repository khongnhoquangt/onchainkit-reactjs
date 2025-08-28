'use client';
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useRef, useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { useIsInMiniApp } from "../hooks/useIsInMiniApp.js";
const FARCASTER_CONNECTOR_TYPES = /* @__PURE__ */ new Set([
  "farcasterFrame",
  "farcasterMiniApp"
]);
function AutoConnect({
  children,
  enabled = true
}) {
  const { isConnected, isConnecting } = useAccount();
  const { connectors, connect } = useConnect();
  const hasAttemptedConnection = useRef(false);
  const connector = connectors[0];
  const { isInMiniApp, isSuccess: isInMiniAppSuccess } = useIsInMiniApp();
  useEffect(() => {
    if (!enabled || hasAttemptedConnection.current || !FARCASTER_CONNECTOR_TYPES.has(connector == null ? void 0 : connector.type) || !isInMiniAppSuccess) {
      return;
    }
    hasAttemptedConnection.current = true;
    async function handleAutoConnect() {
      if (!isInMiniApp || isConnected || isConnecting) return;
      connect({ connector });
    }
    handleAutoConnect();
  }, [
    connectors,
    connect,
    isConnected,
    isConnecting,
    connector,
    enabled,
    isInMiniAppSuccess,
    isInMiniApp
  ]);
  return /* @__PURE__ */ jsxDEV(Fragment, { children }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/minikit/components/AutoConnect.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
export {
  AutoConnect
};
//# sourceMappingURL=AutoConnect.js.map
