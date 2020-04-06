import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './add-user-styles.css';
import { FormHelperText } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    button: {
        margin: theme.spacing(1),
    },
    iconButton: {
        width: "50px",
        backgroundColor: "#005082"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 10,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '13ch',
          },
        },
      },
}));

export default function AddUser(props){
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {/* <TextField 
                className="campo-usuario"
                onChange={ props.funcionObtenerPersona } 
                id="outlined-basic" 
                label="Agregar Usuario"
                value={props.nombre} 
                error={props.validacion}
                helperText={props.mensajeError}
                variant="outlined" /> */}
            {/* <TextField 
                className="campo-usuario"
                onChange={ props.funcionObtenerEmail } 
                id="outlined-basic" 
                label="Email"
                value={props.email}
                error={props.validacion}
                helperText={props.mensajeError}
                variant="outlined" /> */}
            {/* <Button
                variant="contained"
                color="primary"
                className={classes.iconButton}
                startIcon={<AddIcon />}
            >
            </Button> */}
            {/* <IconButton
                // variant="contained"
                // color="primary"
                // size="small"
                arial-label="delete"
                className={classes.iconButton}
                // startIcon={<AddIcon />}
                onClick={props.funcionAgregar }
                color="primary"
                >
                <AddIcon />
            </IconButton> */}
            <div className={classes.search} style={{backgroundColor:"#e67e22", color:"white"}}>
                    <InputBase
                        placeholder="Usuario"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        
                        onChange={ props.funcionObtenerPersona } 
                        value={props.nombre} 
                        error={props.validacion}
                        helperText={props.mensajeError}
                    />
            </div>
            <div className={classes.search} style={{backgroundColor:"#e67e22"}}>
                    <InputBase
                        placeholder="Email"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}

                        onChange={ props.funcionObtenerEmail } 
                        value={props.email} 
                        error={props.validacion}
                        helperText={props.mensajeError}
                    />
            </div>
            <Button color="inherit" style={{width:"0px"}}
                    onClick={props.funcionAgregar}>
                        <AddIcon style={{backgroundColor:"#e67e22",border:"solid 1px white", borderRadius:"50%"}}/>
            </Button>
        </form> 
    )
}