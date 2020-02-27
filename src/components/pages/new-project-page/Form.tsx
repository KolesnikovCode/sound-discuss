import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { IAudioFile } from '../../../models/audioFile';
import { useDispatch } from 'react-redux';
import { setNewSrcToPlayerAction } from '../../../store/actions';
import checkIcon from '../../../assets/icons/check-icon.svg';
import * as firebase from "firebase";


const Form: React.FC = () => {

    // FileInput Ref
    const fileInput: any = React.useRef();
    // file
    const [audioFile, setAudioFile] = React.useState<IAudioFile | null>(null);
    // dispatch
    const dispatch = useDispatch();

    // validation schema for Formik
    const validationSchema = yup.object().shape({
        file:
            yup.mixed()
            .required('Audio file is required'),
        name:
            yup.string()
            .required()
            .label("Name")
            .min(3)
            .max(50),
        description:
            yup.string()
            .required()
            .min(5)
            .max(255)
            .label("Descriprion")
    });
    
    const initialValues = React.useMemo(() => {
        return {
            file: null,
            name: '',
            description: ''
        }
    }, []);

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            const { file, name, description } = values;
            alert(`File: ${file}, Name: ${name}, Descriprion: ${description}`);
        },
        validationSchema
    });

    const hasFormError = React.useMemo(() => {
        return !!formik.errors.description || !!formik.errors.name || !(!!audioFile);
    }, [formik, audioFile]);

    const handleFileInputChange = React.useCallback((e) => {
        const uploadedFile = fileInput.current.files[0];

        if (uploadedFile.type.indexOf("audio/") !== -1) {
            setAudioFile(uploadedFile);
            firebase.storage().ref().child(`audio/${uploadedFile.name}`).put(uploadedFile).then(res => {
                console.log(res);
            });
            formik.setFieldValue('file', uploadedFile);
            // Check change audioSrc
            dispatch(setNewSrcToPlayerAction(''));
            dispatch(setNewSrcToPlayerAction('https://vk.com/doc2351807_486333299'));
        } else {
            fileInput.current.value = '';
            setAudioFile(null);
            alert("Wrong file type!");
        }
    }, [dispatch, formik]);

    return (
        <form onSubmit={ formik.handleSubmit } className="upload-form" autoComplete="off">
            <div className="uploadAudio">
                <label>
                    <input
                        accept="audio/mp3,audio/wav"
                        type="file"
                        className="fileInput"
                        ref={ fileInput }
                        onChange={ handleFileInputChange }
                    />
                    Select audiofile
                </label>
                <span style={{'color': 'red'}}>{ formik.errors.file }</span>
                {
                    !!audioFile && <div className="uploadAudio-filename"><img src={ checkIcon } alt=""/>{ audioFile.name }</div>
                }
            </div>
            <div className={`upload-form-row ${formik.errors.name ? 'upload-form-haserror' : ''}`}>
                <input
                    placeholder="Project name"
                    name="name"
                    type="text"
                    onChange={ formik.handleChange }
                    value={ formik.values.name }
                />
                <span>{ formik.errors.name }</span>
            </div>
            <div className={`upload-form-row ${formik.errors.description ? 'upload-form-haserror' : ''}`}>
                <input
                    placeholder="Project description"
                    name="description"
                    type="text"
                    onChange={ formik.handleChange }
                    value={ formik.values.description }
                />
                <span>{ formik.errors.description }</span>
            </div>
            <button
                type="submit"
                disabled={ hasFormError }
            >
                Send
            </button>
        </form>
    )
};

export default Form;
