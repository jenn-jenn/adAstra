import React from 'react';
import '../stylesheets/about.scss';

class About extends React.Component{

    render(){
        return(
            <div className="about">
               
                <div className="summary">
                    To fill in later
                </div>
                <div className="profiles">
                    <div className="individualprofile">
                        <img src="/Jessica_Zhen.jpg" alt=""/>
                        Jessica Zhen
                        <div className="socialicons">
                            <a href="" className="fab fa-linkedin" target="_blank"></a>
                            <a href="" className="fab fa-github" target="_blank"></a>
                            <a href="" className="fab fa-google" target="_blank"></a>
                        </div>
                        </div>
                    <div className="individualprofile">
                        <img src="/Jennifer_Wong.jpeg" alt="" />
                        Jennifer Wong
                        <div className="socialicons">
                            <a href="" className="fab fa-linkedin" target="_blank"></a>
                            <a href="" className="fab fa-github" target="_blank"></a>
                            <a href="" className="fab fa-google" target="_blank"></a>
                        </div>
                        </div>
                    <div className="individualprofile">
                        <img src="/Joanna_chen.jpg" alt="" />
                        Joanna Chen
                        <div className="socialicons">
                            <a href="" className="fab fa-linkedin" target="_blank"></a>
                            <a href="" className="fab fa-github" target="_blank"></a>
                            <a href="" className="fab fa-google" target="_blank"></a>
                        </div>
                        </div>
                    <div className="individualprofile">
                        <img src="/Albert_Yee.jpg" alt="" />
                        Albert Yee
                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/albert-yee" className="fab fa-linkedin" target="_blank"></a>
                            <a href="https://github.com/albertyee84" className="fab fa-github" target="_blank"></a>
                            <a href="mailto:albertyee84@gmail.com" className="fab fa-google" target="_blank"></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;