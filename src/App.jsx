import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Companies from './components/Companies/Companies';
import { AuthProvider } from '../context/AuthContext';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Contact from '../pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router basename="/Job-Portal-Application-">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Banner />} />
            <Route path="about" element={<About />} />
            <Route path="companies" element={<Companies />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="connect" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
