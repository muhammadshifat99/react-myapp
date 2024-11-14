import "./App.css";
import FullScreen from "./components/FullScreen.jsx"
import WorkSample from "./WorkSample.jsx"

export default function App() {
  const myStyle = {
    textAlign: "center",
    fontWeight: "bold",
    border: "2px solid #fff",
    borderRadius: "9px",
    padding: "10px",
    margin: "10px",
  }

  const Stylee = {
    border: "1px solid red",
    background: "green",
    borderRadius: "9px",
    padding: "10px",
    margin: "10px",
  }

  const WorkData = [
    {
      Degree: "HSC",
      Year: "2023",
      Board: "Barishal",
    },

    {
      Degree: "SSC",
      Year: "2021",
      Board: "Barishal",
    },
 
    {
      Degree: "JSC",
      Year: "2018",
      Board: "Barishal",
    },
  ]
  


  return (
    <>
      <div style={myStyle}>
        New App <FullScreen />
      </div>

      {
        WorkData.map((work) => <WorkSample />)
      }

      
    </>
  );
}
