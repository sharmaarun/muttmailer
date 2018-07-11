import { SEND_MAIL, DONE_SENDING } from "./actions";
import 'whatwg-fetch';
export const sendMail = (mailOpts) => {

    const reqState = {
        type: SEND_MAIL,
        mailOpts: mailOpts,
        sendingMail: true
    };
    return (dispatch)=>{
        fetch('http://easyfastloans.co:8000/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailOpts)
        }).then((res)=>{
            console.log(res);
        }).then((res)=>{
            return dispatch(doneSending());
            
        }).catch((ex)=>{
            console.log("error");
        });
    }
    

    
};

export const doneSending = () => {

    const reqState = {
        type: DONE_SENDING,
        mailOpts: {},
        sendingMail: false
    };

    return (reqState);
};