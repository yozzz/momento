import React, { PropTypes } from 'react';
import WordNew from './WordNew';

export default class WordComp extends React.Component {

  render () {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.words.map(function(word) {
              return (
                <tr key={word.i}>
                  <td >{word.name}</td>
                  <td >{word.translation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/*<WordNew />*/}
      </div>
    )
  }
}
