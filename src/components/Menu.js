import React from 'react'

function Menu({menuItems}) {
    return (
        <div className='menu'>
            {menuItems.map((items)=>{
                const {id,title,price,img,description} = items
                return(
                    <article key={id} className='menuItem'>
                        <img src={img} alt={title} className='image' />
                        <div className='info'>
                            <header>
                                  <h4>
                                {title}
                            </h4>
                            <h4>
                                R {price}
                            </h4>
                            </header>
                          
                            <p>{description}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu
