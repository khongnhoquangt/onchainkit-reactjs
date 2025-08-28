'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Dialog } from "../../internal/components/Dialog.js";
import { CloseSvg } from "../../internal/svg/closeSvg.js";
import { coinbaseWalletSvg } from "../../internal/svg/coinbaseWalletSvg.js";
import { defaultAvatarSVG } from "../../internal/svg/defaultAvatarSVG.js";
import { frameWalletSvg } from "../../internal/svg/frameWalletSvg.js";
import { metamaskSvg } from "../../internal/svg/metamaskSvg.js";
import { phantomSvg } from "../../internal/svg/phantomSvg.js";
import { rabbySvg } from "../../internal/svg/rabbySvg.js";
import { trustWalletSvg } from "../../internal/svg/trustWalletSvg.js";
import { cn, border, pressable, color, text, background } from "../../styles/theme.js";
import { useOnchainKit } from "../../useOnchainKit.js";
import { useCallback } from "react";
import { useConnect } from "wagmi";
import { baseAccount, coinbaseWallet, metaMask, injected } from "wagmi/connectors";
import { checkWalletAndRedirect } from "../utils/checkWalletAndRedirect.js";
import { BaseAccountSvg } from "../../internal/svg/baseAccountSvg.js";
function WalletModal({
  className,
  isOpen,
  onClose,
  onError
}) {
  var _a, _b, _c, _d, _e, _f;
  const { connect } = useConnect();
  const { config } = useOnchainKit();
  const appLogo = ((_a = config == null ? void 0 : config.appearance) == null ? void 0 : _a.logo) ?? void 0;
  const appName = ((_b = config == null ? void 0 : config.appearance) == null ? void 0 : _b.name) ?? void 0;
  const privacyPolicyUrl = ((_c = config == null ? void 0 : config.wallet) == null ? void 0 : _c.privacyUrl) ?? void 0;
  const termsOfServiceUrl = ((_d = config == null ? void 0 : config.wallet) == null ? void 0 : _d.termsUrl) ?? void 0;
  const supportedWallets = ((_e = config == null ? void 0 : config.wallet) == null ? void 0 : _e.supportedWallets) ?? {
    rabby: false,
    trust: false,
    frame: false
  };
  const isSignUpEnabled = ((_f = config == null ? void 0 : config.wallet) == null ? void 0 : _f.signUpEnabled) ?? true;
  const handleBaseAccountConnection = useCallback(() => {
    try {
      connect({
        connector: baseAccount({
          appName,
          appLogoUrl: appLogo
        })
      });
      onClose();
    } catch (error) {
      console.error("Base Account connection error:", error);
      if (onError) {
        onError(
          error instanceof Error ? error : new Error("Failed to connect wallet")
        );
      }
    }
  }, [appName, appLogo, connect, onClose, onError]);
  const handleCoinbaseWalletConnection = useCallback(() => {
    try {
      const cbConnector = coinbaseWallet({
        preference: "all",
        appName,
        appLogoUrl: appLogo
      });
      connect({ connector: cbConnector });
      onClose();
    } catch (error) {
      console.error("Coinbase Wallet connection error:", error);
      if (onError) {
        onError(
          error instanceof Error ? error : new Error("Failed to connect wallet")
        );
      }
    }
  }, [appName, appLogo, connect, onClose, onError]);
  const handleMetaMaskConnection = useCallback(() => {
    try {
      const metamaskConnector = metaMask({
        dappMetadata: {
          name: appName || "OnchainKit App",
          url: window.location.origin,
          iconUrl: appLogo
        }
      });
      connect({ connector: metamaskConnector });
      onClose();
    } catch (error) {
      console.error("MetaMask connection error:", error);
      onError == null ? void 0 : onError(
        error instanceof Error ? error : new Error("Failed to connect wallet")
      );
    }
  }, [connect, onClose, onError, appName, appLogo]);
  const handlePhantomConnection = useCallback(() => {
    try {
      if (!checkWalletAndRedirect("phantom")) {
        onClose();
        return;
      }
      const phantomConnector = injected({
        target: "phantom"
      });
      connect({ connector: phantomConnector });
      onClose();
    } catch (error) {
      console.error("Phantom connection error:", error);
      onError == null ? void 0 : onError(
        error instanceof Error ? error : new Error("Failed to connect wallet")
      );
    }
  }, [connect, onClose, onError]);
  const handleRabbyConnection = useCallback(() => {
    try {
      if (!checkWalletAndRedirect("rabby")) {
        onClose();
        return;
      }
      const rabbyConnector = injected({
        target: "rabby"
      });
      connect({ connector: rabbyConnector });
      onClose();
    } catch (error) {
      console.error("Rabby connection error:", error);
      onError == null ? void 0 : onError(
        error instanceof Error ? error : new Error("Failed to connect wallet")
      );
    }
  }, [connect, onClose, onError]);
  const handleTrustWalletConnection = useCallback(() => {
    try {
      if (!checkWalletAndRedirect("trust")) {
        onClose();
        return;
      }
      const trustConnector = injected({
        target: "trust"
      });
      connect({ connector: trustConnector });
      onClose();
    } catch (error) {
      console.error("Trust Wallet connection error:", error);
      onError == null ? void 0 : onError(
        error instanceof Error ? error : new Error("Failed to connect wallet")
      );
      onClose();
    }
  }, [connect, onClose, onError]);
  const handleFrameWalletConnection = useCallback(() => {
    var _a2;
    try {
      if (!((_a2 = window.ethereum) == null ? void 0 : _a2.isFrame)) {
        window.open("https://frame.sh/download", "_blank");
        onClose();
        return;
      }
      const frameConnector = injected();
      connect({ connector: frameConnector });
      onClose();
    } catch (error) {
      console.error("Frame Wallet connection error:", error);
      onError == null ? void 0 : onError(
        error instanceof Error ? error : new Error("Failed to connect wallet")
      );
      onClose();
    }
  }, [connect, onClose, onError]);
  const availableWallets = [
    {
      id: "base-account",
      name: "Base",
      icon: /* @__PURE__ */ jsxDEV(BaseAccountSvg, {}, void 0, false, {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this),
      connector: handleBaseAccountConnection,
      enabled: true
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: coinbaseWalletSvg,
      connector: handleCoinbaseWalletConnection,
      enabled: true
    },
    {
      id: "metamask",
      name: "MetaMask",
      icon: metamaskSvg,
      connector: handleMetaMaskConnection,
      enabled: true
    },
    {
      id: "phantom",
      name: "Phantom",
      icon: phantomSvg,
      connector: handlePhantomConnection,
      enabled: true
    },
    {
      id: "rabby",
      name: "Rabby",
      icon: rabbySvg,
      connector: handleRabbyConnection,
      enabled: supportedWallets.rabby === true
    },
    {
      id: "trust",
      name: "Trust Wallet",
      icon: trustWalletSvg,
      connector: handleTrustWalletConnection,
      enabled: supportedWallets.trust === true
    },
    {
      id: "frame",
      name: "Frame",
      icon: frameWalletSvg,
      connector: handleFrameWalletConnection,
      enabled: supportedWallets.frame === true
    }
  ].filter((wallet) => wallet.enabled);
  return /* @__PURE__ */ jsxDEV(Dialog, { isOpen, onClose, "aria-label": "Connect Wallet", children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-testid": "ockModalOverlay",
      className: cn(
        border.lineDefault,
        border.radius,
        background.default,
        "w-[22rem] p-6 pb-4",
        "relative flex flex-col items-center gap-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: cn(
              pressable.default,
              border.radius,
              border.default,
              "absolute top-4 right-4",
              "flex items-center justify-center p-1",
              "transition-colors duration-200"
            ),
            "aria-label": "Close modal",
            children: /* @__PURE__ */ jsxDEV("div", { className: cn("flex h-4 w-4 items-center justify-center"), children: /* @__PURE__ */ jsxDEV(CloseSvg, {}, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 292,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 291,
              columnNumber: 11
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
            lineNumber: 278,
            columnNumber: 9
          },
          this
        ),
        (appLogo || appName) && /* @__PURE__ */ jsxDEV("div", { className: "flex w-full flex-col items-center gap-2 py-3", children: [
          appLogo && /* @__PURE__ */ jsxDEV("div", { className: cn(border.radius, "h-14 w-14 overflow-hidden"), children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: appLogo,
              alt: `${appName || "App"} icon`,
              className: "h-full w-full object-cover"
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 300,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
            lineNumber: 299,
            columnNumber: 15
          }, this),
          appName && /* @__PURE__ */ jsxDEV(
            "h2",
            {
              className: cn(text.headline, color.foreground, "text-center"),
              children: appName
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 308,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
          lineNumber: 297,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex w-full flex-col gap-3", children: [
          isSignUpEnabled && /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: handleCoinbaseWalletConnection,
              className: cn(
                border.radius,
                text.body,
                pressable.alternate,
                color.foreground,
                "flex items-center justify-between px-4 py-3 text-left"
              ),
              children: [
                "Sign up",
                /* @__PURE__ */ jsxDEV("div", { className: "h-4 w-4", children: defaultAvatarSVG }, void 0, false, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                  lineNumber: 331,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 319,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
            isSignUpEnabled && /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: cn(border.lineDefault, "w-full border-[0.5px]")
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                lineNumber: 338,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 337,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: cn(
                  background.default,
                  color.foregroundMuted,
                  text.legal,
                  "px-2"
                ),
                children: isSignUpEnabled ? "or continue with an existing wallet" : "Connect your wallet"
              },
              void 0,
              false,
              {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                lineNumber: 344,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 343,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
            lineNumber: 335,
            columnNumber: 11
          }, this),
          availableWallets.map((wallet) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: wallet.connector,
              className: cn(
                border.radius,
                background.default,
                text.body,
                pressable.alternate,
                color.foreground,
                "flex items-center justify-between px-4 py-3 text-left"
              ),
              children: [
                wallet.name,
                /* @__PURE__ */ jsxDEV("div", { className: "-mr-0.5 flex h-4 w-4 items-center justify-center", children: wallet.icon }, void 0, false, {
                  fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                  lineNumber: 373,
                  columnNumber: 15
                }, this)
              ]
            },
            wallet.id,
            true,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
              lineNumber: 359,
              columnNumber: 13
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
          lineNumber: 317,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: cn(
              color.foregroundMuted,
              text.legal,
              "flex flex-col items-center justify-center gap-1 px-4",
              "mt-4 text-center"
            ),
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-normal text-[10px] leading-[13px]", children: "By connecting a wallet, you agree to our" }, void 0, false, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                lineNumber: 388,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-normal text-[10px] leading-[13px]", children: [
                termsOfServiceUrl && /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: termsOfServiceUrl,
                    className: cn(color.primary, "hover:underline"),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    tabIndex: 0,
                    children: "Terms of Service"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                    lineNumber: 393,
                    columnNumber: 15
                  },
                  this
                ),
                " ",
                termsOfServiceUrl && privacyPolicyUrl && "and",
                " ",
                privacyPolicyUrl && /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: privacyPolicyUrl,
                    className: cn(color.primary, "hover:underline"),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    tabIndex: 0,
                    children: "Privacy Policy"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                    lineNumber: 405,
                    columnNumber: 15
                  },
                  this
                ),
                "."
              ] }, void 0, true, {
                fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
                lineNumber: 391,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
            lineNumber: 380,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
      lineNumber: 267,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/WalletModal.tsx",
    lineNumber: 266,
    columnNumber: 5
  }, this);
}
export {
  WalletModal
};
//# sourceMappingURL=WalletModal.js.map
