import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, MenuItem, Button} from '@material-ui/core';

import {MUIIcon} from '../components';
import {DARKPINK_COLOR, PINK_COLOR} from '../../theme';
import {useStyles} from './Submenu.css';

export const Submenu = ({
                     submenuItems = [], withNavLink = true, onLight = true, callback = null,
                     switchIcon = 'More', text = ''
                 }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const linkClass = onLight ? classes.linkDark : classes.link;
    const activeColor = onLight ? DARKPINK_COLOR : PINK_COLOR;
    const convertedItems = submenuItems.map(item => (typeof(item) === 'object' ? item : ({
        'href': item,
        'text': item,
        'key': item
    })));

    const handleClick = evt => {
        evt.preventDefault();
        setAnchorEl(evt.currentTarget);
    };

    const handleClose = (evt, key) => {
        setAnchorEl(null);
        if (callback && key) {
            callback(key);
        }
    };

    return (
        <>
            <Button color={'inherit'} title={text}
                    aria-controls='submenu' aria-haspopup='true' onClick={handleClick}
                    disabled={submenuItems.length === 0}>
                <MUIIcon icon={switchIcon}/>

            </Button>
            <Menu className={classes.submenu}
                  id='submenu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
            >
                {convertedItems.map((link, ind) =>
                    (withNavLink ?
                            <NavLink className={linkClass} key={ind} exact={link.exact} to={link.href}
                                     activeStyle={{color: activeColor}}>
                                <MenuItem key={ind} title={link.text} onClick={() => handleClose(link.key)}>
                                    <MUIIcon icon={link.icon}/>
                                    <span>&nbsp;</span>
                                    <span>{link.text}</span>
                                </MenuItem>
                            </NavLink> :
                            <MenuItem key={ind} title={link.text} onClick={(evt) => handleClose(evt, link.key)}>
                                <MUIIcon icon={link.icon}/>
                                <span>&nbsp;</span>
                                <span>{link.text}</span>
                            </MenuItem>
                    ))}

            </Menu>
        </>
    );
};