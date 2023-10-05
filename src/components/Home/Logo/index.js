import './index.scss';
import VioletLogo from '../../../assets/images/logo-s.png'
import { useRef, useEffect } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {

    const bgRef= useRef();
    const outlineLogoRef= useRef();
    const solidLogoRef= useRef();

    useEffect( () => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineLogoRef.current, { 
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 20,
            }
        )
    }, []);

    return (
    <div className="logo-container" ref={bgRef}>
        <img ref={solidLogoRef} className='solid-logo' src={VioletLogo} alt="N" />

    </div>
    );
}

export default Logo;