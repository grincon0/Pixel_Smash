demo = window.demo || (window.demo = {});


let mainTheme,
    battle1,
    battle2,
    battle3,
    battle4,
    onlineLobby,
    selectFighter,
    tracks,
    cachedTrack,
    slotCreated = false;




class soundPlayer {
    constructor() {
        this.songName = '',
        this.trackNumber = 0
    }

    decrementTrack = () => {
        if (this.trackNumber !== 0) {
            this.trackNumber = this.trackNumber -= 1;
        }
    }
    incrementTrack = () => {
        if (this.trackNumber < 6) {
            this.trackNumber = this.trackNumber += 1;
          
        } else {
            this.trackNumber = 0;
        }
    }
    setSong = (name) => {

            this.songName = name;

    }
}



const soundTester = new soundPlayer();

let currentTrackNumber = parseInt(soundTester.trackNumber);


demo.soundTest = function () { };
demo.soundTest.prototype = {
    preload: function () {
        game.load.image('sky', '../assets/art/onlineBG3.png');

        /* Load audio for sound test */

        mainTheme = game.load.audio('mainTheme', '../assets/music/ThemeOfPixelSmash.ogg')
        battle1 = game.load.audio('battle1', '../assets/music/Ambush.mp3')
        battle2 = game.load.audio('battle2', '../assets/music/Dive into Battle.ogg')
        battle3 = game.load.audio('battle3', '../assets/music/FriendlyCompetition.mp3')
        battle4 = game.load.audio('battle4', '../assets/music/test.mp3')
        onlineLobby = game.load.audio('onlineLobby', '../assets/music/Intermission.ogg')
        selectFighter = game.load.audio('selectFighter', '../assets/music/Ready.ogg');

        game.load.bitmapFont('nokia', '../assets/art/fonts/font.png', '../assets/art/fonts/font.fnt');

        game.load.spritesheet('button', '../assets/art/buttonbox.png');



    },
    create: function () {
        mainTheme = game.add.audio('mainTheme');
        battle1 = game.add.audio('battle1');
        battle2 = game.add.audio('battle2');
        battle3 = game.add.audio('battle3');
        battle4 = game.add.audio('battle4');
        onlineLobby = game.add.audio('onlineLobby');
        selectFighter = game.add.audio('selectFighter');

        soundText();

        makeButton('<', 120, 600);

        makeButton('>', 510, 600);

        tracks = [
            {
                name: mainTheme,
                number: 1,
            },
            {
                name: battle1,
                number: 2
            },
            {
                name: battle2,
                number: 3,
            },
            {
                name: battle3,
                number: 4
            },
            {
                name: battle4,
                number: 5
            },
            {
                name: onlineLobby,
                number: 6
            },
            {
                name: selectFighter,
                number: 7
            },
            {
                name: mainTheme,
                number: 8
            }

        ];

        cachedTrack = currentTrackNumber;
        makeButton(`BGM: 0${currentTrackNumber}`, 310, 600);
        soundTester.setSong(tracks[currentTrackNumber].name);
        tracks[currentTrackNumber].name.play();



    },
    update: function () {

        if(cachedTrack !== currentTrackNumber){
            makeButton(`BGM: 0${currentTrackNumber}`, 310, 600);
        }

      

           
        
        
    }

};


function makeButton(name, x, y) {


    const button = game.add.button(x, y, 'button', click, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    const text = game.add.bitmapText(x, y + 7, 'nokia', name, 40);
    text.x += (button.width / 2) - (text.textWidth / 2);

}

function click(button) {
    if (button.name === '<') {

        tracks[currentTrackNumber].name.stop();
    
        soundTester.decrementTrack();
        currentTrackNumber = soundTester.trackNumber;
        soundTester.setSong(`${tracks[currentTrackNumber].name}`);
        tracks[currentTrackNumber].name.play();

        
    }

    if (button.name === '>') {
      
        tracks[currentTrackNumber].name.stop();
        

        soundTester.incrementTrack();
        currentTrackNumber = soundTester.trackNumber;
        soundTester.setSong(`${tracks[currentTrackNumber].name}`);
        tracks[currentTrackNumber].name.play();
    }


}

function soundText(){
    let text = game.add.text(260,100, 'SOUND TEST');
    text.font= 'PipeDream';
    text.fontWeight = 'bold';
    text.fontSize = 75;
    text.fill = '#ffffff';
}