import React from 'react';
import '../stylesheets/about.scss';

class About extends React.Component{

    render(){
        return(
            <div className="about">
               
                <h1 className="summary">
                    Meet the Developers
                </h1>
                <div className="profiles">
                    <div className="individualprofile">
                        <img src="/Jessica_Zhen.jpg" alt=""/>
                        <h3>Jessica Zhen</h3>
                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/jessica-zhen-b2272a122/" className="fab fa-linkedin" target="_blank"></a>
                            <a href="https://angel.co/jessica-zhen" className="fab fa-angellist" target="_blank"></a>
                            <a href="https://github.com/zhenjess" className="fab fa-github" target="_blank"></a>
                            <a href="mailto:jessicazhen8@gmail.com" className="fab fa-google" target="_blank"></a>
                        </div>
                        </div>
                    <div className="individualprofile">
                        <img src="/Jennifer_Wong.jpeg" alt="" />
                        <h3>Jennifer Wong</h3>
                        <div className="socialicons">
                            <a href="www.linkedin.com/in/jennifer-wong-295132103" className="fab fa-linkedin" target="_blank"></a>
                            <a href="https://angel.co/jennifer-wong-31" className="fab fa-angellist" target="_blank"></a>
                            <a href="https://github.com/jenn-jenn" className="fab fa-github" target="_blank"></a>
                            <a href="mailto:jennwong1009@gmail.com" className="fab fa-google" target="_blank"></a>
                        </div>
                        </div>
                    <div className="individualprofile">
                        <img src="/Joanna_chen.jpg" alt="" />
                        <h3>Joanna Chen</h3>
                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/xchenj/" className="fab fa-linkedin" target="_blank"></a>
                            <a href="" className="fab fa-angellist" target="_blank"></a>
                            <a href="https://github.com/junnac" className="fab fa-github" target="_blank"></a>
                            <a href="mailto:x.chenj@gmail.com" className="fab fa-google" target="_blank"></a>
                        </div>
                        </div>
                    <div className="individualprofile">
                        <img src="/Albert_Yee.jpg" alt="" />
                        <h3>Albert Yee</h3>
                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/albert-yee" className="fab fa-linkedin" target="_blank"></a>
                            <a href="https://angel.co/albert-yee" className="fab fa-angellist" target="_blank"></a>
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