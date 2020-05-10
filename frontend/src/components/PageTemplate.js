import React from 'react';
import Grid from "@material-ui/core/Grid";

const PageTemplate = ({NavbarComponent = undefined, ...props}) => {

    return (
        <div>
            <Grid container direction='column'>
                <Grid container direction='row'>
                    <Grid container item xs={6} alignItems="center">
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
