import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/About/about";
import Patents from "./components/Patents/patents";
import Presentations from "./components/Presentations/presentations"
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import AdminLogin from './components/Admin/AdminLogin';
import AdminLayout from './components/Admin/AdminLayout';
import ProtectedRoute from './components/Admin/ProtectedRoute';

const MainSite = () => (
    <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Patents />
        <Presentations />
        <Contact />
        <Footer />
    </div>
);

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
