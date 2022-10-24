import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState, useContext } from 'react';
import { StoreContext } from '@store/store.context';
import { Link, useNavigate } from 'react-router-dom';

export const AppHeader = () => {
  const [value, setValue] = useState('my books');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { authStore } = useContext(StoreContext);
  const navigate = useNavigate();

  const logOut = () => {
    authStore.logOut();
    navigate('/auth');
  };

  return (
    <BottomNavigation showLabels sx={{ justifyContent: 'space-around' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        component={Link}
        to='/search'
        label='Search book'
        value='search book'
        icon={<SavedSearchIcon />}
      />
      <BottomNavigationAction component={Link} to={'/'} label='My books' value='my books' icon={<StarOutlineIcon />} />
      <BottomNavigationAction label='Logout' value='logout' icon={<ExitToAppIcon />} onClick={logOut} />
    </BottomNavigation>
  );
};
