import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

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

    // Lifecycle Hook
    componentDidMount(){
        console.log("load"+this.props.match.params.id);

        axios.get('http://localhost:4000/api/sample_analytics/customers/'+ this.props.match.params.id)
        .then((response) =>{
            this.setState({
                _id:response.data._id,
                Username:response.data.username,
                Name:response.data.name,
                Email:response.data.email,
                Address:response.data.address
            })
        })
        .catch((error) =>{
            console.log(error);
        })
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

    onSubmit(e) {
        e.preventDefault();
        alert("Employee: " + this.state.Username + " "
            + this.state.Name + " " +
            this.state.Email + " " +
            this.state.Address);

            const updateEmp = {
                username:this.state.Username,
                name:this.state.Name,
                email:this.state.Email,
                address:this.state.Address,
                _id:this.state._id
            };

        axios.put('http://localhost:4000/api/sample_analytics/customers/'+this.state._id, updateEmp)
        .then((res) => {
            console.log(res.data)
        })
        .catch();  
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Employee Username: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}></input>
                    </div>
                    <div className="form-group">
                        <label>Enter Employee Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className='form-group'>
                        <label>Enter Email: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.email}
                            onChange={this.onChangeEmail}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Enter Home Address: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.address}
                            onChange={this.onChangeAddress}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Edit Employee Information'
                            className='btn btn-info'></input>
                    </div>
                </form>
            </div>
        );
    }
}