import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({Student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.Student.name }</div>
                        </div>
                        <div className = "row">
                            <label> Date of Birth: </label>
                            <div> { this.state.Student.dob }</div>
                        </div>
                        <div className = "row">
                            <label> Class: </label>
                            <div> { this.state.Student.class }</div>
                        </div>
                        <div className = "row">
                            <label> Division: </label>
                            <div> { this.state.Student.division }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.Student.gender }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent