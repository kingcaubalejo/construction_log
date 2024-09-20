import { GeneratePDFAction } from '../../actions/GeneratePDFAction';
import { PDFService } from '../../services/PDFService';

jest.mock('../../services/PDFService');

describe('GeneratePDFAction', () => {
  it('should generate a PDF from user details', async () => {
    const mockUserDetails = { name: 'John Doe', id: 123 };
    const mockPDF = Buffer.from('Mock PDF');

    (PDFService.generate as jest.Mock).mockResolvedValue(mockPDF);

    const result = await GeneratePDFAction.execute(mockUserDetails);

    expect(PDFService.generate).toHaveBeenCalledWith(mockUserDetails);
    expect(result).toBe(mockPDF);
  });
}); 