export default function WorkSample({WorkData}) {

//  console.log(WorkData);
 const {Degree}=WorkData;
 const {Year}=WorkData;
 const {Board}=WorkData;
 
    const Stylee = {
        border: "1px solid red",
        background: "green",
        borderRadius: "9px",
        padding: "10px",
        margin: "10px",
        color: "white",
      }
      
  return (
    <div>
      <div style={Stylee}>
        <span>{Year}</span>
        <h2>{Degree}</h2>
        <p>{Board}</p>
      </div>
    </div>
)
}
