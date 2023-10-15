import './App.css';

import { useState, useEffect } from 'react';

import { Area, AreaData } from './types';

const url = "https://gist.githubusercontent.com/bleonard33/38a183289ed87082fed7b2547f2eea49/raw/3290b8ea9791c4e632520a9e1849f580bb82346a/census_classification.json"

function App() {

  const [data, setData] = useState({});

  useEffect(() => {

    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => {

        let regionData: AreaData[] = [];

        for (let r of data.filter((d: any) => d.level === "region")) {

          let stateData: AreaData[] = [];

          for (let s of data.filter((d: any) => d.level === "state" && d.parent == r.id)) {

            stateData.push(
              {'id': s.id,
              'name': s.name,
              'level': s.level,
              'children': data.filter((d: any) => d.parent === s.id)}
              )

          }

          regionData.push(
            {'id': r.id,
            'name': r.name,
            'level': r.level,
            'children': stateData}
            )
        }

        console.log(regionData)
        setData(data);
    });

  }, [])

  return (
    <div className="App">
  
    </div>
  );
}
export default App;
