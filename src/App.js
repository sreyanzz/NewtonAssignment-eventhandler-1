import "./styles.css";

export default function App() {
  const clickA = () =>{
    console.log("working....");
  }
  return (
    <div className="App">
      <button onClick={clickA} id="clickA">Click Me</button>
    </div>
  );
}
