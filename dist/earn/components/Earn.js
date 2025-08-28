'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Tabs } from "../../internal/components/tabs/Tabs.js";
import { Tab } from "../../internal/components/tabs/Tab.js";
import { TabsList } from "../../internal/components/tabs/TabsList.js";
import { TabContent } from "../../internal/components/tabs/TabContent.js";
import { useTheme } from "../../internal/hooks/useTheme.js";
import { cn, border } from "../../styles/theme.js";
import { EarnDeposit } from "./EarnDeposit.js";
import { EarnProvider, useEarnContext } from "./EarnProvider.js";
import { EarnWithdraw } from "./EarnWithdraw.js";
function EarnDefaultContent() {
  const { refetchWalletBalance, refetchDepositedBalance } = useEarnContext();
  return /* @__PURE__ */ jsxDEV(Tabs, { defaultValue: "deposit", children: [
    /* @__PURE__ */ jsxDEV(TabsList, { children: [
      /* @__PURE__ */ jsxDEV(
        Tab,
        {
          value: "deposit",
          onClick: refetchWalletBalance,
          className: "rounded-tl-[calc(var(--ock-border-radius)_-_1px)]",
          children: "Deposit"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
          lineNumber: 16,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Tab,
        {
          value: "withdraw",
          onClick: refetchDepositedBalance,
          className: "rounded-tr-[calc(var(--ock-border-radius)_-_1px)]",
          children: "Withdraw"
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
          lineNumber: 23,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      TabContent,
      {
        value: "deposit",
        className: cn(
          border.lineDefault,
          "!border-l-0 !border-b-0 !border-r-0"
        ),
        children: /* @__PURE__ */ jsxDEV(EarnDeposit, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      TabContent,
      {
        value: "withdraw",
        className: cn(
          border.lineDefault,
          "!border-l-0 !border-b-0 !border-r-0"
        ),
        children: /* @__PURE__ */ jsxDEV(EarnWithdraw, {}, void 0, false, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Earn({
  children = /* @__PURE__ */ jsxDEV(EarnDefaultContent, {}, void 0, false, {
    fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
    lineNumber: 54,
    columnNumber: 14
  }, this),
  className,
  vaultAddress,
  isSponsored,
  onError,
  onStatus,
  onSuccess
}) {
  const componentTheme = useTheme();
  return /* @__PURE__ */ jsxDEV(
    EarnProvider,
    {
      vaultAddress,
      isSponsored,
      onError,
      onStatus,
      onSuccess,
      children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: cn(
            componentTheme,
            "flex w-[375px] flex-col overflow-hidden",
            border.radius,
            border.lineDefault,
            className
          ),
          children
        },
        void 0,
        false,
        {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
          lineNumber: 71,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/earn/components/Earn.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  );
}
export {
  Earn
};
//# sourceMappingURL=Earn.js.map
