import { UserEntryEvent } from '../events/UserEntryEvent';
import { GeneratePDFAction } from '../actions/GeneratePDFAction';
import { SendEmailAction } from '../actions/SendEmailAction';

jest.mock('../actions/GeneratePDFAction');
jest.mock('../actions/SendEmailAction');

describe('UserEntryEvent', () => {
  it('should generate a PDF and send an email when a user enters', async () => {
    const mockUserDetails = { name: 'John Doe', id: 123 };
    const mockPDF = Buffer.from('Mock PDF');

    (GeneratePDFAction.execute as jest.Mock).mockResolvedValue(mockPDF);
    (SendEmailAction.execute as jest.Mock).mockResolvedValue(true);

    const event = new UserEntryEvent();
    await event.handle(mockUserDetails);

    expect(GeneratePDFAction.execute).toHaveBeenCalledWith(mockUserDetails);
    expect(SendEmailAction.execute).toHaveBeenCalledWith(mockUserDetails, mockPDF);
  });
});
