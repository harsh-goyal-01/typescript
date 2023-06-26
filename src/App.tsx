import React from "react";
import Textbox from "./components/Textbox/Textbox";
import Dates from "./components/Dates/Dates";
const App: React.FC = () => {
  return (
    <div>
      {/* <div css={{ color: 'red' }}>Just facing typescript compilation error otherwise it's working fine!!</div> */}
      <Dates />
      <Textbox />
    </div>
  );
};

export default App;
