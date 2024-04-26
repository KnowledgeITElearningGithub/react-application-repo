// import logo from './logo.svg';
import imageia1 from './imageia1.jpg';
import imageia2 from './imageia2.jpg';
import './App.css';

function App() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">IA générative</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">  
          <li className="nav-item">
            <a className="nav-link" href="#">ChatGPT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Gemini</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <img src={imageia1} className="card-img-top" alt="Image Section 1" />
          <div className="card-body">
            <h5 className="card-title">ChatGPT</h5>
            <p className="card-text">ChatGPT est le premier outil d’IA générative puissante accessible au grand public. Son principe réside dans sa simplicité, car son interface est un simple chatbot. Il vous suffit de discuter avec un robot qui répond à vos questions sous forme de prompts.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <img src={imageia2} className="card-img-top" alt="Image Section 2" />
          <div className="card-body">
            <h5 className="card-title">Gemini</h5>
            <p className="card-text">Gemini est vu comme le principal concurrent de ChatGPT. La première raison, c’est parce que l’outil est développé par Google. Sa principale caractéristique est sa simplicité, car son interface se présente aussi sous la forme d’un simple chatbot.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
