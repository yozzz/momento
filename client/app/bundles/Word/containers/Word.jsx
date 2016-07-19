import React, { PropTypes } from 'react';
import WordComp from '../components/WordComp';

// Simple example of a React "smart" component
export default class Word extends React.Component {

  render() {
    return (
      <div >
        <WordComp words={this.props.words}/>
      </div>
    );
  }
}
