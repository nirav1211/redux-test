import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div>
      <table style={{border: '1px solid black'}}>
        <tbody>
        <tr>
          <td>
          {this.props.post.firstname}
          </td>
          <td>
          {this.props.post.lastname}
          </td>
          <td>
            <button
            onClick={()=>this.props.dispatch({type:'EDIT_NAME',id:this.props.post.id})}
            >
              Edit
            </button>
          </td>
          <td>
            <button
            onClick={()=>this.props.dispatch({type:'DELETE_NAME',id:this.props.post.id})}
            >
              Delete
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
 }
}
export default connect()(Post);