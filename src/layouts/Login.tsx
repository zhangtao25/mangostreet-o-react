import React from 'react';

export interface Props {

}

interface State {

}


class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={'login'}>
        我是login
      </div>
    );
  }

  componentDidMount(): void {
  }
}

export default Login;
