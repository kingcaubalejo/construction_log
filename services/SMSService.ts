export class SMSService {
    static async sendSMS(phoneNumber: string, message: string) {
      // Mocked SMS service
      console.log(`SMS sent to ${phoneNumber}: ${message}`);
    }
  }