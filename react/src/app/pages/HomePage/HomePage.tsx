import React from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <img src="logo.svg" className="HomePage-logo" alt="logo"/>
                <p>
                    <h2>Welcome challenger</h2>
                </p>

                <Link to="/text-analyser">
                    <button> Start your challenge</button>
                </Link>

            </header>
        </div>
    );
}

export default HomePage;
