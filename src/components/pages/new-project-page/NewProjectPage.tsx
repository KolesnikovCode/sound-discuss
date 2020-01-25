import React from 'react';
import Loader from '../../../components/core/loader/Loader';
import { IAudioFile } from '../../../models/audioFile';
import { useDispatch } from 'react-redux';
import { setNewSrcToPlayerAction } from '../../../store/actions';
import Form from './Form';

const HomePage: React.FC = () => {
    // mounted compoent flag
    const isMounted = React.useRef(true);
    // loading state
    const [isLoaded, setIsLoaded] = React.useState(false);
    // FileInput Ref
    const fileInput: any = React.useRef();
    // file
    const [audioFile, setAudioFile] = React.useState<IAudioFile | null>(null);
    // dispatch
    const dispatch = useDispatch();

    const fakeFetch = React.useCallback(() => {
        if (isMounted) {
            setTimeout(() => {
                setIsLoaded(true);
            }, 500)
        }
    }, []);

    const handleFileInputChange = React.useCallback(() => {
        const uploadedFile = fileInput.current.files[0];
        if (uploadedFile.type.indexOf("audio/") + 1) {
            setAudioFile(fileInput.current.files[0]);
            // Check change audioSrc
            dispatch(setNewSrcToPlayerAction('https://vk.com/doc2351807_486333299'));
        } else {
            fileInput.current.value = '';
            setAudioFile(null);
            alert("Wrong file type!");
        }
    }, [dispatch]);

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
                        <div className="uploadAudio">
                            <label>
                                <input accept="audio/mp3,audio/wav" type="file" className="fileInput" ref={fileInput} onChange={() => handleFileInputChange()} />
                                Select audiofile
                            </label>
                            {
                                !!audioFile && <div className="uploadAudio-filename">{ audioFile.name }</div>
                            }
                        </div>
                        <Form />
                    </>
                ) : <Loader />
            }
        </div>
    )
};

export default HomePage;
