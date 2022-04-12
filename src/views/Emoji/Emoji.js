import React from 'react'
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import "./EmojiResults.css";

class Emoji extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <SearchInput textChange={this.handleSearchChange} />
        </div>
        <div className="EmojiResults">
          <EmojiResults emojiData={this.state.filteredEmoji} />
        </div>
      </>
    )
  }
}
export default Emoji;