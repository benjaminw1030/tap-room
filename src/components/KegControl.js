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
          pints: 124,
          price: 4,
          id: "1",
        },
        {
          name: "testname2",
          brand: "testbrand2",
          flavor: "testflavor2",
          alcohol: 4,
          pints: 124,
          price: 4.5,
          id: "2",
        },
      ],
      newFormDisplay: false,
      selectedKeg: null,
      editing: false,
    };
  }

  handleResetClick = () => {
    this.setState({ newFormDisplay: false, selectedKeg: null, editing: false });
  };

  handleNewClick = () => {
    this.setState({ newFormDisplay: true, selectedKeg: null });
  };

  handleEditClick = () => {
    this.state.editing ? this.setState({ editing: false}) : this.setState({ editing: true });
  };

  handleNewKeg = (newKeg) => {
    const newKegList = this.state.controlKegList.concat(newKeg);
    this.setState({
      controlKegList: newKegList,
      selectedKeg: null,
      newFormDisplay: false,
    });
  };

  handleSelectKeg = (id) => {
    const selectedKeg = this.state.controlKegList.filter((k) => k.id === id)[0];
    this.setState({ selectedKeg: selectedKeg, newFormDisplay: false });
  };

  handleDeleteKeg = (id) => {
    const newKeglist = this.state.controlKegList.filter((k) => k.id !== id);
    this.setState({
      controlKegList: newKeglist,
      selectedKeg: null,
      newFormDisplay: false,
    });
  };

  handleEditKeg = (keg) => {
    const index = this.state.controlKegList.findIndex((k) => k.id === keg.id);
    let editedKegList = [...this.state.controlKegList];
    editedKegList[index] = keg;
    this.setState({ controlKegList: editedKegList, editing: false });
  }

  handleSellPint = (id) => {
    let newKegList = [...this.state.controlKegList];
    const index = this.state.controlKegList.findIndex((k) => k.id === id);
    if (newKegList[index].pints > 0) {
      newKegList[index].pints--;
    }
    this.setState({ controlKegList: newKegList });
  };

  render() {
    let display = null; //add in image
    if (this.state.newFormDisplay) {
      display = (
        <NewKegForm
          onNewKeg={this.handleNewKeg}
          onBackButton={this.handleResetClick}
        />
      );
    } else if (this.state.selectedKeg != null && !this.state.editing) {
      display = (
        <KegDetail
          keg={this.state.selectedKeg}
          closeDetail={this.handleResetClick}
          onDeletingKeg={this.handleDeleteKeg}
          onSellPint={this.handleSellPint}
          onEditClick={this.handleEditClick}
        />
      );
    } else if (this.state.selectedKeg != null && this.state.editing) {
      display = (
        <>
          <EditKegForm
            onEditKeg={this.handleEditKeg}
            onBackButton={this.handleEditClick}
            keg={this.state.selectedKeg}
          />
        </>
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
