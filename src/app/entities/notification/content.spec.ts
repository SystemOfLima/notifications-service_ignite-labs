import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You have a new friends notification');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('SOS')).toThrow();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('SOS'.repeat(241))).toThrow();
  });
});
