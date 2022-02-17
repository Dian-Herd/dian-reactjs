import React from "react";

class Button extends React.Component{
    render(){
        return(
            <div>
                <button>{this.props.nama_button}</button>
            </div>
        )
    }
}

export default Button;