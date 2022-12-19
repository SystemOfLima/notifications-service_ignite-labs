import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotification } from './count-recipient-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id-fake-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id-fake-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id-fake-2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-id-fake-1',
    });

    expect(count).toEqual(2);
  });
});
