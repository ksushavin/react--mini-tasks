import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import stickers from '../stickers.json';
import { StickerList } from "./StickerList/StickerList";


export class App extends Component {
  state = {
    selectedStickerLable: null,
  }

  selectStickerLable = lable => {
    this.setState({
      selectedStickerLable: lable
    })
  }
  
  render() {
    return(
      <>
        <h1>{ this.state.selectedStickerLable}</h1>
        <StickerList stickers={stickers} onSelect={this.selectStickerLable} />
        <GlobalStyle/>
      </>
    )
  }
}
  
