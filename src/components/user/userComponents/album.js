import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UserAlbum extends Component {
  state = {
    albums: [],
    albumDetail: [],
  };

  async componentDidMount() {
    const userId = this.props.match.params.userId;
    const getAlbums = axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
    await getAlbums.then((res) => {
      const albums = res.data;
      this.setState({ albums });
    });
    // const getAlbumDetail = axios.get(
    //   `https://jsonplaceholder.typicode.com/photos?albumId=${this.state.albums.id}`
    // );

    // Promise.all([getAlbums, getAlbumDetail]).then(function (values) {
    //   const albumId = res.data.id
    // });

    // getAlbumDetail.then((res) => {
    //   const albumDetail = res.data;
    //   this.setState({ albumDetail });
    //   console.log(albumDetail);
    //   // albumDetail.forEach((el) => {
    //   //   if (el.albumId == 1) {
    //   //     Object.entries(el)
    //   //       .slice(0, 5)
    //   //       .forEach(([key, val], index) => {
    //   //         if (key == "url") {
    //   //           console.log(key, val);
    //   //         }
    //   //       });
    //   //   }
    //   // });
    // });
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
            {this.renderUserAlbums(this.state.albums)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserAlbum);
