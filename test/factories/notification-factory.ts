import { Content } from '@app/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@app/entities/notification/notifications';

type Overrides = Partial<NotificationProps>;

export function makeNotification(overrides: Overrides = {}) {
  return new Notification({
    category: 'social',
    content: new Content('You have a new test notification 2'),
    recipientId: 'recipient-id-fake-1',
    ...overrides,
  });
}
