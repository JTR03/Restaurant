import data from './data';
import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';
import Categories from './components/Categories';
 
const allCat = ['all',...new Set(data.map((item)=>item.category))] 

function App() {
  const [items, setItems] = useState(data)

  const fltr = (category)=>{
    if (category === 'all'){
      setItems(data)
      return
    }else{
      const filtered = data.filter((item)=>item.category === category)
      setItems(filtered)
    }
  }

  return (
    <>  
     <div className='container'>
       <Categories cat={allCat} btn={fltr}/>
        <Menu menuItems={items} />
     </div>
     
 
    </>
  );
}

export default App;
