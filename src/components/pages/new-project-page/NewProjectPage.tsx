import React from 'react';
import Loader from '../../../components/core/loader/Loader';
import { IAudioFile } from '../../../models/audioFile';

const HomePage: React.FC = () => {
    // mounted compoent flag
    const isMounted = React.useRef(true);
    // loading state
    const [isLoaded, setIsLoaded] = React.useState(false);
    // FileInput Ref
    const fileInput: any = React.useRef();
    // file
    const [audioFile, setAudioFile] = React.useState<IAudioFile | null>(null);

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
            console.log(fileInput.current.files[0]);
        } else {
            alert("Wrong file type!")
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
                        <div className="uploadAudio">
                            <label>
                                <input type="file" className="fileInput" ref={fileInput} onChange={() => handleFileInputChange()} />
                                Upload audiofile
                            </label>
                            {
                                !!audioFile && <div>{ audioFile.name }</div>
                            }
                        </div>
                    </>
                ) : <Loader />
            }
        </div>
    )
}

export default HomePage;
