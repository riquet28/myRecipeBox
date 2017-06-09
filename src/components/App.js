// React
import React from 'react';
import Header from './Header';
import Admin from './Admin';
import Card from './Card';
// Charger les Recettes
import recettes from '../recettes';


class App extends React.Component {

  state = {
    recettes: {}
  };

  chargerExemple = () => {
    this.setState({ recettes });
  };

  render() {

    const cards = Object
      .keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]} />)

    return(
      <div className="box">
        <Header pseudo={this.props.params.pseudo} />
        <div className="cards">
          { cards }
        </div>
        <Admin chargerExemple={this.chargerExemple} />
      </div>
    )
  }

  static propTypes = {
    params: React.PropTypes.object.isRequired
  };

}

export default App;
