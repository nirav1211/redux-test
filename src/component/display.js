import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import EditComponent from './EditComponent'

class display extends Component {
    render() {
        return (
            <Fragment>
                {console.log('props',this.props.posts)}
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
                                {
                                post.editing ? <EditComponent post={post} key={post.id} /> : console.log('false') }
                                <td>{post.firstname}</td>
                                <td>{post.lastname}</td>
                            
                                <td>
                                    <button
                                        onClick={()=>this.props.dispatch({type:'EDIT_NAME',id:post.id})}
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

export default connect(mapStateToProps)(display);