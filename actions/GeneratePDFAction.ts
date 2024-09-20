import { PDFService } from '../services/PDFService';

export class GeneratePDFAction {
  static async execute(userDetails: any): Promise<Buffer> {
    return PDFService.generate(userDetails);
  }
}
