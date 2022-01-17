import data from './data';
import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(data)

  return (
    <div className="App">
    <Menu menuItems={items} />
        
    </div>
  );
}

export default App;
