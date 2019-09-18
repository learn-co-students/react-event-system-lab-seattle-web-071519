import React from 'react'


class Keypad extends React.Component{

        enterPass = () => {
            console.log("Entering password...")
        }


    render(){
        return(
            <div>
                <input type="password" onKeyUp = {this.enterPass} />
            </div>
            
        )
    }


} 

export default Keypad;