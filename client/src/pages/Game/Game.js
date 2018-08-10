import React,{Component} from "react";
import "./Game.css";
import API from "../../utils/API";

class Game extends Component  {
    constructor (){
        super();
        this.posted = false;
    }
    componentDidMount(){
        window.addEventListener("message", this.receiveMessage, false);

        setTimeout(() => {
            this.test()
        }, 1000);
    }
        
    test(){
        
        var game = document.getElementById('myFrame');
        if (game)
        game.contentWindow.postMessage("helloooo", "https://phaser-ludum.herokuapp.com");

        
        setTimeout(() => {
            this.test()
        }, 1000);
    }

    receiveMessage(event){
        var gameCharacter = JSON.parse(localStorage.getItem("local"));
        if(event.origin !== "https://phaser-ludum.herokuapp.com"){
        return;
        }else {
            console.log(event.data)
            if(event.data.over && !this.posted){
                API.postScore({name: gameCharacter.data.username, score: event.data.score})
                this.posted = true;
            } else if (!event.data.over && this.posted){
                this.posted = false;
            }
        }
        
    }



    render() {
        
        return (
            <div>
            <iframe src='https://phaser-ludum.herokuapp.com/' id='myFrame'></iframe>
            
            <div className="board">
 
  <div className="keyboard">
    <div className="keyboard-row thin">
      <div className="key lowercase">Esc</div>
      <div className="key function lo-bright"><span>f1</span></div>
      <div className="key function hi-bright"><span>f2</span></div>
      <div className="key function expose"><span>f3</span></div>
      <div className="key function tilez"><span>f4</span></div>
      <div className="key function"><span>f5</span></div>
      <div className="key function"><span>f6</span></div>
      <div className="key function rewind"><span>f7</span></div>
      <div className="key function play-pause"><span>f8</span></div>
      <div className="key function ffwd"><span>f9</span></div>
      <div className="key function mute"><span>f10</span></div>
      <div className="key function lo-vol"><span>f11</span></div>
      <div className="key function hi-vol"><span>f12</span></div>
      <div className="key eject"></div>
    </div>
    <div className="keyboard-row">
      <div className="key"><span>~<br/>`</span></div>
      <div className="key"><span>!<br/>1</span></div>
      <div className="key"><span>@<br/>2</span></div>
      <div className="key"><span>#<br/>3</span></div>
      <div className="key"><span>$<br/>4</span></div>
      <div className="key"><span>%<br/>5</span></div>
      <div className="key"><span>^<br/>6</span></div>
      <div className="key"><span>&amp;<br/>7</span></div>
      <div className="key"><span>*<br/>8</span></div>
      <div className="key"><span>(<br/>9</span></div>
      <div className="key"><span>)<br/>0</span></div>
      <div className="key"><span>_<br/>-</span></div>
      <div className="key"><span>+<br/>=</span></div>
      <div className="key extra-size lowercase lower-right"><span className="lower-row-text">delete</span></div>
    </div>
    <div className="keyboard-row">
      <div className="key extra-size lowercase lower-left"><span className="lower-row-text">tab</span></div>
      <div className="key">Q</div>
      <div className="key high">UP</div>
      <div className="key">E</div>
      <div className="key">R</div>
      <div className="key">T</div>
      <div className="key">Y</div>
      <div className="key">U</div>
      <div className="key">I</div>
      <div className="key">O</div>
      <div className="key">P</div>
      <div className="key"><span><br/>[</span></div>
      <div className="key"><span>}<br/>]</span></div>
      <div className="key"><span>|<br/>\</span></div>
    </div>
    <div className="keyboard-row">
      <div className="key lowercase lower-left extra-size-two"><span className="lower-row-text">caps lock</span><span className="absolute-left caps-dot">&bull;</span></div>
      <div className="key high">LT</div>
      <div className="key high">DN</div>
      <div className="key high">RT</div>
      <div className="key">F</div>
      <div className="key">G</div>
      <div className="key">H</div>
      <div className="key">J</div>
      <div className="key">K</div>
      <div className="key">L</div>
      <div className="key"><span>:<br/>;</span></div>
      <div className="key"><span>"<br/>'</span></div>
      <div className="key extra-size-two lowercase lower-right"><span className="lower-row-text">return</span><span className="absolute-right">enter</span></div>
    </div>
    <div className="keyboard-row">
      <div className="high key double-size lowercase lower-left"><span className="lower-row-text">SHIELD</span></div>
      <div className="key">Z</div>
      <div className="key">X</div>
      <div className="key">C</div>
      <div className="key">V</div>
      <div className="key">B</div>
      <div className="key">N</div>
      <div className="key">M</div>
      <div className="key"><span>&lt;<br/>,</span></div>
      <div className="key"><span>&gt;<br/>.</span></div>
      <div className="key"><span>?<br/>/</span></div>
      <div className="high key double-size lowercase lower-right"><span className="lower-row-text">SHIELD</span></div>
    </div>
    <div className="keyboard-row bottom-row">
      <div className="key lower-left lowercase"><span className="lower-row-text">fn</span></div>
      <div className="key lower-left lowercase"><span className="lower-row-text">control</span></div>
      <div className="key lower-left lowercase"><span className="lower-row-text">option</span><span className="absolute-left">alt</span></div>
      <div className="key lower-center lowercase extra-size-two"><span className="lower-row-text">command</span><span className="absolute-right icon">&#8984;</span></div>
      <div className="key space-bar high">SHOOT ARROW</div>
      <div className="key lower-center lowercase extra-size-two"><span className="lower-row-text">command</span><span className="absolute-left icon">&#8984;</span></div>
      <div className="key lower-right lowercase"><span className="lower-row-text">option</span><span className="absolute-right">alt</span></div>
      <div className="arrows">
          <div className="key">&#9668;</div>
          <div className="up-down">
            <div className="key">&#9650;</div>
            <div className="key">&#9660;</div>
          </div>
          <div className="key">&#9658;</div>
        </div>
      </div>
    </div>
  </div>
</div>
            
            
        
        )
        }    

}

export default Game;