

import { Routes, Route  } from "react-router-dom";


// Pages ----
import HomePage from "./pages/home-page/home-page.component";
import StudentPage from "./pages/student-page/student-page.component";
import TeacherPage from "./pages/teacher-page/teacher-page.component";

import { AppContainer } from "./App.styles";
import { GlobalStyles } from "./globalStyles";

const App = () => (
  <AppContainer>
    <GlobalStyles />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
    </Routes>
  </AppContainer>
);

export default App;
