import React from 'react';

export const PhotoFrame = ({url,title}) => {
    return(
        <div>
            <div className='photoframe'>
                <img src={url} alt="img" />
            </div>
            <div className='caption'>{title}</div>
        </div>
    )
   
}