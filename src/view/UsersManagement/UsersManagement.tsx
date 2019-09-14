
import React from "react";
export interface Props {

}

interface State {

}

class UsersManagement extends React.Component<Props, State> {
  state = {
    collapsed: false,
  };
  render() {
    return (
      <div>
        user
      </div>
    );
  }
  componentDidMount(): void {
  }
}
export default UsersManagement
