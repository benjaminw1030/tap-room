import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";
import donkeyKong from "./../img/donkey-kong.jpg";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlKegList: [
        {
          name: "Diddy's Double IPA",
          brand: "DK Breweries",
          flavor: "Strong and hoppy",
          alcohol: 8,
          pints: 124,
          price: 4,
          id: "1",
        },
        {
          name: "K.Rool's Kölsch",
          brand: "KremCo",
          flavor: "light and fruity",
          alcohol: 5,
          pints: 124,
          price: 4.5,
          id: "2",
        },
        {
          name: "Ape Amber Ale",
          brand: "DK Breweries",
          flavor: "notes of citrus",
          alcohol: 6,
          pints: 124,
          price: 5.25,
          id: "3",
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
    this.state.editing
      ? this.setState({ editing: false })
      : this.setState({ editing: true });
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
    this.setState({ selectedKeg: selectedKeg, newFormDisplay: false, editing: false });
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
    this.setState({ controlKegList: editedKegList, editing: false, selectedKeg: null });
  };

  handleSellPint = (id) => {
    let newKegList = [...this.state.controlKegList];
    const index = this.state.controlKegList.findIndex((k) => k.id === id);
    if (newKegList[index].pints > 0) {
      newKegList[index].pints--;
    }
    this.setState({ controlKegList: newKegList });
  };

  render() {
    let display = (
      <img src={donkeyKong} alt="donkey kong" className="donkey-kong" />
    );
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
    } else {
      display = (
        <img src={donkeyKong} alt="donkey kong" className="donkey-kong" />
      );
    }

    return (
      <>
        <div className="row">
          <div className="col-md-5 keg-list">
            <KegList
              kegList={this.state.controlKegList}
              onSelectKeg={this.handleSelectKeg}
            />
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark" onClick={this.handleNewClick}>
                Add New Keg
              </button>
            </div>
          </div>
          <div className="col-md-6 keg-display">{display}</div>
        </div>
      </>
    );
  }
}

export default KegControl;
