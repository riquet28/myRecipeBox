import React from 'react';


class Connexion extends React.Component {

  goToApp = event => {
    event.preventDefault();
    //Récuperer le pseudo
    const pseudo = this.boxInput.value;
    //Changer l'url
    this.context.router.transitionTo(`/box/${pseudo}`);
  };

  render() {
    return (
      <div className="connexionBox" onSubmit={e => this.goToApp(e)} >
        <form className="connexion">
          <h1>Ma boîte à Recettes</h1>
          <input
            type="text"
            placeholder="Nom du chef"
            pattern="[A-Za-z-]{1,}"
            required
            ref={input => {this.boxInput = input}}
          />
          <button type="submit">GO</button>
          <p>Pas de caractères spéciaux</p>
        </form>
      </div>
    )
  }

  static contextTypes = {
    router: React.PropTypes.object
  }
}

export default Connexion;
