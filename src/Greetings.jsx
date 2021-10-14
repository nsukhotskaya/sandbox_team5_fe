import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Greetings extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        Hello,
        {name}
      </div>
    );
  }
}

export default Greetings;
