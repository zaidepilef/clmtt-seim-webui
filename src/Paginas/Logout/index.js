import React from "react";
import { Redirect } from 'react-router';
import { logout } from '../../utils';

class Logout extends React.Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        logout();
    }

    render() {
        return <Redirect to={'/dashboard'} />;
    }
}

export default Logout;