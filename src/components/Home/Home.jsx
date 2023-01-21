import React from "react";
import './home.css';

const Home = () => {
    return(
        <>
            <section className="container">
                <div className="text-zone">
                    <h1 className="text-zone-title">I'm Patrick Baldez</h1>
                    <h3 className="text-zone-subtitle">Web developer</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nisi commodi facilis recusandae totam, fugiat culpa id esse adipisci dignissimos repellat doloremque minus, iste nemo. Accusamus iure eius, accusantium aspernatur cupiditate, facere expedita nam libero labore eligendi obcaecati quam in! Quam quae eveniet error dicta nihil accusantium temporibus laudantium ut!</p>
                </div>
                <button className="btn">
                    Contact Me!
                </button>
            </section>
        </>
    );
}

export default Home;