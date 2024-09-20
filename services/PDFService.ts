export class PDFService {
    static async generate(userDetails: any): Promise<Buffer> {
      // Mocked PDF generation
      return Buffer.from('Mock PDF Content');
    }
  }
