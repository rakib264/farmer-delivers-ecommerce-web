import React, { useState } from 'react';
import { Clear } from '@material-ui/icons';

const TopBar = () => {
    const [topbarStyle, setTopbarStyle] = useState("container mx-auto bg-indigo-700 py-2 flex items-center justify-center ")
    const handleCloseBtn = () => {
        setTopbarStyle(topbarStyle + " hidden")
    }
  return (
    <div className={topbarStyle}>
        <h1 className='text-lg text-white font-semibold mr-2'>Hurry Up! It's 40% OFF NOW</h1>
        <Clear className='text-lg text-white font-semibold cursor-pointer rounded-full border border-white' onClick={handleCloseBtn} />
    </div>
  )
}

export default TopBar;