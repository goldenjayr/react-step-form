import React, {Component} from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class UserForm extends Component {
    state = {
        step: 1, 
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    
    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    again = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render () {
        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state
        const values = { firstName, lastName, email, occupation, city, bio }
        
        // eslint-disable-next-line default-case
        switch (step) {
            case 1: 
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                )
            case 2: 
                return (
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                )
            case 3: 
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        value={values}
                    />
                )
            case 4: 
                return (
                    <Success 
                        again={this.again}
                    />
                )
        }
    }
}

export default UserForm