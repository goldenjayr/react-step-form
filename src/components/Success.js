import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <h1>Thank you for your Submission</h1>
                    <p>You will get an email with further instructions.</p>
                    <RaisedButton 
                        label="Register Again"
                        secondary={true}
                        style={styles.button}
                        onClick={this.props.again}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default Confirm
