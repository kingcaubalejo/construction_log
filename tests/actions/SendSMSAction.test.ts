import { SendSMSAction } from '../../actions/SendSMSAction';
import { SMSService } from '../../services/SMSService';

jest.mock('../../services/SMSService');

describe('SendSMSAction', () => {
  it('should send an SMS notification', async () => {
    const mockUserDetails = { name: 'Jane Doe', id: 456 };
    
    (SMSService.sendSMS as jest.Mock).mockResolvedValue(true);

    await SendSMSAction.execute(mockUserDetails);

    expect(SMSService.sendSMS).toHaveBeenCalledWith(
      '+1234567890',
      'User Jane Doe has exited the site.'
    );
  });
});