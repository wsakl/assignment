import React, { Component } from 'react'


class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            dob: '',
            class: '',
            dividion: '',
            gender: ''
        }
      this.saveStudent = this.saveStuden.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                this.setState({name: Student.name,
                    dob: Student.dob,
                    class : Student.class,
                    division : Student.division,
                    gender : Student.gender
                });
            });
        }        
    }
    saveStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, 
                        dob: this.state.dob, 
                        class: this.state.class, 
                        division: this.state.division, 
                        gender: this.state.gender  };
        console.log('Student => ' + JSON.stringify(Student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/student');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/Student');
            });
        }
    }
    
   

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Date Of Birth </label>
                                            <input type="date" name="dob" className="form-control" 
                                                value={this.state.dob} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Class: </label>
                                            <input placeholder="class" name="class" className="form-control" 
                                                value={this.state.class}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Division: </label>
                                            <input placeholder="Division" name="class" className="form-control" 
                                                value={this.state.division}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="class" name="gender" className="form-control" 
                                                value={this.state.division}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStudentComponent