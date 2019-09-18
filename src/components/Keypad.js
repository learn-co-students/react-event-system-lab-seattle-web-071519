// Code Keypad Component Here

import React, {Component} from 'react'

class Keypad extends Component {

    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
            <form>
                <label>Password</label>
                <input onKeyUp={this.handleKeyUp} type="password"/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default Keypad