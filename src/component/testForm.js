import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
//import EditComponent from './EditComponent'
//import addName from '../actions'

class testForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            firstname: "",
            lastname: "",
            editing: "",
            error: ""
        };
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleEdit = (post) => {
        this.setState({
            id: post.id,
            firstname: post.firstname,
            lastname: post.lastname,
            editing: true
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let count = 0;
        this.props.posts.forEach(element => {
            if(element.firstname.toUpperCase() === this.state.firstname.toUpperCase() 
                && element.lastname.toUpperCase() === this.state.lastname.toUpperCase()) {
                console.log('Same fname and lastname');
                count++;
            }
        })

        
            if(this.state.editing===true) {
                this.props.dispatch({ type: 'UPDATE', id: this.state.id, data: this.state })
                this.setState({
                    id: "",
                    firstname: "",
                    lastname: "",
                    editing: "",  
                }) 
            } 
            else {
                if(count===0)
                {
                const data = {
                    id: new Date(),
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    editing: false
                }
                
                this.props.dispatch({
                    type:'ADD_NAME',
                    data
                });
                this.setState({
                    id: "",
                    firstname: "",
                    lastname: "",
                    editing: "",
                    error: ""
                })
                
            } 
            else {
                this.setState({
                    error: "Same Name Already Exist"
                })
            }
        } 
            /* this.setState({
                id: "",
                firstname: "",
                lastname: "",
                editing: "",
                
            }) */
    }

    render() {
        const {firstname,lastname} = this.state;
        
        return (
            <Fragment>
                <h1>Enter Details</h1>
                <form onSubmit={this.handleSubmit}>
                <span>{this.state.error}</span>
                <br />
                    <input 
                        required 
                        type="text" 
                        name='firstname'
                        value={firstname}
                        onChange={this.handleChange}
                        placeholder="First Name" 
                    /> <br />
                    <input 
                        required 
                        type="text" 
                        name='lastname'
                        value={lastname}
                        onChange={this.handleChange}
                        placeholder="Last Name" 
                    /> <br />
                    <button>Submit</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map((post)=>
                            <tr key={post.id}>
                                <td>{post.firstname}</td>
                                <td>{post.lastname}</td>
                                <td>
                                    <button
                                        onClick={()=>this.handleEdit(post)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={()=>this.props.dispatch({type:'DELETE_NAME',id:post.id})}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state
    }
}

export default connect(mapStateToProps)(testForm);