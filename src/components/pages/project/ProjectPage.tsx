import React from 'react';
// import { useParams as routerUseParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewSrcToPlayerAction } from '../../../store/actions';
import Loader from '../../../components/core/loader/Loader';
import moment from 'moment';

const HomePage: React.FC = () => {
    // dispatch
    const dispatch = useDispatch();
    // mounted compoent flag
    const isMounted = React.useRef(true);
    // loading state
    const [isLoaded, setIsLoaded] = React.useState(false);
    // Project data
    const [projectData, setProjectData] = React.useState([]);
    // Router Params
    // const { projectId } = routerUseParams();
    // activate version
    const setActiveVersion = React.useCallback((i) => {
        const newProjectData: any = [...projectData];
        newProjectData.forEach((v: any) => {
            v.isActive = false;
        });
        newProjectData[i].isActive = true;
        setProjectData(newProjectData);
        dispatch(setNewSrcToPlayerAction(''));
        dispatch(setNewSrcToPlayerAction(newProjectData[i].src));
    }, [projectData, setProjectData, dispatch]);

    const activeVersion: any = React.useMemo(() => {
        const activeVer = projectData.find((ver: any) => ver.isActive);
        return activeVer ? activeVer : null;
    }, [projectData]);

    const fakePromise: any = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(() => {
                    return [
                        {
                            id: 1,
                            isActive: false,
                            src: 'https://vk.com/doc2351807_486333299',
                            name: 'MinimalHouse',
                            descriprion: 'Version 1',
                            comments: [
                                {
                                    id: 1,
                                    user: {
                                        id: 151,
                                        fullname: 'Ivan Dorn'
                                    },
                                    date: moment(Date.now()).format('MMMM Do YYYY, h:mm'),
                                    text: 'Wow, it\'s amazing'
                                }
                            ]
                        },
                        {
                            id: 2,
                            isActive: false,
                            src: 'https://vk.com/doc2351807_493497539',
                            name: 'NEONDUCK - Tropical Paradise',
                            descriprion: 'Version 2',
                            comments: []
                        },
                        {
                            id: 3,
                            isActive: false,
                            src: 'https://vk.com/doc2351807_493881564',
                            name: 'Lady Gaga - Cover',
                            descriprion: 'Version 3 Final',
                            comments: []
                        },
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
                        <h1>Version's</h1>
                        <div className="project-nav-wrapper">
                            {projectData.map((version: any, index: number) => (
                                <div
                                    key={ version.id }
                                    className={`project ${version.isActive ? 'project-active' : ''}`}
                                    onClick={() => setActiveVersion(index)}
                                    >
                                    <div className="project-name">{ version.name }</div>
                                    <div className="project-descriprion">{ version.descriprion }</div>
                                </div>
                            ))}
                        </div>
                        {
                            !!activeVersion && (
                                <div className="project-comments-wrapper">
                                    <h2>Comments</h2>
                                    {
                                        activeVersion.comments.length ? (
                                            activeVersion.comments.map((comment: any) => (
                                                <div className="project-comments-comment">
                                                    <h5>{ comment.user.fullname }</h5>
                                                    <sup>{ comment.date }</sup>
                                                    <p>{ comment.text }</p>
                                                </div>
                                            ))
                                        ) : <p>No comments</p>
                                    }
                                </div>
                            )
                        }
                    </>
                ) : <Loader />
            }
        </div>
    )
}

export default HomePage;
