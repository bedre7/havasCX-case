import './App.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Asynchronous from './components/Asynchronous';
import Synchronous from './components/Synchronous';

function App() {
  return (
    <Routes>
      <Route path="/sync?" element={<Synchronous />} />
      <Route path="/async" element={<Asynchronous />} />
    </Routes>
  );
}

export default App;
