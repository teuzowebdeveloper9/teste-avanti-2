import './App.css';
import githubIcon from './img/github.png';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [htmlResultado, setHtmlResultado] = useState(""); // aqui vai o innerHTML

  async function fetchData() {
    try {
      const res = await fetch(`https://api.github.com/users/${inputValue}`);

      if (!res.ok) throw new Error("Usuário não encontrado");

      const data = await res.json();

      const perfilHTML = `
        <div style="
          display: flex;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          justify-content: center;
        ">
          <div style="
            display: flex;
            justify-content: flex-start;
          ">
            <img src="${data.avatar_url}" alt="foto-perfil" style="
              width: 120px;
              height: 120px;
              border-radius: 50%;
            " />
          </div>
          <div style="
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex: 1;
            max-width: 400px;
            overflow-wrap: break-word;
            word-wrap: break-word;
          ">
            <div style="color: #005CFF;">
              <h2 style="margin: 0; font-size: 24px;">${data.name}</h2>
            </div>
            <p style="
              color: #ffffff;
              margin: 0;
              font-size: 14px;
              line-height: 1.5;
              white-space: normal;
              overflow-wrap: break-word;
              word-wrap: break-word;
              max-width: 100%;
            ">
              ${data.bio || "Este usuário não possui bio."}
            </p>
          </div>
        </div>
      `;

      setHtmlResultado(perfilHTML);

    } catch (e) {
      setHtmlResultado(`
        <p style="
          color: red;
          font-weight: bold;
          text-align: center;
        ">
          Erro ao procurar dados do usuário do GitHub. Tente novamente e verifique se escreveu corretamente.
        </p>
      `);
    }
  }

  return (
    <main>
      <div className='box-search'>
        <img src={githubIcon} alt="github-perfil" />
        <div className='search'>
          <input
            className='input'
            type="text"
            placeholder='Digite o nome do usuário'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='send' onClick={fetchData}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        {/* Área onde aparece o resultado */}
        <div
          className='insert-here'
          dangerouslySetInnerHTML={{ __html: htmlResultado }}
        ></div>
      </div>
    </main>
  );
}

export default App;
