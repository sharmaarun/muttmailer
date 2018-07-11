import { SEND_MAIL, DONE_SENDING } from "../actions/actions";


const sendMail = (state = { mailOpts: {}, sendingMail: false }, action) => {

    switch (action.type) {
        case SEND_MAIL:
            return { ...state, mailOpts: action.mailOpts, sendingMail: action.sendingMail };
        case DONE_SENDING:
            return { ...state, mailOpts: action.mailOpts, sendingMail: action.sendingMail }
        default:
            return state;
    }
};

export default sendMail;