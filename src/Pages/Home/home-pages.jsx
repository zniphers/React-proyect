import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

//Dependencias app bar 
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

//Dependencias iconos
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

//Dependencias drawer 
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Dependencias Colapso de menus en drawer
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

// Dependencias de React-Router
import {Link, BrowserRouter} from "react-router-dom";

//Dependencias componentes contenido para la pagina
import ContenidoPesonal from './Contenido-personal/contenido-personal';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      fulllist:{
        width: 'auto',
    },
    hide: {
        display: 'none',
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
    nested: {
        paddingLeft: theme.spacing(4),
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    list:{
        width: 270,
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
    title: {
      flexGrow: 1,
      //display: 'none',
      //[theme.breakpoints.up('sm')]: {
       display: 'block',
      //},
    },
  }));


export default function Header(){
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
      };

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >

            <List >
              <ListItem alignItems= 'center' disabled= "false" >
                <ListItemText primary="Menu Principal" />
              </ListItem>
          </List>

            <Divider />
            <List>
            
              <Link to="/Home" style={{ color: "Black", textDecoration: "none"}}>
                <ListItem>
                  <ListItemIcon>
                      <HomeWorkOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/Proyecto-to-do" style={{ color: "Black", textDecoration: "none"}}>
              <ListItem>
                  <ListItemIcon>
                      <FormatListBulletedOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Proyecto To-Do" />
                </ListItem>
              </Link>
              <Link to="/Proyecto-Panel-Tarjetas" style={{ color: "Black", textDecoration: "none"}}>
              <ListItem>
                  <ListItemIcon>
                      <ViewModuleOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Proyecto Panel Tarjetas" />
                </ListItem>
              </Link>
              <Link to="/Datasheet" style={{ color: "Black", textDecoration: "none"}}>
              <ListItem>
                  <ListItemIcon>
                      <ListAltOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Datasheet" />
                </ListItem>
              </Link>

            </List>
          <Divider />
          


        </div>
      );
    

    return(
        <Container fluid="true" style={{backgroundColor:"rgb(240,240,240)"}}>
            <AppBar position="static" color="inherit" 
            style={{backgroundColor: '#3498db'}}
            >
                <Toolbar>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={toggleDrawer(anchor, true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                        </React.Fragment>
                    ))}

                <Typography variant="h6" className={classes.title}>
                    Menu Principal
                </Typography>                
                </Toolbar>
            </AppBar>
            <ContenidoPesonal />
        </Container>
    );
}