import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/core/loader/Loader';

const HomePage: React.FC = () => {
    // mounted compoent flag
    const isMounted = React.useRef(true);
    // loading state
    const [isLoaded, setIsLoaded] = React.useState(false);

    const fakeFetch = React.useCallback(() => {
        if (isMounted) {
            setTimeout(() => {
                setIsLoaded(true);
            }, 1500)
        }
    }, []);

    React.useEffect(() => {
        fakeFetch();
        return () => {
            isMounted.current = false;
        }
    }, [fakeFetch]);

    return (
        <div className="container">
            {isLoaded ? (
                    <>
                        <h1>Home Page</h1>
                        <div className="my-projects">
                            <h3>My projects</h3>
                            <div className="my-projects_wrapper">
                                {
                                    [1,0,11,'youtube'].map((el, i) => (
                                        <div className="my-projects_project" key={i}>
                                            <Link to="/project/project-id">{`Project ${el}`}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                ) : <Loader />
            }
        </div>
    )
}

export default HomePage;
