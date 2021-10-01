import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                student: []
        }
        this.addStudent = this.addStudent.bind(this);
       }

    
    viewStudent(id){
        this.props.history.push(`/view-student${id}`);
    }
    
    componentDidMount(){
        StudentService.getStudent().then((res) => {
            this.setState({ student: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Students List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Date Of Birth</th>
                                    <th> Class</th>
                                    <th> Division</th>
                                    <th> Gender</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Student.map(
                                        Student => 
                                        <tr key = {Student.id}>
                                             <td> { Student.name} </td>   
                                             <td> {Student.dob}</td>
                                             <td> {Student.class}</td>
                                             <td> {Student.division}</td>
                                             <td> {Student.gender}</td>
                                             <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(Student.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
export default ListStudentComponent