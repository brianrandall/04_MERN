import React from 'react'
import {
    Paper, 
    FormControl, 
    InputLabel,
    OutlinedInput,
    Button,
} from '@mui/material'

const Form = () => {

    const styles = {
        paper: {
            padding: 20,
            margin: 20,
            width: 300,
        },

        formControl: {
            margin: 10,
        },

        button: {
            margin: 10,
        }
    }

  return (
    <div>
        <h1>Material Form Example</h1>

        <Paper elevation={3} style={styles.paper}>
            <h3> This is a paper </h3>

            <FormControl variant='outlined' style={styles.formControl}>
                <InputLabel htmlFor='my-input'>Name</InputLabel>
                <OutlinedInput id='my-input' label='Name' />
            </FormControl>

            <FormControl variant='outlined' style={styles.formControl}>
                <InputLabel htmlFor='my-input'>Email</InputLabel>
                <OutlinedInput id='my-input' label='Email' />
            </FormControl>

            <FormControl variant='outlined' style={styles.formControl}>
                <InputLabel htmlFor='my-input'>Password</InputLabel>
                <OutlinedInput id='my-input' label='Password' />
            </FormControl>

            <Button variant='contained' style={styles.button}> Submit </Button>
        </Paper>

        
    </div>
  )
}

export default Form