import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface IPlayer {
    autoPlay?: boolean
    src?: string
    setDataFromPlayer: Function
}

/**
 * react-h5-audio-player
 * Package page https://www.npmjs.com/package/react-h5-audio-player
 * Ya ne ISHUPA! Ti ISHUPA, drugie ISHUPA!
 * @param {boolean} autoPlay - Bool flag for enable or disable auto playing.
 * @param {string} src - Link to audio file.
 * @param {Function} setDataFromPlayer - Callback function which is called when AudioPlayer can be play.
 */

const Player = ({ autoPlay = false, src = '', setDataFromPlayer }: IPlayer) => {
    return (
        <AudioPlayer
            showJumpControls={ false }
            autoPlay={ autoPlay }
            showLoopControl={ false }
            src={ src }
            onCanPlay={ (event: Event) => setDataFromPlayer(event) }
            className={ src ? 'canPlay' : '' }
        />
    )
}

export default Player;
