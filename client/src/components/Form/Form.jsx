import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from "./styles";
import { createPost, updatePost } from '../../actions/posts';

function Form({currentId, setCurrentId}) {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
    })
    }
    return (
        <Paper className={classes.paper}>
            <form
                autocomplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant='h6'>{currentId ? 'Èditing' : 'Creating'} a Memory</Typography>
                <TextField
                    name='creator'
                    variant='outlined'
                    lable='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                />
                <TextField
                    name='title'
                    variant='outlined'
                    lable='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                <TextField
                    name='message'
                    variant='outlined'
                    lable='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                />
                <TextField
                    name='tags'
                    variant='outlined'
                    lable='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                    <Button
                        className={classes.buttonSubmit} 
                        variant='container' 
                        color='primary' 
                        size='large' 
                        type='submit'
                        fullWidth
                    >
                        Submit
                    </Button>
                    <Button
                        variant='contained' 
                        color='secondary' 
                        size='small' 
                        onClick={clear}
                        fullWidth
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form;
