import { EmailService } from '../services/EmailService';

export class SendEmailAction {
  static async execute(userDetails: any, pdf: Buffer) {
    const recipient = 'supervisor@example.com';
    const subject = 'User Entry Report';
    const body = `User ${userDetails.name} has entered the site.`;
    await EmailService.sendEmail(recipient, subject, body, pdf);
  }
}