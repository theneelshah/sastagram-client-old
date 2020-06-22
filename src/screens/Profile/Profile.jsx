import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { getUser, isLoggedIn, logout } from "../../auth";
import { Button } from "../../util/styles";
import {
  ButtonHolder,
  Details,
  PictureHolder,
  Post,
  PostImage,
  Posts,
  ProfileDetails,
  ProfilePicture,
} from "./styles";

class Profile extends Component {
  state = {
    profileEmail: "",
    profileName: "",
    selfProfile: false,
    posts: [],
  };

  componentWillMount() {
    const { user, email } = this.props;
    const currUser = getUser();
    if (!user || !email)
      this.setState({
        selfProfile: true,
        profileEmail: currUser.email,
        profileName: currUser.user,
      });
    else
      this.setState({
        profileEmail: email,
        profileName: user,
      });
  }

  async componentDidMount() {
    const id = localStorage.getItem("id");
    const { profileName } = this.state;
    await axios
      .get(`http://127.0.0.1:4546/api/v1/post/${profileName}`)
      .then((res) => {
        console.log("then called");
        console.log(res);
        const { status, data } = res;
        const { posts } = data;
        this.setState({ posts });
      })
      .catch((err) => console.log(err.response));
  }

  render() {
    if (!isLoggedIn()) return <Redirect to="/" />;

    const { profileName, profileEmail, selfProfile, posts } = this.state;

    return (
      <div>
        <Details>
          <ProfilePicture>
            <PictureHolder>
              <img
                src="https://instagram.fbom20-1.fna.fbcdn.net/v/t51.2885-19/s320x320/43043354_1939270973035389_7865349604592582656_n.jpg?_nc_ht=instagram.fbom20-1.fna.fbcdn.net&_nc_ohc=7N0k8jwkQioAX8197mn&oh=6f91d4f1b41452207905aaccbefde084&oe=5F16FBBA"
                alt=""
              />
            </PictureHolder>
          </ProfilePicture>
          <ProfileDetails>
            <div>
              <h1>{profileName}</h1>
              {selfProfile && <HiddenButtons />}
            </div>
          </ProfileDetails>
        </Details>
        <Posts>
          {posts.map((el) => {
            const { _id, caption, image } = el;
            return (
              <Post key={_id}>
                <PostImage image={image} />
              </Post>
            );
          })}
        </Posts>
      </div>
    );
  }
}

const HiddenButtons = () => {
  return (
    <ButtonHolder>
      <Button type="button">
        <Link to="/add-new-post">Add Post</Link>
      </Button>

      <Button type="button">
        <Link to="/">Update Profile</Link>
      </Button>

      <Button type="button" secondary onClick={() => logout()}>
        Logout
      </Button>
    </ButtonHolder>
  );
};

export default Profile;
