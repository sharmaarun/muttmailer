import { SEND_MAIL, DONE_SENDING } from "./actions";

export const sendMail = (mailOpts) => {
    
    const reqState={
        type: SEND_MAIL,
        mailOpts: mailOpts,
        sendingMail: true
    };
    
    return (reqState);
};

export const doneSending = () => {
    
    const reqState={
        type: DONE_SENDING,
        mailOpts: {},
        sendingMail: false
    };
    
    return (reqState);
};