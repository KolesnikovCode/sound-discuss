import React from 'react';
import { useParams as routerUseParams } from 'react-router-dom';
import Loader from '../../../components/core/loader/Loader';

const HomePage: React.FC = () => {
    // mounted compoent flag
    const isMounted = React.useRef(true);
    // loading state
    const [isLoaded, setIsLoaded] = React.useState(false);
    // Project data
    const [projectData, setProjectData] = React.useState([]);
    // Router Params
    const { projectId } = routerUseParams();

    const fakePromise: any = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(() => {
                    return [
                        {
                            id: 1,
                            src: 'https://vk.com/doc2351807_486333299',
                            name: 'MinimalHouse',
                            descriprion: 'Just a test project',
                            comments: []
                        }
                    ]
                });
            }, 1000);
        });
    };

    const fakeFetch = React.useCallback( async () => {
        if (isMounted) {
            const data = await fakePromise();
            setIsLoaded(true);
            setProjectData(data);
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
                        {projectData.map((version: any) => (
                            <div key={ version.id }>
                                <div>{ version.name }</div>
                                <div>{ version.descriprion }</div>
                            </div>
                        ))}
                    </>
                ) : <Loader />
            }
        </div>
    )
}

export default HomePage;
