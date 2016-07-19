import React, { PropTypes } from 'react';

export default class WordNew extends React.Component {

  constructor() {
    super()
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTranslationChange = this.handleTranslationChange.bind(this)
  }

  state = {
    name: null,
    translation: null
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleTranslationChange(event) {
    this.setState({
      translation: event.target.value
    });
  }

  render() {
    return(
      <form action="#" className='word'>
        <input value={this.state.name} onChange={this.handleNameChange} />
        <input value={this.state.translation} onChange={this.handleTranslationChange} />

        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
          <i className="material-icons">add</i>
        </button>
      </form>


    )
  }

}
