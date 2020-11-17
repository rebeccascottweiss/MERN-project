import React from 'react';
import {
    Paper,
    Grid,
    TextField,
    Button, 
    FormControl, 
    Select, 
    MenuItem,
    InputLabel,
    Typography,
    Card,
} from '@material-ui/core';

const styles = {
    paper: {
        width: "30rem", 
        padding: "1rem",
        margin: "1rem auto"
    },
    input: {
        marginBottom: "1rem"
    },

    formControl: {
        width: "30%"
    },

    button: {
        width: "100%"
    }
}

export default function ChildForm(props) {
    const { child, setChild} = props;

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(`Submit a new child now`); 
        console.log(child); 
        // const child = {
        //     firstName: 
        // }; 

        // onSubmitProp(child); 
    };

    const handleChange = (e) => {
        setChild({
            ...child,
            [e.target.name]:e.target.value
        }); 
    }

    return (
        <Paper elevation={3} style={styles.paper}>
            <Typography component="h1" variant="h5" style={{padding:"1rem"}}>
                Submit a Child in Need
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <TextField
                        style={styles.input}
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        style={styles.input}
                        name="lastName"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        autoFocus
                        onChange={handleChange}
                    />
                    <FormControl variant="outlined" style={styles.formControl}>
                        <InputLabel id="age-label">Age</InputLabel>
                        <Select
                        labelId="age-label"
                        id="age"
                        name="age"
                        onChange={handleChange}
                        label="Age"
                        style={styles.input}
                        >
                        <MenuItem value="0">
                            <em>under 1yr</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        </Select>
                    </FormControl>
                    <Card>
                    <TextField
                        style={styles.input}
                        name="lastName"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        autoFocus
                        onChange={handleChange}
                    />

                    </Card>
                </Grid>
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Submit This Child
                </Button>
            </form>
        </Paper>
    )
}
