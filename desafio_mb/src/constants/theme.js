import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
      contrastText: '#c0c0c0',
    },
    text:{
        primary: '#c0c0c0'
    }
  },
});

export default theme