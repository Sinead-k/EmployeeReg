import React from 'react';
import {EmpCard} from './empCard';

export class Profile extends React.Component{

    render(){
        return this.props.employees.map((employee)=>{
            //console.log({movie});
            return <EmpCard key={employee._id} employee={employee}
            ReloadDataMethod={this.props.ReloadDataMethod}></EmpCard>
            
        })
    }
}