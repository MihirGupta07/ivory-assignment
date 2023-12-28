import './App.css';
import Navbar from './Components/Navbar';
import HomeScreen from './Components/HomeScreen';
import Footer from './Components/Footer';
import { ModalProvider } from './Components/Contexts/ModalContext';
import Modal from './Components/Modal';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Navbar />
        <HomeScreen />
        <Footer />
        <Modal/>
      </ModalProvider>
    </div>
  );
}

export default App;
