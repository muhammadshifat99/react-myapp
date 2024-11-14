import './App.css'
import FullScreen from './components/FullScreen.jsx';

export default function App() {
  let myStyle = {
    textAlign: "center",
    fontWeight: "bold",
    border: "2px solid #fff",
    borderRadius: "9px",
    padding: "10px",
    margin: "10px",
  };

  return (
    <>
      <div style={myStyle}>New App  <FullScreen /></div>
     
    </>
  );
}
