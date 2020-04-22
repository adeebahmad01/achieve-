import React, { Component } from "react";
class PostingBox extends Component {
  onFocus = (e) => {
    this.props.history.push("/home/createPost")
    e.target.blur();
  };
  render() {
    return (
      <div>
        <div className="fbComponent" style={{width: `40%`,margin: `0 auto`,border: `1px solid #777`,paddingTop: `20px`}}>
          <div className="row">
            <div className="col s10 m7 l7">
              <input
                placeholder="What's on your mind?"
                id="post"
                type="text"
                onFocus={this.onFocus}
                className="validate form-input"
                style={{
                  border: `1px solid #777`,
                  borderRadius: `100rem`,
                  padding: `0 20px`,
                  cursor: `pointer`
                }}
              />
            </div>
          </div>
          <hr />
          <div className="row iconRow" style={{ marginBottom: `0` }}>
            <div className="input-field iconBox col s4 m4 l4">
              <span className="material-icons icon">video_call</span>{" "}
              <p className="iconText">Live</p>{" "}
            </div>
            <div className="input-field iconBox col s4 m4 l4">
              <span className="material-icons icon">photo_album</span>
              <p className="iconText">Photo</p>{" "}
            </div>
            <div className="input-field iconBox col s4 m4 l4">
              <span className="material-icons icon">location_on</span>
              <p className="iconText">ChekIn</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// accept="audio/*"
export default PostingBox;
