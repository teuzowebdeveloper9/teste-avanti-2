import './App.css';
import githubIcon from './img/github.png';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    setError(null); 
    setProfileData(null); 
    try {
      const res = await fetch(`https://api.github.com/users/${inputValue}`);

      if (!res.ok) {
        if (res.status === 404) {
           throw new Error("Usuário não encontrado.");
        } else {
          throw new Error(`Erro ${res.status}: ${res.statusText}`);
        }
      }

      const data = await res.json();
      setProfileData(data);

    } catch (e) {
      setError(e.message || "Erro ao procurar dados do usuário do GitHub. Tente novamente e verifique se escreveu corretamente.");
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
        <div className='insert-here'>
          {error && (
            <p className="error-message">{error}</p>
          )}
          {profileData && (
            <div className="profile-container">
              <div className="profile-image-container">
                <img 
                  src={profileData.avatar_url} 
                  alt="foto-perfil" 
                  className="profile-image" 
                />
              </div>
              <div className="profile-info-container">
                <h2 className="profile-name">{profileData.name}</h2>
                <p className="profile-bio">
                  {profileData.bio || "Este usuário não possui bio."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
