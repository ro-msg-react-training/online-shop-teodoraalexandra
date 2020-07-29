import { createMuiTheme } from '@material-ui/core/styles';

// TASK: Change the theme of the Material UI components by switching the primary color to #a01441.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a01441',
        },
    },
});

export default theme;