import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../core/Loader";

class UserAlbum extends Component {
  state = {
    albums: [],
    albumDetail: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const userId = this.props.match.params.userId;
    const getAlbums = axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
    await getAlbums.then((res) => {
      const albums = res.data;
      this.setState({ albums: albums, loading: false });
    });
  }

  renderUserAlbums = (albums) => {
    if (albums.length === "0") {
      return <div>No Albums</div>;
    } else {
      return (
        <>
          {albums.map((album, i) => (
            <>
              <div className="card-text text-capitalize" key={i}>
                {/* {this.state.albumDetail.forEach((el) => {
                  if (el.albumId == album.id) {
                    console.log(el);
                  }
                })} */}
                Title: <strong>{album.title.substring(0, 16)}</strong>...
                <hr />
              </div>
            </>
          ))}
        </>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <hr />
        <div className="card ">
          <div className="card-header">Albums by the user</div>
          <div className="card-body">
            {this.state.loading ? (
              <Loader />
            ) : (
              this.renderUserAlbums(this.state.albums)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserAlbum);
