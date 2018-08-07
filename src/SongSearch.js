import React from "react";


class SongSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(){
        alert(this.state.value);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        return (<form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>);
    }
}

export default SongSearch;
