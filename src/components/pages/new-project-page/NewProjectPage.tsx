import React from 'react';
import Loader from '../../../components/core/loader/Loader';
import Form from './Form';

const HomePage: React.FC = () => {
    // mounted compoent flag
    const isMounted = React.useRef(true);
    // loading state
    const [isLoaded, setIsLoaded] = React.useState(false);

    const fakeFetch = React.useCallback(() => {
        if (isMounted) {
            setTimeout(() => {
                setIsLoaded(true);
            }, 500)
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
            {
                isLoaded ? (
                    <>
                        <h1>New project</h1>
                        <Form />
                    </>
                ) : <Loader />
            }
        </div>
    )
};

export default HomePage;
