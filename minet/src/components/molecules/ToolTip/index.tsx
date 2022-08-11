import  Tooltip from '@mui/material/Tooltip';
import React from 'react';

interface Props {
    text: string
}

const ToolTip = (props: Props) => {
  return (
    <div>
        <Tooltip title={''}></Tooltip>
    </div>
  )
}

export default ToolTip