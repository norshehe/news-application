import { NotificationEnum } from "@/enums/notification-status.enum";

export interface NotificationType {
  show: boolean;
  message?: string;
  type: NotificationEnum;
}

export interface DocumentTitle {
  title: string;
}
