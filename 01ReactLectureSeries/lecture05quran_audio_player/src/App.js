// import logo from './logo.svg';
// import './App.css';
// import SurahList from './components/SurahList';
// import AudioPlayer from './components/AudioPlayer';
// import { useState } from 'react';

// function App() {


//   const [selectedSurah, setSelectedSurah] = useState(null)
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'row',
//       minHeight: '100vh',
//       backgroundColor: '#f9f9f9',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       {/* Sidebar: Surah List */}
//       <div style={{
//         width: '30%',
//         backgroundColor: '#fff',
//         borderRight: '1px solid #ccc',
//         padding: '20px',
//         boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
//       }}>
//         <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>📖 Surah List</h2>
//         <SurahList onSelect={setSelectedSurah} />
//       </div>

//       <div style={{
//         flex: 1,
//         padding: '20px',
//         overflowY: 'auto',
    
//       }}>
//         {selectedSurah ? (
//           <AudioPlayer surah={selectedSurah} />
//         ) : (
//           <div style={{


      
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//             fontSize: '20px',
//             color: '#888'
//           }}>
//             Please select a Surah to start listening 🎧
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   // return (


//   //   <div className="App" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
 
//   //     <div style={{ width: '30%' }}>
//   //       <h2>Surah List</h2>
//   //       <SurahList onSelect={setSelectedSurah} />
//   //     </div>

//   //     <div style={{ width: '70%' }}>
//   //       {selectedSurah ? (
//   //         <AudioPlayer surah={selectedSurah} />
//   //       ) : (
//   //         <p>Please select a Surah from the list to play audio.</p>
//   //       )}
//   //     </div>

   
//   //   </div>
//   // );


  
//   // return (
//   //   <div className="App">


//   //     <SurahList onSelect={setSelectedSurah} />
     
       
//   //         {selectedSurah  && <AudioPlayer surah={selectedSurah} />}



//   //   </div>
//   // );
// }

// export default App;








import logo from './logo.svg';
import './App.css';
import SurahList from './components/SurahList';
import AudioPlayer from './components/AudioPlayer';
import { useState } from 'react';

function App() {
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [showSurahList, setShowSurahList] = useState(true);

  const handleSurahSelect = (surah) => {
    setSelectedSurah(surah);
    setShowSurahList(false); // hide list on selection
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Sidebar: Surah List */}
      {showSurahList && (
        <div style={{
          width: '30%',
          backgroundColor: '#fff',
          borderRight: '1px solid #ccc',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>📖 Surah List</h2>
          <SurahList onSelect={handleSurahSelect} />
        </div>
      )}

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
      }}>
        
        {/* Button to bring back Surah list */}
        {!showSurahList && (
          <button onClick={() => setShowSurahList(true)} style={{
            marginBottom: '15px',
            padding: '10px 15px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            📜 Show Surah List
          </button>
        )}

        {selectedSurah ? (
          <AudioPlayer surah={selectedSurah} />
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            fontSize: '20px',
            color: '#888'
          }}>
            Please select a Surah to start listening 🎧
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
