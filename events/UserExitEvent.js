"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExitEvent = void 0;
const SendSMSAction_1 = require("../actions/SendSMSAction");
class UserExitEvent {
    handle(userDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            // Action: Send SMS
            yield SendSMSAction_1.SendSMSAction.execute(userDetails);
        });
    }
}
exports.UserExitEvent = UserExitEvent;
