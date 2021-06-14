import logo from './logo.svg';
import './App.css';
import ReactHlsPlayer from 'react-hls-player';


function App() {
  return (
    <div className="App">
      <ReactHlsPlayer
        src="https://cdn.livepeer.com/hls/9600iz2b6y8wrag7/index.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default App;
