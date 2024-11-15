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

  

  const WorkData = [
    { 
      id: 1, 
      Degree: "HSC",
      Year: "2023",
      Board: "Barishal",
    },

    {
      id: 2, 
      Degree: "SSC",
      Year: "2021",
      Board: "Barishal",
    },
 
    {
      id: 3, 
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
        WorkData.map((work) => <WorkSample WorkData={work} key={work.id} />  )
      }

      
    </>
  );
}
