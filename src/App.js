import logo from './logo.svg';
import JobsList from './components/JobList';
import './App.css';
import data from "./data.json"
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header/>
     <JobsList jobsArr = {data}/>
      
    </div>
  );
}

export default App;
