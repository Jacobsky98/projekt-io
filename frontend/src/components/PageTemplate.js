import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import './PageTemplate.scss'

const PageTemplate = ({NavbarComponent = undefined, ...props}) => {
    const loginAsStyles = {
        textAlign: 'right',
    };
    const mapState = (state) => ({
        userData: state.auth.userData,
    });

    let {
        userData,
    } = useSelector(mapState);

    return (
        <div className='page'>
            <Grid container direction='column'>
                <Grid container alignItems='flex-end'>
                    <Grid item xs={12} style={loginAsStyles}>
                        ZALOGOWANO JAKO: {`${userData.name} ${userData.surname} (${userData.role})`}
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                    <Grid item xs={6}>
                        <h1>DZIENNIK ELEKTRONICZNY</h1>
                    </Grid>
                    <Grid item xs={6} >
                        {NavbarComponent && <NavbarComponent />}
                    </Grid>
                </Grid>
                <div>
                    {props.children}
                </div>
            </Grid>
        </div>
    );
};

export {
    PageTemplate
}
