'use client';
import { jsxDEV } from "react/jsx-dev-runtime";
import { Transaction } from "../../../../transaction/components/Transaction.js";
import { TransactionButton } from "../../../../transaction/components/TransactionButton.js";
import { useTransactionContext } from "../../../../transaction/components/TransactionProvider.js";
import { TransactionStatus } from "../../../../transaction/components/TransactionStatus.js";
import { TransactionStatusAction } from "../../../../transaction/components/TransactionStatusAction.js";
import { TransactionStatusLabel } from "../../../../transaction/components/TransactionStatusLabel.js";
import { useCallback } from "react";
import { parseUnits } from "viem";
import { base } from "viem/chains";
import { useWalletContext } from "../../WalletProvider.js";
import { defaultSendTxSuccessHandler } from "../utils/defaultSendTxSuccessHandler.js";
import { getSendCalldata } from "../utils/getSendCalldata.js";
import { useSendContext } from "./SendProvider.js";
function SendButton() {
  const { chain: senderChain, isSponsored } = useWalletContext();
  const {
    recipientState,
    cryptoAmount: inputAmount,
    selectedToken,
    updateLifecycleStatus
  } = useSendContext();
  const { calldata, error } = getSendCalldata({
    recipientAddress: recipientState.address,
    token: selectedToken,
    amount: inputAmount
  });
  const disableSendButton = Boolean(error) || !validateAmountInput({
    inputAmount: inputAmount ?? "",
    balance: BigInt((selectedToken == null ? void 0 : selectedToken.cryptoBalance) ?? 0),
    selectedToken: selectedToken ?? void 0
  });
  const buttonLabel = getDefaultSendButtonLabel(inputAmount, selectedToken);
  const handleStatus = useCallback(
    (status) => {
      const validStatuses = [
        "transactionPending",
        "transactionLegacyExecuted",
        "success",
        "error"
      ];
      if (validStatuses.includes(
        status.statusName
      )) {
        updateLifecycleStatus(
          status
        );
      }
    },
    [updateLifecycleStatus]
  );
  return /* @__PURE__ */ jsxDEV(
    Transaction,
    {
      isSponsored,
      chainId: (senderChain == null ? void 0 : senderChain.id) ?? base.id,
      calls: calldata ? [calldata] : [],
      onStatus: handleStatus,
      children: [
        /* @__PURE__ */ jsxDEV(
          SendTransactionButton,
          {
            label: buttonLabel,
            senderChain,
            disabled: disableSendButton
          },
          void 0,
          false,
          {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendButton.tsx",
            lineNumber: 74,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(TransactionStatus, { children: [
          /* @__PURE__ */ jsxDEV(TransactionStatusLabel, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendButton.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(TransactionStatusAction, {}, void 0, false, {
            fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendButton.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendButton.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendButton.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    this
  );
}
function SendTransactionButton({
  label,
  senderChain,
  disabled
}) {
  const { address, setActiveFeature } = useWalletContext();
  const { transactionHash, transactionId } = useTransactionContext();
  const completionHandler = useCallback(() => {
    setActiveFeature(null);
  }, [setActiveFeature]);
  const defaultSuccessOverride = {
    onClick: defaultSendTxSuccessHandler({
      transactionId,
      transactionHash,
      senderChain: senderChain ?? void 0,
      address: address ?? void 0,
      onComplete: completionHandler
    })
  };
  return /* @__PURE__ */ jsxDEV(
    TransactionButton,
    {
      text: label,
      successOverride: defaultSuccessOverride,
      disabled
    },
    void 0,
    false,
    {
      fileName: "/Users/MAC/Documents/Code/onchainkit-react/src/wallet/components/wallet-advanced-send/components/SendButton.tsx",
      lineNumber: 119,
      columnNumber: 5
    },
    this
  );
}
function getDefaultSendButtonLabel(cryptoAmount, selectedToken) {
  if (!cryptoAmount) {
    return "Input amount";
  }
  if (!selectedToken) {
    return "Select token";
  }
  if (parseUnits(cryptoAmount, selectedToken.decimals) > selectedToken.cryptoBalance) {
    return "Insufficient balance";
  }
  return "Continue";
}
function validateAmountInput({
  inputAmount,
  balance,
  selectedToken
}) {
  if (!inputAmount || !selectedToken || !balance) {
    return false;
  }
  const parsedCryptoAmount = parseUnits(inputAmount, selectedToken.decimals);
  return parsedCryptoAmount > 0n && parsedCryptoAmount <= balance;
}
export {
  SendButton
};
//# sourceMappingURL=SendButton.js.map
