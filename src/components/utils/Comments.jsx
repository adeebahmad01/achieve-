import React, { Component } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../config/firebase";

class Comments extends Component {
  static contextType = AuthContext;
  state={
    comment: ""
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <DataContext.Consumer>
        {(state) => {
          const post = state.posts.find(post=> post.id === this.props.match.params.postId);
          console.log(post)
          return state.loading ? (
            <div className="loading_wrapper">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="new-post-outer">
              <div className="new-post-inner">
                <div className="outer_box">
                  <div className="heading_wrapper">
                    <h3>Comments</h3>
                  </div>
                  <div className="all_comments">
                    {post.comments.map((el, i) => {
                      const user = state.users.find(user=> user.uid === el.uid)
                      return <div className="user_wrapper" key={i}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" className="user_image" width="35" height="35" alt=""/>
                        <div className="user_name_comments"> {user.name} </div>
                        <div className="comment">
                          {el.comment}
                        </div>
                      </div>;
                    })}
                  </div>
                </div>
                <div className="commenting_box">
                  <form action="/" onSubmit={(e) =>{
                    e.preventDefault();
                    const comments = post.comments;
                    comments.push({ uid: this.context.user.uid, comment: this.state.comment})
                    db.collection("posts").doc(post.id).update({ comments }).then(()=>{
                      console.log("HURRAY")
                    })
                  }}>
                    <input
                      placeholder="Write a Comment..."
                      type="text"
                      value={this.state.comment}
                      onChange={this.handleChange}
                      name="comment"
                      className="commenting_input browser-default"
                    />
                    <button className="material-icons">flight_takeoff</button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}
/**
 
 */
export default Comments;