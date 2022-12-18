import { Notification } from '../entities/notification/notifications';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
