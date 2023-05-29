import { NotificationEnum } from "@/enums/notification-status.enum";
import { NotificationType } from "@/types/app.types";

export interface StateTypes {
  snackBarNotification: NotificationType;
}

export const state: StateTypes = {
  snackBarNotification: {
    show: false,
    message: "",
    type: NotificationEnum.SUCCESS,
  },
};

export type State = typeof state;
