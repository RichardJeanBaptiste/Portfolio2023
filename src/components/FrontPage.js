import '../App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grow from '@mui/material/Grow';
import Hamburger from 'hamburger-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BlackAvatar from '../assets/black-avatar-3025348_1280.png';
import WorkSpace1 from '../assets/hero-devices.svg';
import WorkSpace2 from '../assets/workspace2.jpg';


/**
 * Fun Features to eventually implement
 * 
 * 3D image profile that follows cursor
 */

/**
 * https://coolors.co/d14081-ef798a-f7f6b6-0d27e7-5bc0eb
 * https://mattfarley.ca/
 * TODO List
 * 
 * colors
 *      - #5BE9B9 - lightblue
 *      - 
 * 
 * Get higher quality prof pic
 * 
 */


const theme = createTheme({
    typography: {
        fontFamily: 'Andika, sans-serif',
    },
    Button: {
        size:{xs: 10}
    }
})




export default function FrontPage() {

    const styles = {
        root: {
            height: '100vh',
            width: '100vw',
        }, 
        menuBox: {
            position: 'absolute',
            right: '0.8%',
            top: '2%',
            width: '20em',
        },
        menuBtns: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            fontSize: '20px',
        },
        menuBtns2: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: { xs: '3.5%'},
            marginLeft: '-20%',
            paddingRight: '3%',
        },
        linkStyle: {
            fontSize: {xs: '15px'},
        },
        titleStack: {
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '140%',
            marginTop: '-8em'
        },
        title1: {
            paddingBottom: '1%',
            fontSize: {xs:'1.5rem', lg: '3rem'}
        },
        title2: {
            paddingBottom: {xs: '10%'},
            fontSize: {xs: '1.3rem', lg: '2rem'}
        },
        avatar: {
            width: {xs: 120 , lg: 200},
            height: {xs: 120, lg: 200}
        }
    }

    //const [isOpen, setOpen] = useState(false);
    const [ checked, setChecked ] = useState(false);
    
    const handleChange = () => {
        setChecked((checked) => !checked);
        console.log(checked);
    }

    return(
        <ThemeProvider theme={theme}>
            <Box sx={styles.root}>

                <Box sx={styles.menuBox}>
                    <Box sx={styles.menuBtns}>
                        
                        <Box sx={styles.menuBtns2}>
                            <Grow 
                                in={checked}
                                exit={true}
                                style={{ transformOrigin: 'right', paddingRight: '12px' }}
                                {...(checked ? { timeout: { enter: 1000, exit: 2000} } : {})}
                                >
                                <Link href='#' underline='hover' sx={styles.linkStyle}>About</Link>
                            </Grow>
                            
                            <Grow
                                in={checked}
                                style={{ transformOrigin: 'right', paddingRight: '12px' }}
                                {...(checked ? { timeout: 2000 } : {})}
                                >
                                <Link href='#' underline='hover'sx={styles.linkStyle}>Works</Link>
                            </Grow>

                            <Grow
                                in={checked}
                                style={{ transformOrigin: 'right', paddingRight: '4px'}}
                                {...(checked ? { timeout: 3000 } : {})}
                                >
                                <Link href='#' underline='hover'sx={styles.linkStyle}>Contact Me</Link>
                            </Grow>
                        </Box>
                        

                        <Hamburger rounded color='#0D27E7' size={20} direction='left' onToggle={toggled => {
                            handleChange();
                        }}/>

                    </Box>
                   
                </Box>
                

                
                

                <Stack spacing={2} sx={styles.titleStack}>
                    <Typography variant='h3' sx={styles.title1}>Richard Jean-Baptiste</Typography>
                    <Typography variant='h4' sx={styles.title2}> Software Developer</Typography>
                    <Box sx={{ borderRadius: '50%', backgroundColor: '#5BC0EB'}}>
                        <Avatar alt='Richard Jean-Baptiste' src={BlackAvatar} sx={styles.avatar}/>
                    </Box>

                    <img src={WorkSpace1} alt={WorkSpace2} className="avatarImage"/>
                    
                </Stack>
            
               
            </Box>
        </ThemeProvider>
        
    )
}
