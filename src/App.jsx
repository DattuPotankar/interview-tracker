import { BrowserRouter, Routes, Route } from "react-router-dom";

import useLocalStorage from "./hooks/useLocalStorage";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddInterview from "./pages/AddInterview";
import EditInterview from "./pages/EditInterview";

function App() {
 const [interviews, setInterviews] =
  useLocalStorage("interviews", []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              interviews={interviews}
              setInterviews={setInterviews}
            />
          }
        />

        <Route
          path="/add"
          element={
            <AddInterview
              interviews={interviews}
              setInterviews={setInterviews}
            />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <EditInterview
              interviews={interviews}
              setInterviews={setInterviews}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;