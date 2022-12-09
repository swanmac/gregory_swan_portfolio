import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav' 
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="App-header">
       <Header />
      </header>
      <Nav />
      <main className="App-main">
        <Main/>
      </main> 

      <Footer />
      
    </div>
  );
}
export default App;
