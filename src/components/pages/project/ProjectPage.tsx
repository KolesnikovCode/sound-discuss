import React from 'react';
import { useParams as routerUseParams } from 'react-router-dom';
import Loader from '../../../components/core/loader/Loader';

const HomePage: React.FC = () => {
    // mounted compoent flag
    const isMounted = React.useRef(true);
    // loading state
    const [isLoaded, setIsLoaded] = React.useState(false);
    // Project data
    const [projectData, setProjectData] = React.useState({});
    // Router Params
    const { projectId } = routerUseParams();

    const fakeFetch = React.useCallback(() => {
        if (isMounted) {
            setTimeout(() => {
                setIsLoaded(true);
                setProjectData({
                    id: 1
                });
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
            {isLoaded && !!projectData ? (
                    <>
                        <h1>Project id: { projectId }</h1>
                    </>
                ) : <Loader />
            }
        </div>
    )
}

export default HomePage;
