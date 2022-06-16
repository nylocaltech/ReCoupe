import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  container: { 
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6)
  }
}));

export default useStyles;