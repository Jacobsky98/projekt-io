import React, { useState, useEffect, useCallback } from 'react';
import { clearError } from '../store/actions/global';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid white',
    padding: theme.spacing(2, 4, 3),
    width: '60%',
  },
  width: {
    width: '100%',
    marginBottom: '20px',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
  },
}));

export const withError = (WrappedComponent) => {
  return (props) => {
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.global.error);
    const classes = useStyles();

    useEffect(() => {
      if (error) {
        setIsError(true);
      }
    }, [error]);

    const clearErr = useCallback(() => {
      setIsError(false);
      dispatch(clearError());
    }, [error]);

    return (
      <>
        <Modal
          className={classes.modal}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isError}
          onClose={() => clearErr()}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 350 }}
        >
          <Fade className={classes.modalContent} in={isError}>
            <>
              <Grid item>
                {isError && <p onClick={() => clearErr()}>{error}</p>}
              </Grid>
            </>
          </Fade>
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};
