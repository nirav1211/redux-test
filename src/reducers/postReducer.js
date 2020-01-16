const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NAME':
            return state.concat([action.data]);
        case 'DELETE_NAME':
            return state.filter((post)=>post.id !== action.id);
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                        ...post,
                        firstname: action.data.firstname,
                        lastname: action.data.lastname,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
    }

}
export default postReducer;