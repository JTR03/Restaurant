import React from 'react'

function Categories({cat,btn}) {
    return (
        <div className='btnContainer'>
            {cat.map((gory,ind)=>{
                return(
                    <button
                    key={ind}
                    className='btn'
                    onClick={()=>btn(gory)}>
                        {gory}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories
