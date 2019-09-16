// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    sayGood = () => {
        console.log("Good!")
    }

    sayHey = () => {
        console.log("Hey! Eyes on me!")
    }
    render() {
        return (
            <button
                onFocus={this.sayGood}
                onBlur={this.sayHey}> 
            </button>
        )
    }
}

export default EyesOnMe;