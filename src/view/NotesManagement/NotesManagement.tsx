
import React from "react";
export interface Props {

}

interface State {

}

class NotesManagement extends React.Component<Props, State> {
  state = {
    collapsed: false,
  };
  render() {
    return (
      <div>
        notes
      </div>
    );
  }
  componentDidMount(): void {
  }
}
export default NotesManagement
