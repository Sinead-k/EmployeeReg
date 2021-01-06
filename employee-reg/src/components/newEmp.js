import React from 'react';
import axios from 'axios';

export class NewEmp extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);

        this.state = {
            Username: '',
            Name: '',
            Email: '',
            Address: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            Username: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }

    // When form is submitted....
    onSubmit(e) {
        e.preventDefault();
        alert("Employee: " 
        + this.state.Username + " " 
        + this.state.Name + " " 
        + this.state.Email + " " 
        + this.state.Address);

        // Create a new Employee Model
            const newEmp ={
                Username:this.state.Username,
                Name:this.state.Name,
                Email:this.state.Email,
                Address:this.state.Address
            };

        axios.post('http://localhost:4000/api/sample_analytics/customers', newEmp)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));    

    }

    render() {
        return (
            <div>
                <h2>New Employee</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Username: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Username}
                            onChange={this.onChangeUsername}></input>
                    </div>
                    <div className="form-group">
                        <label>Enter Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className='form-group'>
                        <label>Enter Email Address: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Email}
                            onChange={this.onChangeEmail}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Enter Home Address: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Address}
                            onChange={this.onChangeAddress}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Employee'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}