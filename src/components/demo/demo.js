import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { connect } from 'react-redux';
import { toggleSidebar } from "../../actions/sidebar";
import { sideBarVisibility } from "../../actions/actions";
import MainContainer from "../container/main-container";
import {Link} from "react-router-dom";

const Demo = ({ barState, onClick }) => {
    console.log(barState);
    return (
        <div>
            <Drawer open={barState} onClose={onClick} >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={onClick}
                >
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Send Mail" />
                    </ListItem>
                    </Link>
                    <Link to="/template">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Templates" />
                    </ListItem>
                    </Link>
                </div>
            </Drawer>
            <div>
                {/*main container */}
                {/*<MainContainer />*/}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ 
    ...state.sidebar
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(toggleSidebar(sideBarVisibility.HIDE))
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);