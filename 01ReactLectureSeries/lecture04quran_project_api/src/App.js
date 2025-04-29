
import { useState } from 'react';
import './App.css';
import MushafSurahList from './components/MushafSurahList';
import DetailSurah from './components/DetailSurah';

function App() {
  const [selectedSurah, setSelectedSurah] = useState(null)

  return (

    <div>

      {!selectedSurah ?
        (<MushafSurahList onSurahCLick={(number) =>
          setSelectedSurah(number)} />
        )
        :
        (<DetailSurah surahNumber={selectedSurah} goBack={() => setSelectedSurah(null)} />)



      }

    </div>



    // <div className="App">




    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
