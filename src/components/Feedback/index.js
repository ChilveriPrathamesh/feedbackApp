// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isChecked: true}

  onChangeEmoji = () => {
    this.setState({isChecked: false})
  }

  render() {
    const {isChecked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="card-container">
          {isChecked ? (
            <div>
              <h1 className="review-ques">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id}>
                    <button
                      className="btn"
                      type="button"
                      onClick={this.onChangeEmoji}
                    >
                      <img
                        src={eachEmoji.imageUrl}
                        className="emoji-img"
                        alt={eachEmoji.name}
                      />
                      <p className="emoji-description">{eachEmoji.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="list-loveEmoji">
              <li>
                <img src={loveEmojiUrl} alt="love emoji" className="img" />
                <h1 className="wish">Thank you!</h1>
                <p className="feedback-response">
                  We will use your feedback to improve our customer support
                  performance
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
