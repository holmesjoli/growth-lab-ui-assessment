import './App.css';

import { useState, useEffect } from 'react';
import { nestData } from './components/DataManagement';

import { Area } from './types';
import { OptionGroup } from './components/DropDown';

const url = "https://gist.githubusercontent.com/bleonard33/38a183289ed87082fed7b2547f2eea49/raw/3290b8ea9791c4e632520a9e1849f580bb82346a/census_classification.json"

function App() {

  const [data, setData] = useState<Area[]>([{'id': 0, 'name': '', 'level': '', 'parent': 0, 'children': '' }]);

  useEffect(() => {

    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        setData(nestData(data));
    });

  }, [])

  console.log(data)

  const OptGroup: React.FC<{ area: Area }> = ({ area }) => {
    return <optgroup label={area.name}></optgroup>;
  };
  
  const renderDropDown = () => {
    return data.map(area => {
      return <OptGroup key={area.id} area={area} />;
    });
  };

  return (
    <div className="App">
        <div>
        <select>
          <option>Please select a country</option>
          {renderDropDown()}
        </select>
        </div>
    </div>
  );
}
export default App;
