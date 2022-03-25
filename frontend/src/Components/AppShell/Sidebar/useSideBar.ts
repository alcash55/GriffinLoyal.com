import { PrintOutlined } from '@mui/icons-material';
import {useState} from 'react';

const useSideBar = () => {
    const [menuButton,setMenuButton] = useState(false);
    if (menuButton) {
        setMenuButton(!menuButton);
        console.log('yeet')
      } else {
        setMenuButton(!menuButton);
        console.log('yeet')
      }
    return (
        menuButton
    )
}


export default useSideBar