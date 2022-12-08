import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav' 
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="App-header">
       <Header />
      </header>
      <main className="App-main">
        <Main/>
      </main> 
      <About />
      <Home />
      <Nav />
      <Footer />
      
    </div>
  );
}
export default App;
