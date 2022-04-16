import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="App">
      <h1 className="text-blue-700">Hello Wolrd!</h1>
      <div>
        <button className="btn btn-primary">button</button>
        666
      </div>
      <div>
        <select data-choose-theme>
          <option value="">Default</option>
          <option value="dark">dark</option>
          <option value="garden">garden</option>
        </select>
      </div>
    </div>
  );
}

export default App;
