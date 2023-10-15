import './App.css';

import { useState, useEffect } from 'react';
import { nestData } from './components/DataManagement';

const url = "https://gist.githubusercontent.com/bleonard33/38a183289ed87082fed7b2547f2eea49/raw/3290b8ea9791c4e632520a9e1849f580bb82346a/census_classification.json"

function App() {

  const [data, setData] = useState({});

  useEffect(() => {

    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        setData(nestData(data));
    });

  }, [])

  console.log(data)

  return (
    <div className="App">
  
    </div>
  );
}
export default App;
