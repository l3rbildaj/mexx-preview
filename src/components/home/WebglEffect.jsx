import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '@whatisjery/react-fluid-distortion';
import { Suspense } from 'react';

export default function WebglEffect() {


    return (
        <Suspense>
            <Canvas
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            background: '#F6F8FF',
        }} className=' !z-[1] bg-slate-600 '>
        <EffectComposer>
            <Fluid backgroundColor='#F6F8FF' distortion={0} rainbow />
        </EffectComposer>
    </Canvas>
        </Suspense>
    );
}


