import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
