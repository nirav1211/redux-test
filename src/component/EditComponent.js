import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const firstname=this.fname.value;
        const lastname=this.lname.value;
        const data = {
            firstname,
            lastname
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }

    render() {
        return (
            <div>
                {/* <h1>Enter Details</h1> */}
                <form onSubmit={this.handleEdit}>
                    <input 
                        required 
                        type="text" 
                        ref={(input)=>this.fname = input} 
                        defaultValue={this.props.post.firstname} 
                        placeholder="First Name" 
                    />
                    <input 
                        required
                        type="text"
                        ref={(input)=>this.lname = input}
                        defaultValue={this.props.post.lastname}
                        placeholder="Last Name"
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditComponent);