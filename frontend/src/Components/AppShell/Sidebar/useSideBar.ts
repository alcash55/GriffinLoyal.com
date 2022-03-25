// import { PrintOutlined } from '@mui/icons-material';
import { useState } from 'react';

const useSideBar = () => {
  const [collapseButton, setCollapseButton] = useState(false);
  collapseButton ? setCollapseButton(false) : setCollapseButton(true);

  return (
    collapseButton
  )
}
export default useSideBar