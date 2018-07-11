import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { sendMail, doneSending } from "../../actions/sendmail";

const styles = themes => ({
    container: {
        display: "flex",
        flexWrap: "wrap",

    },
    col: {
        flex: 1,

        padding: "3% 3%"
    },
    col2: {
        flex: 2,
        padding: "3% 3%",
        width: "80%",
        margin: "0px auto"
    },
    textField: {
        marginLeft: themes.spacing.unit,
        marginRight: themes.spacing.unit,
        marginTop: themes.spacing.unit,
        width: "100%"
    }

});

const SendMail = ({ classes, onSend, sentMail, mailOpts, sendingMail }) => {
    if(sendingMail) {
        setTimeout(()=>{
            sentMail();
        },5000);
    }
    
    return (
        <div>
            <LinearProgress color="secondary" hidden={!sendingMail} />
            <form className={classes.container} noValidate autoComplete="off">
                <div className={classes.col}>
                    <TextField
                        id="name"
                        label="Borrower's Name"
                        margin="normal"
                        className={classes.textField}
                        
                    /><br />
                    <TextField
                        id="amount"
                        label="Amount"
                        margin="normal"
                        className={classes.textField}
                        placeholder="$#### for ## months"
                        defaultValue=""
                    />
                    <TextField
                        id="agentPhone"
                        label="Agent Phone"
                        margin="normal"
                        className={classes.textField}
                        placeholder="(333-333-3333)"
                        defaultValue=""
                    />
                    <TextField
                        id="duration"
                        label="EMI Duration"
                        margin="normal"
                        className={classes.textField}
                        placeholder="##"
                        defaultValue=""
                    />

                </div>
                <div className={classes.col}>
                    <TextField
                        id="email"
                        label="Borrower's Email"
                        margin="normal"
                        className={classes.textField}
                    />
                    <TextField
                        id="emi"
                        label="EMI"
                        margin="normal"
                        className={classes.textField}
                    />
                    <TextField
                        id="agentName"
                        label="Agent's Name"
                        margin="normal"
                        className={classes.textField}
                    />
                </div>

            </form>
            <div className={classes.container}>
                <div className={classes.col2}>
                    <Button disabled={sendingMail} onClick={onSend} variant="outlined" color="primary" >Send</Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return ({
        ...state.sendMail
    })
};

const mapDispatchToProps = (dispatchEvent, oProps) => {

    return ({
        onSend: () => {
            const mailOpts = {
                name: document.getElementById("name").value || "",
                amount: document.getElementById("amount").value || "",
                email: document.getElementById("email").value || "",
                agentPhone: document.getElementById("agentPhone").value || "",
                emi: document.getElementById("emi").value || "",
                agentName: document.getElementById("agentName").value || "",
                duration: document.getElementById("duration").value || "",
            };
            dispatchEvent(sendMail(mailOpts));
        },
        sentMail: () => dispatchEvent(doneSending())
    });
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SendMail));