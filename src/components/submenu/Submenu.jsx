import React, {useState} from 'react';
import {navigate, usePath} from 'hookrouter';
import {Button, Menu, MenuItem} from '@material-ui/core';

import MUIIcon from '../icon/MUIIcon';
import {DARKPINK_COLOR} from '../../theme';
import {useStyles} from '../../App.css';

const Submenu = ({
                     submenuItems = [], withNavLink = true, onLight = true, callback = null,
                     switchIcon = 'More', text = ''
                 }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const path = usePath();
    const classes = useStyles();

    const convertedItems = submenuItems.map(item => (typeof (item) === 'object' ? item : ({
        'href': item,
        'text': item,
        'key': item
    })));

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (key) => {
        setAnchorEl(null);
        if (callback && key) {
            callback(key);
        }
    };

    const handleCloseNavigate = (href) => {
        setAnchorEl(null);
        navigate(href);
    };

    const handleCloseCommon = (link, withNavLink) => (
        withNavLink ? handleCloseNavigate(link['href']) : handleClose(link['key'])
    );

    return (
        <>
            <Button color={'inherit'}
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
                    <MenuItem key={ind} title={link.text} onClick={() => handleCloseCommon(link, withNavLink)}>
                        <MUIIcon icon={link.icon}/>
                        <span>&nbsp;</span>
                        <span style={{color: path === link['href'] ? DARKPINK_COLOR : 'inherit'}}>{link.text}</span>
                    </MenuItem>
                )}

            </Menu>
        </>
    );
};

export default Submenu;