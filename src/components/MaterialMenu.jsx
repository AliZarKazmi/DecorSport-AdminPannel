import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import PeopleIcon from '@mui/icons-material/People';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  }));
  
export default function MaterialMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
       <div className={classes.container}>
      <Tab icon={<PeopleIcon />} label = "" href="/seller-profile"  sx={{color:"purple"}}/>
      <Tab icon={< ProductionQuantityLimitsSharpIcon/>}  href="/product" sx={{color:"red"}}/>
      <Tab icon={< CircleNotificationsIcon/>} label="" href="/query"  sx={{color:"green"}}/>
      </div>
    </Tabs>
  );
}