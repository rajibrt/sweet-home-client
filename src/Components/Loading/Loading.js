import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Loading = () => {

    return (
        <div className="grid content-center h-[100vh]  w-full p-10">
            <Player
                autoplay
                loop
                src="https://assets8.lottiefiles.com/packages/lf20_c9hrbqvz.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    );
};

export default Loading;