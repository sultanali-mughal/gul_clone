import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedCollection2023 from "../pages/RedCollection2023"

function AppRouter() {
  return (
        <Routes>
          <Route exact path="/" element={<RedCollection2023 />}></Route>
          <Route exact path="/RedCollection2023" element={<RedCollection2023 />}></Route>
          {/* <Route exact path="/Products" element={<Products />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/SignIn" element={<SignIn />}></Route> */}
        </Routes>
  );
}

export default AppRouter;
