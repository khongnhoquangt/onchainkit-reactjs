import { useRef, useCallback, useEffect } from "react";
import { useFundContext } from "../components/FundCardProvider.js";
import { FUND_BUTTON_RESET_TIMEOUT } from "../constants.js";
import { setupOnrampEventListeners } from "../utils/setupOnrampEventListeners.js";
const useFundCardSetupOnrampEventListeners = () => {
  const { setSubmitButtonState, updateLifecycleStatus } = useFundContext();
  const timeoutRef = useRef(null);
  const scheduleFundButtonReset = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSubmitButtonState("default");
    }, FUND_BUTTON_RESET_TIMEOUT);
  }, [setSubmitButtonState]);
  const handleOnrampEvent = useCallback(
    (data) => {
      if (data.eventName === "transition_view") {
        updateLifecycleStatus({
          statusName: "transactionPending",
          statusData: void 0
        });
      } else if (data.eventName === "error") {
        updateLifecycleStatus({
          statusName: "error",
          statusData: data.error
        });
        setSubmitButtonState("error");
        scheduleFundButtonReset();
      }
    },
    [updateLifecycleStatus, setSubmitButtonState, scheduleFundButtonReset]
  );
  const handleOnrampSuccess = useCallback(
    (data) => {
      updateLifecycleStatus({
        statusName: "transactionSuccess",
        statusData: data
      });
      setSubmitButtonState("success");
      scheduleFundButtonReset();
    },
    [updateLifecycleStatus, setSubmitButtonState, scheduleFundButtonReset]
  );
  const handleOnrampExit = useCallback(() => {
    setSubmitButtonState("default");
    updateLifecycleStatus({
      statusName: "exit",
      statusData: void 0
    });
  }, [updateLifecycleStatus, setSubmitButtonState]);
  useEffect(() => {
    const unsubscribe = setupOnrampEventListeners({
      onEvent: handleOnrampEvent,
      onExit: handleOnrampExit,
      onSuccess: handleOnrampSuccess
    });
    return () => {
      unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
};
export {
  useFundCardSetupOnrampEventListeners
};
//# sourceMappingURL=useFundCardSetupOnrampEventListeners.js.map
