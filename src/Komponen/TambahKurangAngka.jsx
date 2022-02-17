import React from "react";
import Button from "./Button";

class TambahKurangAngka extends React.Component{
    state = {
        value: 0
    }
    tambah = ()=> {
        return this.setState({value: this.state.value + 1});
    }
    kurang = ()=> {
        if(this.state.value > 0){
            return this.setState({value: this.state.value - 1});
        }
    }
    render() {
        return(
            <div>
                <div onClick={this.tambah}>
                    <Button nama_button="Tambah" />
                </div>
                <span>{this.state.value}</span>
                <div onClick={this.kurang}>
                    <Button nama_button="Kurang" />
                </div>
            </div>
        )
    }
}

export default TambahKurangAngka;