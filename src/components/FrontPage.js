import '../App.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grow from '@mui/material/Grow';
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
            right: '2.5%',
            top: '2%',
        },
        menuBtns: {
            display: 'flex',
            flexDirection: 'row',
            color: '#0D27E7',
            //color: '#5BE9B9',
            float: 'right',
            fontSize: '25px',
        },
        titleStack: {
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '140%',
        }
    }

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

                        <Grow
                            in={checked}
                            style={{ transformOrigin: 'right' }}
                            {...(checked ? { timeout: 1000 } : {})}
                            >
                            <p>ABCD</p>
                        </Grow>
                        
                        <Grow
                            in={checked}
                            style={{ transformOrigin: 'right' }}
                            {...(checked ? { timeout: 2000 } : {})}
                            >
                            <p>EFGH</p>
                        </Grow>

                        <Grow
                            in={checked}
                            style={{ transformOrigin: 'right' }}
                            {...(checked ? { timeout: 3000 } : {})}
                            >
                            <p>IJKL</p>
                        </Grow>

                        <IconButton aria-label='Menu' onClick={handleChange} sx={{ color: '#0D27E7'}}>
                            <FaBars/>
                        </IconButton>

                    </Box>
                   
                </Box>
                

                
                

                <Stack spacing={2} sx={styles.titleStack}>
                    <Typography variant='h3' sx={{ paddingBottom: '1%', fontSize: '3rem'}}>Richard Jean-Baptiste</Typography>
                    <Typography variant='h4' sx={{ paddingBottom: '5%', fontSize:'2rem'}}> Software Developer</Typography>
                    <Box sx={{ borderRadius: '50%', backgroundColor: '#5BC0EB'}}>
                        <Avatar alt='Richard Jean-Baptiste' src={BlackAvatar} sx={{ width: 200, height: 200, }}/>
                    </Box>

                    <img src={WorkSpace1} alt={WorkSpace2} width="860" height="400"/>
                </Stack>
            
               
            </Box>
        </ThemeProvider>
        
    )
}

/**
 * import { Grow, Transition } from '@material-ui/core';

function Example() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <Transition in={isVisible} timeout={300} unmountOnExit>
      <Grow>
        <div>
          <p>This element will fade out when the button is clicked</p>
          <button onClick={handleClick}>Click me</button>
        </div>
      </Grow>
    </Transition>
  );
}

 * 
 * 
 */