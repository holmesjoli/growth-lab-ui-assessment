import './App.css';

const url = "https://gist.githubusercontent.com/bleonard33/38a183289ed87082fed7b2547f2eea49/raw/3290b8ea9791c4e632520a9e1849f580bb82346a/census_classification.json"

fetch(url, {method: 'GET'})
  .then(response => response.json())
  .then(body => {
    console.log(body)
});


function App() {
  return (
    <div className="App">
  
    </div>
  );
}
export default App;
