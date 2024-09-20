import { UserExitEvent } from '../events/UserExitEvent';
import { SendSMSAction } from '../actions/SendSMSAction';

jest.mock('../actions/SendSMSAction');

describe('UserExitEvent', () => {
  it('should send an SMS when a user exits', async () => {
    const mockUserDetails = { name: 'Jane Doe', id: 456 };

    (SendSMSAction.execute as jest.Mock).mockResolvedValue(true);

    const event = new UserExitEvent();
    await event.handle(mockUserDetails);

    expect(SendSMSAction.execute).toHaveBeenCalledWith(mockUserDetails);
  });
});
