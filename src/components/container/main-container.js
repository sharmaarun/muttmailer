import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {connect} from "react-redux";
import {toggleSidebar} from "../../actions/sidebar";
import {sideBarVisibility} from "../../actions/actions";
class MainContainer extends React.Component {
    constructor({props}) {
        super(props);
        
    }

    render() {
        const styles={
            appBar: {
                backgroundColor:"#49d473"
            }
        };
        return (
            <div>
                <AppBar style={styles.appBar} position="static">
                <ToolBar>
                    <IconButton onClick={this.props.onClick} aria-label="Menu" color="inherit">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">SimpleMailer</Typography>
                </ToolBar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state, props)=>(
    {
        state
    }
);

const mapDispatchToProps = (dispatch, props) =>(
    {
        onClick: () => (dispatch(toggleSidebar(sideBarVisibility.SHOW)))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);