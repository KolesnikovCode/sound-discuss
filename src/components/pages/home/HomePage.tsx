import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <div className="my-projects">
                <h3>My projects</h3>
                <div className="my-projects_wrapper">
                    {
                        [1,0,11,'youtube'].map((el) => (
                            <div className="my-projects_project">
                                <Link to="/project/project-id">{`Project ${el}`}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;
