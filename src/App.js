import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        Status: Under Construction
        </p>
      <li>ETA: 42 days from 12/9/2020. So like late January.</li>
      <div>
        <p>
          Links to my git repo Portfolio Projects.
        </p>
        <li>
          <a href="https://github.com/tieje/Simple-Lead-Generator"> Simple-Lead-Generator
          </a>
          <ul>A GUI written in Python that scrapes emails, phone numbers, and contact urls from the top result of
          duckduckgo from a list of business names in any excel sheet.
            </ul>
        </li>
        <li>
          <a href="https://github.com/tieje/csharp-trading-bot">Stock Trading Bot</a>
          <ul>
            A simple trading bot written in C# that can run multiple algorithms simultaneously. I have only coded
            one algorithm for now, but I intend to build upon this in the future. The algorithm is in the AlgoFDQ file.
          </ul>
        </li>
        <li>
          <a href="https://github.com/tieje/Portfolio">
            Github for this website
          </a>
        </li>
      </div >
      <div>
        <p>
          Hello, you have reached the site of Thomas James Libiano Francis.
        </p>
        <p>
          The following is a list of key technologies that I'd like to learn and/or incorporate into this portfolio
          website.
        </p>
        <li>
          Frontend
            <ul>
            TypeScript
            </ul>
          <ul>
            Node.js
            </ul>
          <ul>
            React
            </ul>
          <ul>
            Lighthouse
            </ul>
          <ul>
            A PWA application
            </ul>
          <ul>
            A React application
            </ul>
          <ul>
            Axios
            </ul>
        </li>
        <li>
          Backend
            <ul>
            Django
            </ul>
          <ul>
            FaunaDB
            </ul>
          <ul>
            Heroku
            </ul>
        </li>
      </div >
    </div>
  );
}

export default App;
