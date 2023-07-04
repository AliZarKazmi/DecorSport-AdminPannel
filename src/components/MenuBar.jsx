import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  }));
  
export default function MenuBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
       <div className={classes.container}>
       <Tab icon={< AdminPanelSettingsIcon/>} label="" href="/account-verification"  sx={{color:"orange"}} title="Verification"/>
      <Tab icon={<PeopleIcon />} label = "" href="/seller-profile"  sx={{color:"purple"}} title="Profile"/>
      <Tab icon={< LightbulbCircleIcon/>}  href="/product" sx={{color:"red"}} title="Posts"/>
      <Tab icon={< QueryStatsIcon/>} label="" href="/query"  sx={{color:"green"}} title="Query"/>
      </div>
    </Tabs>
  );
}