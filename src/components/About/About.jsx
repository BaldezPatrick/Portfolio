import React from "react";
import './about.css';

const About = () => {
    return(
        <>
        <section className="about section" id="about">
            <h2 className="section__title">
                About Me
            </h2>
            <span className="section__subtitle">
                My Introduction
            </span>

            <div className="about__container container">
                <div className="about__data">
                    <p className="about__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nihil corporis. Id, molestiae aliquam delectus neque harum nostrum doloribus enim.
                    </p>

                    <a href="#" className="button button--flex">Download Curriculum</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;