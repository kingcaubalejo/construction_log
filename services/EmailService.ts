
  export class EmailService {
    static async sendEmail(recipient: string, subject: string, body: string, pdf: Buffer) {
      // Mocked email service
      console.log(`Email sent to ${recipient}: ${subject}`);
    }
  }
  