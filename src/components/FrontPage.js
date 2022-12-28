import '../App.css';
import { FaBars } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * https://mattfarley.ca/
 * TODO List
 * header - hamburger menu
 * Center Title
 * Dropdown Arrow
 * 
 */


export default function FrontPage() {

    const styles = {
        root: {
            height: '100vh',
            width: '100vw',
        },
        menuBtn: {
            color: '#0D27E7',
            float: 'right',
            position: 'absolute',
            right: '4%',
            top: '4%',
            fontSize: '25px',
        },
    }

    return(
        <Box sx={styles.root}>
           <FaBars style={styles.menuBtn}/>
        </Box>
    )
}