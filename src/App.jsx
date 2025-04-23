import './App.css'
import githubIcon from './img/github.png'


function App() {
 return (

  <main>
  <div className='box-search'>
    <img src={githubIcon} alt="github-perfil" />
    <div className='search'>
      <input type="text" placeholder='Digite o nome do usuário' />
      <button><span className="material-symbols-outlined">search</span></button>
    </div>
    {/* ===== INÍCIO DA DIV PERFIS - REMOVER DAQUI ===== */}
    <div className='perfis'>
      <div className='foto-perfil'>
        <img src="https://avatars.githubusercontent.com/u/196498933?v=4" alt="foto-perfil" />     
      </div>
      <div className='info-perfil'>
        <div className='nome-perfil'>
          <h2>teuzowebdeveloper9</h2>
        </div>
        <p className='bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    {/* ===== FIM DA DIV PERFIS POSSO APAGAR AQUI ===== */}
  </div>
 </main>

 )
  
}

export default App
