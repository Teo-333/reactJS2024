import React from 'react';

class Avatar extends React.Component {
  render() {
    const { userName, imageSrc } = this.props;
    return (
      <div>
        <div>{userName}</div>
        <img src={imageSrc} alt="Avatar" />
      </div>
    );
  }
}

export default Avatar;
