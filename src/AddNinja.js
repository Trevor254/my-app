import React, {Component} from 'react';

class AddNinja extends Component {
    state = {
        name:null,
        age:null,
        belt:null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value // this will grab the id of the target object
            
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // this will prevent the default action of a form being submitted which is to refresh the page
        console.log(this.state); // this will log the state to the console at the time in which the user submits the form
    }
    render () {
        return (
        <div>
            <form onSubmit ={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="name">Age:</label>
                <input type="text" id="age" onChange={this.handleChange} />
                <label htmlFor="name">Belt:</label>
                <input type="text" id="belt" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default AddNinja;