import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div class="img-area">
          <div class="inner-area">
            <img src="https://storage.googleapis.com/profile_michael/FotoDiri.jpg" alt="" />
          </div>
        </div>
        <div class="name">Marcellus Michael Herman Kahari</div>
        <div class="about">Interested in Software Engineer and have internship experiences in Pegipegi, Garena, eFishery, and BFI Finance.</div>
        <div class="buttons">
          <a href="https://www.linkedin.com/in/marcellus-michael-herman-kahari/"><button>Linkedin</button></a>
          <a href="https://drive.google.com/file/d/1Rh2MrmPipwwZ5QAHgpY8uWOhJ9dNf7A1/view?usp=sharing"><button>CV</button></a>
          <a href="https://github.com/pandora-1"><button>Github</button></a>
        </div>
      </div>
    </div>
  );
}

export default App;
