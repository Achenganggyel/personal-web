import logo from './logo.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skill } from './components/Skill'
import AudioComponent from './components/AudioComponent'
import('./components/AudioComponent').then(module=>{
  const musicPlayer = new AudioComponent()
  musicPlayer.render()
  // TODO render()后为什么没用啊
  console.log('！！音乐播放器导入成功')
}).catch(error=>{
  console.log('音乐播放器导入失败')
})

function App() {
  return (
    <div className="App">
      <NavBar className="show-navbar" />
      <Banner className="show-banner" />
      <Skill className="show-skill" />
      <div className="copyRight">
        @CopyRight
        <br/>
        Just like the seed, I am chasing the wonder.
      </div>
    </div>
  );
}

export default App;