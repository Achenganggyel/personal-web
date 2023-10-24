import React, {Component} from 'react'

let music_player_style = document.createElement('music_style')
music_player_style.innerHTML = " music-change{width:2rem;height:5rem;background-color:#fff;}"
document.head.appendChild(music_player_style)

class AudioComponent extends Component {
    // 构造函数 
    constructor(props){
        super(props)
        this.state = {
            isPlaying: true
        }
    }

    changeStatus = () => {
        const audioElement = document.getElementById('audio')
        // 改变音频元素状态
        if (this.state.isPlaying) {
            audioElement.pause()
        } else {
            audioElement.play()
        }
        // 改变记录属性状态
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }))
    }

    render() {
        return (
            <div>
                <audio id="music" src="../assets/music/bg_music.mp3" preload='true'></audio>
                <button className="music-change" onClick={this.changeStatus}>
                    {this.state.isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        )
    }
}

export default AudioComponent