import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import styles from './verificaclaveunica.module.css';
import queryString from 'query-string';
import { login } from '../../utils';

let message = "Verificando usuario";
let code = "";

const browserHistory = createBrowserHistory();
class VerificaClaveUnica extends React.Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        console.log('values : ', values)
        console.log('code : ', values.code)
        console.log('state : ', values.state)
        if (values.code && values.state) {
            this.message = 'Validando ingreso ...';
            this.code = values.code;
            localStorage.setItem('State', values.state)
            localStorage.setItem('Code', values.code)
            this.setState({ redirect: true })
            login();
        }
    }

    render() {
        console.log('render : ', this.state) // "im"
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={'/dashboard'} />;
        }

        return (
            <div>
                {this.message}
            </div>
        )
    }

}

export default VerificaClaveUnica;