import { SMSService } from '../services/SMSService';

export class SendSMSAction {
  static async execute(userDetails: any) {
    const supervisorPhone = '+1234567890';
    const message = `User ${userDetails.name} has exited the site.`;
    await SMSService.sendSMS(supervisorPhone, message);
  }
}