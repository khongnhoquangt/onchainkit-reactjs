import { jsxDEV } from "react/jsx-dev-runtime";
import { formatFiatAmount } from "../../internal/utils/formatFiatAmount.js";
import { truncateDecimalPlaces } from "../../internal/utils/truncateDecimalPlaces.js";
import { cn, color, text, border } from "../../styles/theme.js";
import { TokenImage } from "./TokenImage.js";
import { useMemo } from "react";
import { formatUnits } from "viem";
function TokenBalance({
  token,
  onClick,
  onActionPress,
  actionText = "Max",
  classNames,
  "aria-label": ariaLabel,
  ...contentProps
}) {
  if (onClick) {
    return /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          type: "button",
          "aria-label": ariaLabel ?? `${token.name} token balance`,
          onClick: () => onClick(token),
          className: cn(
            "flex w-full items-center justify-start gap-4 px-2 py-1",
            classNames == null ? void 0 : classNames.container
          ),
          "data-testid": "ockTokenBalanceButton",
          children: /* @__PURE__ */ jsxDEV(
            TokenBalanceContent,
            {
              token,
              classNames,
              onActionPress,
              ...contentProps
            },
            void 0,
            false,
            {
              fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
              lineNumber: 31,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
          lineNumber: 21,
          columnNumber: 9
        },
        this
      ),
      onActionPress && /* @__PURE__ */ jsxDEV(
        ActionButton,
        {
          actionText,
          onActionPress,
          className: classNames == null ? void 0 : classNames.action
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
          lineNumber: 39,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex w-full items-center justify-start gap-4 px-2 py-1",
        classNames == null ? void 0 : classNames.container
      ),
      "data-testid": "ockTokenBalance",
      children: [
        /* @__PURE__ */ jsxDEV(
          TokenBalanceContent,
          {
            token,
            ...contentProps,
            classNames
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
            lineNumber: 57,
            columnNumber: 7
          },
          this
        ),
        onActionPress && /* @__PURE__ */ jsxDEV(
          ActionButton,
          {
            actionText,
            onActionPress,
            className: classNames == null ? void 0 : classNames.action
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
            lineNumber: 63,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}
function TokenBalanceContent({
  token,
  subtitle,
  showImage = true,
  onActionPress,
  tokenSize = 40,
  classNames
}) {
  var _a;
  const formattedFiatValue = useMemo(
    () => formatFiatAmount({
      amount: token.fiatBalance,
      currency: "USD"
    }),
    [token.fiatBalance]
  );
  const formattedCryptoValue = useMemo(
    () => truncateDecimalPlaces(
      formatUnits(BigInt(token.cryptoBalance), token.decimals),
      3
    ),
    [token.cryptoBalance, token.decimals]
  );
  return /* @__PURE__ */ jsxDEV("div", { className: "grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10", children: showImage && /* @__PURE__ */ jsxDEV(TokenImage, { token, size: tokenSize }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
      lineNumber: 102,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex min-w-0 flex-col text-left", children: [
      /* @__PURE__ */ jsxDEV(
        "span",
        {
          className: cn(
            text.headline,
            color.foreground,
            "overflow-hidden text-ellipsis whitespace-nowrap",
            classNames == null ? void 0 : classNames.tokenName
          ),
          children: (_a = token.name) == null ? void 0 : _a.trim()
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
          lineNumber: 105,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "span",
        {
          className: cn(
            text.label2,
            color.foregroundMuted,
            classNames == null ? void 0 : classNames.tokenValue
          ),
          children: `${formattedCryptoValue} ${token.symbol} ${subtitle ?? ""}`
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
          lineNumber: 115,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: !onActionPress && /* @__PURE__ */ jsxDEV(
      "span",
      {
        className: cn(
          text.label2,
          color.foregroundMuted,
          "whitespace-nowrap",
          classNames == null ? void 0 : classNames.fiatValue
        ),
        children: formattedFiatValue
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
        lineNumber: 127,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
function ActionButton({
  actionText,
  onActionPress,
  className
}) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      "data-testid": "ockTokenBalanceAction",
      "aria-label": actionText,
      onClick: onActionPress,
      className: cn(
        text.label2,
        color.primary,
        border.radius,
        "cursor-pointer p-0.5 font-bold",
        "border border-transparent hover:border-[--ock-line-primary]",
        "-translate-y-1/2 absolute top-1/2 right-2",
        className
      ),
      children: actionText
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/token/components/TokenBalance.tsx",
      lineNumber: 151,
      columnNumber: 5
    },
    this
  );
}
export {
  TokenBalance
};
//# sourceMappingURL=TokenBalance.js.map
