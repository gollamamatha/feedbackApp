// Write your React code here.
import {Component} from 'react'

import './index.css'

class FeedBack extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  FeedbackSection = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app_container">
        <div className="feedback_container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji_container">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="emoji_button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    className="emoji"
                    alt={emoji.name}
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  ThankYousection = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app_container">
        <div className="thankyou_container">
          <img src={loveEmojiUrl} alt="love emoji" className="love_emoji" />
          <h1 className="heading_text">Thank You</h1>
          <p className="description">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div>
        {isFeedbackSelected ? this.ThankYousection() : this.FeedbackSection()}
      </div>
    )
  }
}

export default FeedBack
