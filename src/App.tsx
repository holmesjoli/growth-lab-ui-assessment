import './App.css';

import { useState, useEffect } from 'react';
import { nestData } from './components/DataManagement';

import { Area } from './types';

const url = "https://gist.githubusercontent.com/bleonard33/38a183289ed87082fed7b2547f2eea49/raw/3290b8ea9791c4e632520a9e1849f580bb82346a/census_classification.json"

function App() {

  const [data, setData] = useState<Area[]>([]);

  useEffect(() => {

    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        setData(nestData(data));
    });

  }, [])

  // console.log(data)

  const Opt: React.FC<{ opt: Area }> = ({ opt }) => {
    return <option value={opt.id}>{opt.name}</option>;
  };

  const OptGroup: React.FC<{ area: Area }> = ({ area }) => {
    return <optgroup className="region" label={area.name}>{area.name} {
      area.children.map((opt: any) => {
        return <option value={opt.id}>{opt.name}</option>
      })
    }
    </optgroup>;
  };

  const renderDropDown = () => {
    return data.map(area => {
      return <OptGroup key={area.id} area={area} />;
    });
  };

  return (
    <div className="App">
        <div className="Dropdown">
        <select>
          <option>Please select a country</option>
          {renderDropDown()}
        </select>
        </div>
    </div>
  );
}

export default App;
