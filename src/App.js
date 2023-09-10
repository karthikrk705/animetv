
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstpage from './components/frontpage';
import Mainpage from './components/mainpage';
import Notfound from './components/notfound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Firstpage/>} />
        <Route path="/main" element={<Mainpage/>} />
        <Route path="*" element={<Notfound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
