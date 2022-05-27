import {useState} from 'react';
import './index.scss';
import Login from './login';
import Signin from './signin';
import Particles from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

function Auth() {

    const [isLoginScreen, setIsLoginScreen] = useState(true);

    const toggleLogin = () => {
        setIsLoginScreen(!isLoginScreen);
    };
    
    //particle test

    async function customInit()  {
        // this adds the preset to tsParticles, you can safely use the
        // await loadFireflyPreset(Engine);
    }

    const options = {
        preset: "firefly",
    };

    return (
        <div className='login'>
            <h1>Welcome to Random Poem</h1>

            <div className='auth__box'>
                {isLoginScreen ?  
                    <Login toggleLogin={toggleLogin}/> :
                    <Signin toggleLogin={toggleLogin}/>
                }
                
            </div>
            <Particles id="tsparticles" options={options} init={customInit} />
        </div>
    )
}

export default Auth;