import { SendEmailAction } from '../../actions/SendEmailAction';
import { EmailService } from '../../services/EmailService';

jest.mock('../../services/EmailService');

describe('SendEmailAction', () => {
  it('should send an email with the PDF attachment', async () => {
    const mockUserDetails = { name: 'John Doe', id: 123 };
    const mockPDF = Buffer.from('Mock PDF');

    (EmailService.sendEmail as jest.Mock).mockResolvedValue(true);

    await SendEmailAction.execute(mockUserDetails, mockPDF);

    expect(EmailService.sendEmail).toHaveBeenCalledWith(
      'supervisor@example.com',
      'User Entry Report',
      'User John Doe has entered the site.',
      mockPDF
    );
  });
});