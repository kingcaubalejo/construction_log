import { GeneratePDFAction } from '../actions/GeneratePDFAction';
import { SendEmailAction } from  '../actions/SendEmailAction';

export class UserEntryEvent {
    async handle(userDetails: any) {
        const pdf = await GeneratePDFAction.execute(userDetails);
        await SendEmailAction.execute(userDetails, pdf);
    }
}