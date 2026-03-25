import { Routes, Route } from 'react-router-dom';
import { HeadlessDS } from './pages/HeadlessDS';
import { Narrative } from './pages/Narrative';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HeadlessDS />} />
      <Route path="/narrative" element={<Narrative />} />
    </Routes>
  );
}
