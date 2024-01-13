import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Filter from './Filter';

export default function TemporaryDrawer({ handleClose }) {
    const [state, setState] = React.useState({
        bottom: true
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        handleClose()
    };

    const list = (anchor) => {
        return <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,height:'550px' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Filter/>
        </Box>

    };

    return (
        <Drawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
        >
            {list('bottom')}
        </Drawer>
    );
}