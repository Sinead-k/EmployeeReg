import React from 'react';
import {EditCard} from './editCard';

export class EditProf extends React.Component{

    render(){
        return this.props.employees.map((employee)=>{
            //console.log({movie});
            return <EditCard key={employee._id} employee={employee}
            ReloadDataMethod={this.props.ReloadDataMethod}></EditCard>
            
        })
    }
}