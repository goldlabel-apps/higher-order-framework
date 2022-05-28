import { AppThunk } from "../../../app/store";
import { setSystemError, setNotification } from "../";

export interface NotificationShape {
  code?: string;
  message: string;
  severity: string;
}

export const notify =
  (notification: NotificationShape): AppThunk =>
  async (dispatch: any) => {
    try {
      if (!notification) {
        dispatch(setNotification(null));
        return;
      }
      const { code, message, severity } = notification;
      dispatch(
        setNotification({
          code,
          message,
          severity,
        })
      );
    } catch (error) {
      dispatch(setSystemError(error));
    }
  };
