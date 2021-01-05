import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export class EmpCard extends React.Component {

    constructor(){
        super();
        // this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    
    // DeleteMovie(e){
        
    //     e.preventDefault();
    //     console.log("Delete: "+this.props.movie._id);

    //     axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
    //     .then((response)=>{
    //         this.setState({movies: response.data.movies})
    //         // this.props.ReloadData();
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     });
    // }
        
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.employee.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                                {this.props.employee.username}
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                                {this.props.employee.email}
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}