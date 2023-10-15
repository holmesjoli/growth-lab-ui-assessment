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

        let regions = data.filter((d:any) => d.parent === null);
        let states = data.filter((d:any) => regions.map((d: any) => d.id).includes(d.parent));
        let counties = data.filter((d:any) => states.map((d: any) => d.id).includes(d.parent));

        console.log(data)
        console.log(regions)
        console.log(states)
        console.log(counties)

        let areaData: AreaData[] = [];

        for (let i of data.filter((d: any) => d.level === "region")) {

          let n = i.name;

          areaData.push({'id': i.id,
                        'name': i.name,
                        'level': i.level,
                        'children': data.filter((d: any) => d.parent === i.id)})


        }

        console.log(areaData)
        setData(data);
    });

  }, [])

  return (
    <div className="App">
  
    </div>
  );
}
export default App;
