import React from "react";
import { Calculator } from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Calculator />
    </div>
  );
};

export default App;
