import { SendSMSAction } from '../actions/SendSMSAction';

export class UserExitEvent {
  async handle(userDetails: any) {
    // Action: Send SMS
    await SendSMSAction.execute(userDetails);
  }
}