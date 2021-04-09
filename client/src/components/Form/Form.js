import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from "./styles";

function Form() {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form
                autocomplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant='h6'>Creating a Memory</Typography>
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
