import React from "react";
import './landingpage.css'
import BgVideo from '../media/bg.mp4.mp4'
import Typical from "react-typical";
import Text from "../textanimation/Text";

const Landingpage =()=>{
    return (
        
        <div className="landingpage">
            
            {/* videoyu devamlı döngüye soktuk */}
            <video src={BgVideo} autoPlay muted loop class="video-bg"/>
            <div className="bg-overlay"> </div>
            

             <div className="navbar">
                <p>I'm 
                <b style={{color:'#C4DDFF' }}> Burak FİLİZ</b>
                </p>
             
                <div className="text-anim">
                

            
                <p>
                    
                

                   <p style={{color:'#C4DDFF' }}> I'm a  </p>
                    <Typical
                                
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    '  Front-end Developer',
                                    1000,
                                    '  Web Designer',
                                    1000,
                                    '  Industrial Engineer',
                                    1000,
                                

                                ]}
                    />
                </p>
                    
                </div>
            </div> 

        </div>
    )
}

export default Landingpage;