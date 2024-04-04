import React from "react";
import Avatar from "./components/Avatar/avatar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarsVisible: false,
    };
  }

  toggleAvatarsVisibility = () => {
    this.setState((prevState) => ({
      isAvatarsVisible: !prevState.isAvatarsVisible,
    }));
  };

  avatarList = [
    {
      imageSrc: "https://i.imgur.com/1bX5QH6.jpg",
      userName: "Lin Lanying",
    },
    {
      imageSrc: "https://i.imgur.com/YfeOqp2.jpg",
      userName: "Test user",
    },
  ];

  render() {
    const { isAvatarsVisible } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleAvatarsVisibility}>Click me!!!</button>
        <div>Here should be the list of users</div>
        {isAvatarsVisible &&
          this.avatarList.map((avatar, index) => (
            <Avatar
              key={index}
              userName={avatar.userName}
              imageSrc={avatar.imageSrc}
            />
          ))}
      </div>
    );
  }
}

export default App;
