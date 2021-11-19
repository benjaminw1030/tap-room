import React from 'react';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlKegList = [],
    }
  }

  render() {
    let display = null;
    display = (
      <>
        <KegList kegList={this.state.controlKegList}/>
        <button className="btn btn-dark">Add New Keg</button>
      </>
      );
    }
  }

  export default KegControl