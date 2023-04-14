
import { Fingerprint, PhotoCamera } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import { Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/material';

const useStyles=makeStyles({
    btn:{
        fontSize:60,
        backgroundColor:'red'
    }
})
function Notes() {
const classes=useStyles()
    
  return (
    <div>
        <Typography
        variant='h2' color="red">
            create a new note
        </Typography>
        <Typography color="seagreen" align='center' noWrap>
        Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:
        Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:
        </Typography>

        <Button variant='contained' disabled>Contained 1</Button>
        <Button variant='contained '>Contained 2</Button>
        <Button variant='contained ' href='#contained-buttons'>Contained 3</Button>
        <Button variant='contained ' disableElevation>Contained Disabled Elevation</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='outlined' onClick={()=>{alert("clicked")}}>Click me</Button>
        <div>
            <Button color='secondary'>
                Secondary
            </Button>
            <Button color='success' variant='contained'>
            success
            </Button>
            <Button color='error' variant='outlined'>
            Error
            </Button>
        </div>
        <div>
        <Button color='secondary' size='small'>
                Secondary small
            </Button>
            <Button color='success' variant='contained' size='medium'>
            success medium
            </Button>
            <Button color='error' variant='outlined' size='large'>
            Error large
            </Button>
        </div>
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant='contained'>
                upload
            </Button>
            <IconButton color='primary' aria-label='upload picture'>
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
            </IconButton>
        </Stack>
        <Stack direction="row" spacing={2}>
             <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant='contained' endIcon={<SendIcon/>} href='/create'>
                Send
            </Button>
        </Stack>
        <Stack direction="row" spacing={2} rowGap={2} columnGap={10}>
        <IconButton aria-label='delete'>
        <DeleteIcon />
        </IconButton>
        <IconButton aria-label='delete' disabled>
        <DeleteIcon />
        </IconButton>
        <IconButton aria-label='alarm'>
        <AlarmIcon />
        </IconButton>
        <IconButton aria-label='shopping' color='primary'>
        <AddShoppingCartIcon  />
        </IconButton>
        </Stack>

        <Stack direction="row" spacing={2} >
        <IconButton aria-label='delete' size='small' color='primary'>
        <DeleteIcon fontSize='inherit'/>
        </IconButton>
        <IconButton aria-label='delete'size='small' color='success'>
        <DeleteIcon fontSize='small'/>
        </IconButton>
        <IconButton aria-label='delete'size='large'color='secondary' >
        <DeleteIcon />
        </IconButton>
        <IconButton aria-label='delete' size='large' color='primary'>
        <DeleteIcon fontSize='inherit'/>
        </IconButton>
        </Stack>

        <Stack direction="row" spacing={2} >
        <IconButton aria-label='finger' size='large' color='primary'>
        <Fingerprint />
        </IconButton>
        <IconButton aria-label='finger'size='large' color='success'>
        <Fingerprint  fontSize="100px"/>
        </IconButton>
        </Stack>

        <Stack direction="row" spacing={2} >
        <LoadingButton loading variant='outlined'>
            Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading...." variant='contained' >
            Fetch Data
        </LoadingButton>
        <LoadingButton loading loadingPosition='end' startIcon={<SaveIcon/>} variant='outlined' >
            Save
        </LoadingButton>
        </Stack>

        <Stack direction="row" spacing={2}>
            <Button variant='contained' endIcon={<SendIcon/>} href='/create' className={classes.btn}>

                Send
            </Button>
        </Stack>

    </div>
  )
}

export default Notes