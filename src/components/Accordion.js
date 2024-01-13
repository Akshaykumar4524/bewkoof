import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export default function AccordionUsage({ title, list, show }) {
    return (

        <Accordion
            defaultExpanded
            disableGutters
            elevation={0}
            sx={{
                boxShadow: 'none',
                '&:before': {
                    display: 'none',
                }
            }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                sx={{ padding: '0' }}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0' }}>
                {
                    list?.map((item) => {
                        return (
                            <Grid display={'flex'} gap={'5%'} alignItems={'center'} key={item?.name}>
                                <Checkbox sx={{ padding: '0' }} disabled={!item?.count} />
                                <Typography sx={{ color: !item?.count ? '#b6a8a8' : '', fontSize: 'small' }}>{item?.name}</Typography>
                                <Typography sx={{ fontSize: 'small' }}>{item?.count ? `(${item?.count})` : ''}</Typography>
                            </Grid>)
                    })
                }
                {show &&
                    <Typography sx={{ color: '#25c0e5', textDecoration: 'underline' }}>
                        show
                    </Typography>}
            </AccordionDetails>
            {/* <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
            </AccordionActions> */}
        </Accordion>

    );
}