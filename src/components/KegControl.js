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
          alcohol: 5,
          pints: 128,
          price: 4,
          id: "1",
        },
        {
          name: "testname2",
          brand: "testbrand2",
          flavor: "testflavor2",
          alcohol: 4,
          pints: 128,
          price: 4.5,
          id: "2",
        },
      ],
      newFormDisplay: false,
      selectedKeg: null,
    };
  }

  handleResetClick = () =>
    this.setState({ newFormDisplay: false, selectedKeg: null });

  handleNewClick = () => {
    this.setState({ newFormDisplay: true, selectedKeg: null });
  };

  handleNewKeg = (newKeg) => {
    const newKegList = this.state.controlKegList.concat(newKeg);
    this.setState({ controlKegList: newKegList, selectedKeg: null, newFormDisplay: false });
  };

  handleSelectKeg = (id) => {
    const selectedKeg = this.state.controlKegList.filter((k) => k.id === id)[0];
    this.setState({ selectedKeg: selectedKeg, newFormDisplay: false });
  };

  handleDeleteKeg = (id) => {
    console.log(id)
    const newKeglist = this.state.controlKegList.filter((k) => k.id !== id);
    console.log(newKeglist)
    this.setState({ controlKegList: newKeglist, selectedKeg: null, newFormDisplay: false })
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
    } else if (this.state.selectedKeg != null) {
      display = (
        <KegDetail
          keg={this.state.selectedKeg}
          closeDetail={this.handleResetClick}
          onDeletingKeg={this.handleDeleteKeg}
        />
      );
    }

    return (
      <>
        <KegList
          kegList={this.state.controlKegList}
          onSelectKeg={this.handleSelectKeg}
        />
        <button className="btn btn-dark" onClick={this.handleNewClick}>
          Add New Keg
        </button>
        {display}
      </>
    );
  }
}

export default KegControl;
