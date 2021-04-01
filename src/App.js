import './App.css';
import Button from "./UIKit/Button";
import Input from "./UIKit/Input";

function App() {

  function handleBtnClick() {
    console.log("Customizable Button clicked!");
  }

  function handleLastNameInput() {
    console.log("last name changed");
  }

  return (
    <div className="App">
      <div className="container">
        <Button>Normal</Button>
        <Button outline>Outline</Button>
        <Button className="extra-class" onClick={handleBtnClick}>Customizable</Button>
      </div>
      <div className="container">
        <Input placeholder="First name" />
        <Input placeholder="Last name" onInput={handleLastNameInput} />
        <Input placeholder="Email" type="email" required />
      </div>
    </div>
  );
}

export default App;
