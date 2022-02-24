import React, { useState } from 'react'
import Lottie, { Options } from 'react-lottie'
import animationData from "../../assets/logoHTML2.json"
import { SplashScreenBg, SplashScreenContent } from './styles'

export default function SplashScreen() {
    const [opacity, setOpacity] = useState('100%')
    const [display, setDisplay] = useState('initial')

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }
    setTimeout(() => {
        setOpacity(() => '0%')
        
        setTimeout( () => {
            setDisplay( () => 'none')
        }, 950)
    }, 3100)

    return (
        <SplashScreenBg style={{ opacity: opacity, display: display }}>
            <SplashScreenContent>
                <Lottie
                    options={defaultOptions}
                    height={80}
                    width={500}>
                </Lottie>
            </SplashScreenContent>
        </SplashScreenBg>
    )
}
