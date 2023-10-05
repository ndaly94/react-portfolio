import './index.scss';
import VioletLogo from '../../../assets/images/logo-s.png'
import { useRef } from 'react';

const Logo = () => {

    return (
    <div className="logo-container" >
        <img className='solid-logo' src={VioletLogo} alt="N" />

    </div>
    );
}

export default Logo;