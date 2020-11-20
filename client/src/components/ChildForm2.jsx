import React from 'react';
import {
    Paper,
    Container,
    Grid,
    TextField,
    Button, 
    FormControl, 
    Select, 
    MenuItem,
    InputLabel,
    Typography,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'; 
import { ThemeProvider } from "@material-ui/styles"; 

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#606F4E"
        },
        secondary: {
            main: "#836E59"
        }
    }
})

const styles = {
    paper: {
        padding: "1rem 2rem",
        margin: "1rem auto", 
        backgroundColor: "#f8f5f0",
    },

    input: {
        marginBottom: "1rem", 
        backgroundColor: "#ffffff",
    },

    input2: {
        marginBottom: "1rem",
        marginRight: "1rem",
        backgroundColor: "#ffffff",
    },

    formControl: {
        width: "30%"
    }, 

    button: {
        width: "75%",
        marginBottom: "1rem", 
    }
}

export default function ChildForm(props) {
    const { onSubmitProp, child, setChild, errors} = props;

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmitProp(child); 
    };

    const handleChange = (e) => {
        if(e.target.name === "items"){
            setChild({
                ...child, 
                [e.target.name]:e.target.value.split(', ')
            })
        } else if(e.target.name === "interest"){
            setChild({
                ...child, 
                [e.target.name]:e.target.value.split(', ')
            })
        } else {
            setChild({
                ...child,
                [e.target.name]:e.target.value
            }); 
        }

        console.log(child); 
    }

    return (
        <ThemeProvider theme={ theme }>
            <Container maxWidth="md">
            <Paper elevation={3} style={styles.paper}>
            <Grid container spacing={4}>
                <Grid item>
                <Typography component="h1" variant="h3" style={{padding:"1rem", color:"#630712", textShadow:"1px 1px 2px #600000"}}>
                    Submit a Child in Need
                </Typography>
                { errors.length > 0 && 
                    <div style={{color: "red"}}>
                        { errors.map((error) => {
                            return <p>{ error }</p>
                        })}
                    </div>
                }
                </Grid>
                <form onSubmit={handleSubmit}>
                    <Grid item>
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
                            style={styles.input2}
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
                        <TextField
                                style={styles.input2}
                                name="email"
                                variant="outlined"
                                required
                                id="email"
                                label="Email"
                                onChange={handleChange}
                            />
                        <TextField
                                style={styles.input2}
                                name="phone"
                                variant="outlined"
                                required
                                id="phone"
                                label="Phone Number"
                                onChange={handleChange}
                            />
                    </Grid>
                    <Grid item>
                        <Typography component="h2" variant="h5" style={{padding:"1rem", color:"#630712", textShadow:"1px 1px 2px #600000"}}>
                            Mailing Address
                        </Typography>
                        <TextField
                            style={styles.input}
                            name="street"
                            variant="outlined"
                            required
                            fullWidth
                            id="street"
                            label="Street Address"
                            onChange={handleChange}
                        />
                        <TextField
                            style={styles.input2}
                            name="city"
                            variant="outlined"
                            required
                            id="city"
                            label="City"
                            onChange={handleChange}
                        />
                        <FormControl variant="outlined" style={styles.formControl}>
                        <InputLabel id="st-label">State</InputLabel>
                        <Select
                        labelId="st-label"
                        id="state"
                        name="state"
                        onChange={handleChange}
                        label="State"
                        style={styles.input2}
                        >
                            <MenuItem value="AL">AL
                            </MenuItem>
                            <MenuItem value="AK">AK
                            </MenuItem>
                            <MenuItem value="AZ">AZ
                            </MenuItem>
                            <MenuItem value="AR">AR
                            </MenuItem>
                            <MenuItem value="CA">CA
                            </MenuItem>
                            <MenuItem value="CO">CO
                            </MenuItem>
                            <MenuItem value="CT">CT
                            </MenuItem>
                            <MenuItem value="DE">DE
                            </MenuItem>
                            <MenuItem value="FL">FL
                            </MenuItem>
                            <MenuItem value="GA">GA
                            </MenuItem>
                            <MenuItem value="HI">HI
                            </MenuItem>
                            <MenuItem value="ID">ID
                            </MenuItem>
                            <MenuItem value="IL">IL
                            </MenuItem>
                            <MenuItem value="IN">IN
                            </MenuItem>
                            <MenuItem value="IA">IA
                            </MenuItem>
                            <MenuItem value="KS">KS
                            </MenuItem>
                            <MenuItem value="KY">KY
                            </MenuItem>
                            <MenuItem value="LA">LA
                            </MenuItem>
                            <MenuItem value="ME">ME
                            </MenuItem>
                            <MenuItem value="MD">MD
                            </MenuItem>
                            <MenuItem value="MA">MA
                            </MenuItem>
                            <MenuItem value="MI">MI
                            </MenuItem>
                            <MenuItem value="MN">MN
                            </MenuItem>
                            <MenuItem value="MS">MS
                            </MenuItem>
                            <MenuItem value="MO">MO
                            </MenuItem>
                            <MenuItem value="MT">MT
                            </MenuItem>
                            <MenuItem value="NE">NE
                            </MenuItem>
                            <MenuItem value="NV">NV
                            </MenuItem>
                            <MenuItem value="NH">NH
                            </MenuItem>
                            <MenuItem value="NJ">NJ
                            </MenuItem>
                            <MenuItem value="NM">NM
                            </MenuItem>
                            <MenuItem value="NY">NY
                            </MenuItem>
                            <MenuItem value="NC">NC
                            </MenuItem>
                            <MenuItem value="ND">ND
                            </MenuItem>
                            <MenuItem value="OH">OH
                            </MenuItem>
                            <MenuItem value="OK">OK
                            </MenuItem>
                            <MenuItem value="OR">OR
                            </MenuItem>
                            <MenuItem value="PA">PA
                            </MenuItem>
                            <MenuItem value="RI">RI
                            </MenuItem>
                            <MenuItem value="SC">SC
                            </MenuItem>
                            <MenuItem value="SD">SD
                            </MenuItem>
                            <MenuItem value="TN">TN
                            </MenuItem>
                            <MenuItem value="TX">TX
                            </MenuItem>
                            <MenuItem value="UT">UT
                            </MenuItem>
                            <MenuItem value="VT">VT
                            </MenuItem>
                            <MenuItem value="VA">VA
                            </MenuItem>
                            <MenuItem value="WA">WA
                            </MenuItem>
                            <MenuItem value="WV">WV
                            </MenuItem>
                            <MenuItem value="WI">WI
                            </MenuItem>
                            <MenuItem value="WY">WY
                            </MenuItem>
                        </Select>
                        </FormControl>
                        <TextField
                            style={styles.input2}
                            name="zipCode"
                            variant="outlined"
                            required
                            id="zipCode"
                            label="Zip Code"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Typography component="h2" variant="h5" style={{padding:"1rem", color:"#630712", textShadow:"1px 1px 2px #600000"}}>
                            Clothing Sizes
                        </Typography>
                        <TextField
                            style={styles.input}
                            name="shirtSize"
                            variant="outlined"
                            required
                            fullWidth
                            id="shirtSize"
                            label="Shirt Size"
                            onChange={handleChange}
                        />
                        <TextField
                            style={styles.input}
                            name="pantSize"
                            variant="outlined"
                            required
                            fullWidth
                            id="pantSize"
                            label="Pant Size"
                            onChange={handleChange}
                        />
                        <TextField
                            style={styles.input}
                            name="shoeSize"
                            variant="outlined"
                            required
                            fullWidth
                            id="shoeSize"
                            label="Shoe Size"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Typography component="h2" variant="h5" style={{padding:"1rem", color:"#630712", textShadow:"1px 1px 2px #600000"}}>
                            Wish List
                        </Typography>
                        <TextField
                            style={styles.input}
                            name="items"
                            variant="outlined"
                            required
                            fullWidth
                            id="items"
                            label="Gifts"
                            onChange={handleChange}
                        />
                        <TextField
                            style={styles.input}
                            name="interest"
                            variant="outlined"
                            required
                            fullWidth
                            id="interest"
                            label="Child's Interests"
                            onChange={handleChange}
                        />
                        <TextField
                            style={styles.input}
                            name="wishlist"
                            variant="outlined"
                            fullWidth
                            id="wishlist"
                            label="Link to Amazon Wish List (https://example.com)"
                            onChange={handleChange}
                        />
                        <Typography component="p" variant="p" style={{padding:"1rem", color:"#630712", textShadow:"1px 1px 2px #600000"}}>
                            Don't have an Amazon Wish List? <a href = "https://www.amazon.com/gp/registry/wishlist?ref_=nav_ListFlyout_create" target="blank" style={{padding:"1rem", color:"#121C11", textShadow:"1px 1px 2px #600000", textDecoration: "underline"}}>Click here to set one up!</a>
                        </Typography>
                    </Grid>
                    <Grid item>         
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={styles.button}
                        >
                            Submit This Child
                        </Button>
                    </Grid>
                </form>
            </Grid>
            </Paper>
            </Container>
        </ThemeProvider>
    )
}
