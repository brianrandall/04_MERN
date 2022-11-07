import React from 'react'
import { Paper, Card, CardContent, Button, TextField } from '@mui/material'

const Material = () => {
  return (
    <div>
        <h2> material ui stuff </h2>

        <Paper elevation={3}>
            <h3> This is a paper </h3>
        </Paper>

        <Card>
            <CardContent>
                <h3> This is a card </h3>
            </CardContent>
        </Card>

        <Button variant='contained'> This is a button </Button>

        <TextField />

    </div>
  )
}

export default Material