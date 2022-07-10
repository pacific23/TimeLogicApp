import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Stories from "./stories.jsx";

import clock0 from "./images/Clock0.png";
import clock1 from "./images/Clock1.png";
import clock2 from "./images/Clock2.png";
import clock3 from "./images/Clock3.png";
import clock4 from "./images/Clock4.png";
import clock5 from "./images/Clock5.png";
import clockX from "./images/ClockX.png";
import perso0 from "./images/Perso0.png";
import perso1 from "./images/Perso1.png";
import perso2 from "./images/Perso2.png";
import perso3 from "./images/Perso3.png";
import perso4 from "./images/Perso4.png";
import perso5 from "./images/Perso5.png";
import persoX from "./images/PersoX.png";
import zone0 from "./images/Zone0.png";
import zone1 from "./images/Zone1.png";
import zone2 from "./images/Zone2.png";
import zone3 from "./images/Zone3.png";
import zone4 from "./images/Zone4.png";
import zone5 from "./images/Zone5.png";
import infoEmpty from "./images/InfoEmpty.png";
import infoPrivate from "./images/InfoPrivate.png";
import infoPublic from "./images/InfoPublic.png";
import replay from "./images/Replay.png";
import infoZone0 from "./images/InfoZone0.png";
import infoZone1 from "./images/InfoZone1.png";
import infoZone2 from "./images/InfoZone2.png";
import infoZone3 from "./images/InfoZone3.png";
import infoZone4 from "./images/InfoZone4.png";
import infoZone5 from "./images/InfoZone5.png";
import infoValue0 from "./images/InfoValue0.png";
import infoValue1 from "./images/InfoValue1.png";
import infoValue2 from "./images/InfoValue2.png";
import infoValue3 from "./images/InfoValue3.png";
import infoValue4 from "./images/InfoValue4.png";
import infoValue5 from "./images/InfoValue5.png";
import infoValue6 from "./images/InfoValue6.png";

var clocks = [clock0, clock1, clock2, clock3, clock4, clock5];
var persos = [perso0, perso1, perso2, perso3, perso4, perso5];
var zones = [zone0, zone1, zone2, zone3, zone4, zone5];

class App extends React.Component {
  state = {
    actualPage: 0,
    players: [{ name: "Joueur" }, { name: "Joueur" }],
    actualPlayer: 0,
    actualPhase: 0,
    actualRow: 0,
    actualPlaquette: 0,
    actualZone: 0,
    showInfo: false,
    showButtonNextPlayer: false,
    canReturn: true,
    informations: []
  };
  stories = new Stories();
  story;

  launchGame(title) {
    this.story = this.stories.getRandomGame(title);
    this.setState({
      actualPage: 1
    });
  }

  removePlayer(id) {
    var copyPlayers = [...this.state.players];
    copyPlayers.splice(id, 1);
    this.setState({ players: [] }, () =>
      this.setState({ players: copyPlayers })
    );
  }

  addPlayer(id) {
    var copyPlayers = [...this.state.players];
    copyPlayers.push({
      name: "Joueur"
    });
    this.setState({ players: copyPlayers });
  }

  changeName(name, id) {
    this.state.players[id].name = name;
  }

  infoGame() {
    this.setState({
      actualPage: 2
    });
  }

  startGame() {
    this.setState({
      actualPlayer: 0,
      actualPhase: 0,
      actualPage: 3
    });
  }

  cancelChoice() {
    this.setState({
      actualPhase: 0
    });
  }

  clickPlaquette(row, plaquette) {
    this.setState({
      actualRow: row,
      actualPlaquette: plaquette,
      canReturn: true,
      actualPhase: 1
    });
  }

  clickZone(zone) {
    this.state.informations = this.story.data[zone][this.state.actualRow][
      this.state.actualPlaquette
    ];
    this.setState({
      showInfo: false,
      actualZone: zone,
      showButtonNextPlayer: false,
      canReturn: true,
      actualPhase: 2
    });
  }

  showInfo() {
    this.setState({
      showButtonNextPlayer: true,
      canReturn: false,
      showInfo: true
    });
  }

  hideInfo() {
    this.setState({
      showInfo: false
    });
  }

  nextPlayer() {
    this.setState({
      actualPhase: 0,
      actualPlayer: (this.state.actualPlayer + 1) % this.state.players.length
    });
  }

  samePlayer() {
    this.setState({
      actualPhase: 0
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.actualPage == 0 ? this.renderHomePage() : null}
        {this.state.actualPage == 1 ? this.renderPreGame() : null}
        {this.state.actualPage == 2 ? this.renderStartingInfo() : null}
        {this.state.actualPage == 3 ? this.renderGame() : null}
      </div>
    );
  }

  renderHomePage() {
    var titleStories = this.stories.getListTitleStories();
    return (
      <table class="main">
        <tr>
          <td>
            <h1>Time Logic App</h1>
            {titleStories.map((story) => (
              <div>
                <input
                  class="button"
                  type="button"
                  value={story.title + " (" + story.counter + ")"}
                  onClick={() => this.launchGame(story.title)}
                />
                <br />
                <br />
              </div>
            ))}
          </td>
        </tr>
      </table>
    );
  }

  renderPreGame() {
    return (
      <table class="main">
        <tr>
          <td>
            <h1>{this.story.title}</h1>
            <h3>{"ID" + this.story.id}</h3>
            {this.state.players.map((joueur, id) => (
              <div>
                <h2>
                  {id + 1 + " - "}
                  <input
                    autoFocus
                    class="text"
                    type="text"
                    defaultValue={joueur.name}
                    size="10"
                    onChange={(e) => this.changeName(e.target.value, id)}
                  />
                  &nbsp;&nbsp;
                  <input
                    class="button"
                    type="button"
                    value="-"
                    onClick={() => this.removePlayer(id)}
                  />
                </h2>
              </div>
            ))}
            {this.state.players.length != 4 ? (
              <div>
                <input
                  class="button"
                  type="button"
                  value="+"
                  onClick={() => this.addPlayer()}
                />
              </div>
            ) : null}
            <br />
            <div>
              <input
                class="button"
                type="button"
                value="START"
                onClick={() => this.infoGame()}
              />
            </div>
          </td>
        </tr>
      </table>
    );
  }

  renderStartingInfo() {
    return (
      <table class="main">
        <tr>
          <td>
            <h1>{this.story.title}</h1>
            <h3>{"ID" + this.story.id}</h3>
            <h2>Informations de départ</h2>
            {this.story.startInfos.map((info) => (
              <div>
                <img src={persos[info[0]]} width="75" height="75" />
                <img src={clocks[info[1]]} width="75" height="75" />
                <img src={zones[info[2]]} width="75" height="75" />
              </div>
            ))}
            <br />
            <div>
              <input
                class="button"
                type="button"
                value="START"
                onClick={() => this.startGame()}
              />
            </div>
          </td>
        </tr>
      </table>
    );
  }

  renderGame() {
    return (
      <div>
        {this.state.actualPhase == 0 ? this.renderPhase0() : null}
        {this.state.actualPhase == 1 ? this.renderPhase1() : null}
        {this.state.actualPhase == 2 ? this.renderPhase2() : null}
      </div>
    );
  }

  renderPhase0() {
    return (
      <table class="main">
        <tr>
          <td>
            <h1>{this.story.title}</h1>
            <h3>{"ID" + this.story.id}</h3>
            <h1>
              {this.state.players[this.state.actualPlayer].name +
                " - " +
                (this.state.actualPlayer + 1)}
            </h1>
            {this.story.plaquettes[0].map((visible, i) =>
              visible ? (
                <button
                  class="smallButton"
                  type="submit"
                  onClick={() => this.clickPlaquette(0, i)}
                >
                  <img src={persos[i]} width="75" height="75" />
                </button>
              ) : null
            )}
            <br />
            <br />
            {this.story.plaquettes[1].map((visible, i) =>
              visible ? (
                <button
                  class="smallButton"
                  type="submit"
                  onClick={() => this.clickPlaquette(1, i)}
                >
                  <img src={clocks[i]} width="75" height="75" />
                </button>
              ) : null
            )}
            <br />
            <br />
            <input
              class="smallButton"
              type="button"
              value="Skip player"
              onClick={() => this.nextPlayer()}
            />
          </td>
        </tr>
      </table>
    );
  }

  renderPhase1() {
    return (
      <table class="main">
        <tr>
          <td>
            <h1>{this.story.title}</h1>
            <h3>{"ID" + this.story.id}</h3>
            <h1>
              {this.state.players[this.state.actualPlayer].name +
                " - " +
                (this.state.actualPlayer + 1)}
            </h1>
            {this.state.actualRow == 0 ? (
              <img
                src={persos[this.state.actualPlaquette]}
                width="100"
                height="100"
              />
            ) : null}
            {this.state.actualRow == 1 ? (
              <img
                src={clocks[this.state.actualPlaquette]}
                width="100"
                height="100"
              />
            ) : null}
            {this.state.canReturn ? (
              <input
                class="smallButton"
                type="button"
                value="X"
                onClick={() => this.cancelChoice()}
              />
            ) : null}
            <br />
            <br />
            {this.story.data.map((data, i) => (
              <button
                class="smallButton"
                type="submit"
                onClick={() => this.clickZone(i)}
              >
                <img src={zones[i]} width="75" height="75" />
              </button>
            ))}
          </td>
        </tr>
      </table>
    );
  }

  renderPhase2() {
    return (
      <table class="main">
        <tr>
          <td>
            <h1>{this.story.title}</h1>
            <h3>{"ID" + this.story.id}</h3>
            <h1>
              {this.state.players[this.state.actualPlayer].name +
                " - " +
                (this.state.actualPlayer + 1)}
            </h1>
            <table class="main">
              <tr height="120">
                <td>
                  {this.state.actualRow == 0 ? (
                    <img
                      src={persos[this.state.actualPlaquette]}
                      width="100"
                      height="100"
                    />
                  ) : null}
                  {this.state.actualRow == 1 ? (
                    <img
                      src={clocks[this.state.actualPlaquette]}
                      width="100"
                      height="100"
                    />
                  ) : null}
                  <img
                    src={zones[this.state.actualZone]}
                    width="100"
                    height="100"
                  />
                  {this.state.canReturn ? (
                    <input
                      class="smallButton"
                      type="button"
                      value="X"
                      onClick={() => this.cancelChoice()}
                    />
                  ) : null}
                </td>
              </tr>
            </table>
            <br />
            <br />
            <input
              class="button"
              type="button"
              value="Pressez pour voir"
              onMouseDown={() => this.showInfo()}
              onMouseUp={() => this.hideInfo()}
            />
            <br />
            <br />
            <table class="main">
              <tr height="120">
                {this.state.showButtonNextPlayer ? (
                  <td class="info">
                    <img class="info" src={infoPublic} />
                    {this.state.informations[1].map((information) => (
                      <img
                        class="info"
                        src={require(`./images/${information}.png`)}
                      />
                    ))}
                  </td>
                ) : (
                  <td class="info">
                    <img class="info" src={infoEmpty} />
                  </td>
                )}
                {this.state.showInfo ? (
                  <td class="info">
                    <img class="info" src={infoPrivate} />
                    {this.state.informations[2].map((information) => (
                      <img
                        class="info"
                        src={require(`./images/${information}.png`)}
                      />
                    ))}
                  </td>
                ) : (
                  <td class="info">
                    <img class="info" src={infoEmpty} />
                  </td>
                )}
              </tr>
            </table>
            <br />
            <br />
            {this.state.showButtonNextPlayer ? (
              this.state.informations[0] ? (
                <input
                  class="button"
                  type="button"
                  value="Rejouer"
                  onClick={() => this.samePlayer()}
                />
              ) : (
                <input
                  class="button"
                  type="button"
                  value="Joueur suivant"
                  onClick={() => this.nextPlayer()}
                />
              )
            ) : null}
          </td>
        </tr>
      </table>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);