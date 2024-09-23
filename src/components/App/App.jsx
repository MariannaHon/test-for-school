
import './App.css'
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

const BoardPage = lazy(() => import('../../pages/BoardPage/BoardPage.jsx'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage.jsx'));
const ViewPage = lazy(() => import('../../pages/ViewPage/ViewPage.jsx'));

function App() {

  return (
    <>
      <h1>Welcome to Events registration App</h1>
      <p>Choose the event to your liking!</p>
      <Suspense>
        <Routes>
          <Route path="/" element={<BoardPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
