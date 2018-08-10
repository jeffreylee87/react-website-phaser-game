import React, {Component} from "react";
// import DeleteBtn from "../../components/DeleteBtn"; import Jumbotron from
// "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import "./Leaderboard.css";

class Leaderboard extends Component {
  state = {
    profiles: []
  };

  componentDidMount() {
    this.loadScores();
  }

  loadScores = () => {
    API
      .getScore()
      .then(res =>
      // remeber to put stuff in here to show to page
      this.setState({profiles: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="screen">
            <div className="row helloJeff">
              <p className="heading">LUDUM</p>
            </div>
            <div className="row helloJeff">
              <h1 className="leadTxt">Leaderboard</h1>
            </div>

            {this.state.profiles.length
              ? (
                <div className="leader">
                  <table>
                    <tr>
                      <th>RANK</th>
                      <th>SCORE</th>
                      <th>NAME</th>
                    </tr>
                    {this
                      .state
                      .profiles
                      .map((i, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{i.score}</td>
                          <td>{i
                              .name
                              .toUpperCase()}</td>
                        </tr>
                      ))}
                  </table>
                </div>

              )
              : (
                <div className="leader">
                  <table>
                    <tr>
                      <th>RANK</th>
                      <th>SCORE</th>
                      <th>NAME</th>
                    </tr>
                    <tr>
                      <td>1st</td>
                      <td>465800</td>
                      <td>Jeff</td>
                    </tr>
                    <tr>
                      <td>2nd</td>
                      <td>12345</td>
                      <td>Dan</td>
                    </tr>
                    <tr>
                      <td>3rd</td>
                      <td>5800</td>
                      <td>Chuck Berry</td>
                    </tr>
                  </table>
                </div>

              )}

          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
