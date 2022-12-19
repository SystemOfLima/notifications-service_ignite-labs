import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notification';

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recipient-id-fake-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-id-fake-1' }),
        expect.objectContaining({ recipientId: 'recipient-id-fake-1' }),
      ]),
    );
  });
});
