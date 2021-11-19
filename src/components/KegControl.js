import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlKegList: [
        { 
          name: "testname",
          brand: "testbrand",
          flavor: "testflavor",
          alchohol: 5,
          pints: 128,
          price: 4,
          id: 1
        },
        { 
          name: "testname2",
          brand: "testbrand2",
          flavor: "testflavor2",
          alchohol: 4,
          pints: 128,
          price: 4.5,
          id: 2
        }
      ],
      newFormDisplay: false,
    };
  }

  handleResetClick = () => this.setState({ newFormDisplay: false });

  handleNewClick = () => {
    this.setState({ newFormDisplay: true });
  };

  handleNewKeg = (newKeg) => {
    const newKegList = this.state.controlKegList.concat(newKeg);
    this.setState({ controlKegList: newKegList, newFormDisplay: false });
  };

  render() {
    let display = null; //add in image
    if (this.state.newFormDisplay) {
      display = (
        <NewKegForm
          onResetClick={this.handleResetClick}
          onNewKeg={this.handleNewKeg}
        />
      );
    }
    return (
      <>
        <KegList kegList={this.state.controlKegList} />
        <button className="btn btn-dark" onClick={this.handleNewClick}>
          Add New Keg
        </button>
        {display}
      </>
    );
  }
}

export default KegControl;
