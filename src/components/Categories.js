import React from 'react'

function Categories({cat,btn}) {
    return (
        <div>
            {cat.map((gory,ind)=>{
                return(
                    <button
                    key={ind}
                    onClick={()=>btn(gory)}>
                        {gory}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories
