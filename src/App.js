import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import styles from './styles.module.css'
import bgImage from './img/backCoverImage.jpg'
import logo from './img/Logo.png'
import ReactCardSlider from 'react-card-slider-component'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];
const slides = [
  {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
  {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description"},
  {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",},
  {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",},
  {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",},
  {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",},
  {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
  {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
  {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
  {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
  {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
]


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* <AppBar
      id={styles.navBar}
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            DROPMORE
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5,}}
            >
              Login/Signup
            </Link>
          </nav>
        </Toolbar>
      </AppBar> */}
      <div id={styles.imageContainer}>
        <img id={styles.imageId} src={bgImage} />
      </div>
      <img id={styles.logo} src={logo} />
      <a href='#' id={styles.loginSignUp}>Login / SignUp</a>
      {/* <Container component="main" sx={{ pt: 8, pb: 6}}>
      </Container> */}
      {/* Footer */}
      <ReactCardSlider sx={{marginLeft:'20px'}} slides={slides}/>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}