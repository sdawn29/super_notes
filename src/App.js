import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import AddNote from "./screens/AddNote";
import Home from "./screens/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/add" element={<AddNote />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
