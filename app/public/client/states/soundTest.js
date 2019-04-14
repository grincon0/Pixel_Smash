demo = window.demo || (window.demo = {});


let mainTheme,
    battle1,
    battle2,
    battle3,
    battle4,
    onlineLobby,
    selectFighter,
    soundPlayer,
    tracks;


tracks = [
    {
        name: 'mainTheme',
        number: 1,
    },
    {
        name: 'battle1',
        number: 2
    },
    {
        name: 'battle2',
        number: 3,
    },
    {
        name: 'battle3',
        number: 4
    },
    {
        name: 'battle4',
        number: 5
    },
    {
        name: 'onlineLobby',
        number: 6
    },
    {
        name: 'selectFighter',
        number: 7
    }
];

class soundPlayer {
    constructor() {
        this.songName = '',
            this.trackNumber = 0
    }
    get songName() {
        return this.songName;
    }
    get trackNumber() {
        return this.trackNumber;
    }
    decrementTrack = () => {
        if (this.trackNumber > 0) {
            this.trackNumber = this.trackNumber--;
        }
    }
    incrementTrack = () => {
        if(this.trackNumber < 6 ){
            this.trackNumber = this.trackNumber++;
        }else{
            this.trackNumber = 0;
        }
    }
    setSong = (name, number) => {
        if (typeof name === 'string') {
            this.songName = name;
            this.trackNumber = number;
        } else {
            console.log('Error, song name propType needs to be string')
        }

    }
}



const soundTest = new soundPlayer();

const currentTrackNumber = soundTest.trackNumber;





demo.soundTest = function () { };
demo.soundTest.prototype = {
    preload: function () {
        game.load.image('sky', '../assets/art/onlineBG3.png');

        /* Load audio for sound test */

        mainTheme = game.load.audio('mainTheme', '../assets/music/ThemeOfPixelSmash.ogg')
        battle1 = game.load.audio('battle1', '../assets/music/Ambush.mp3')
        battle2 = game.load.audio('battle2', '../assets/music/Dive into Battle.ogg')
        battle3 = game.load.audio('battle3', '../assets/music/Friendly Competition.ogg')
        battle4 = game.load.audio('battle4', '../assets/music/test.mp3')
        onlineLobby = game.load.audio('onlineLobby', '../assets/music/Intermission.ogg')
        selectFighter = game.load.audio('selectFighter', '../assets/music/Ready.ogg');
    },
    create: function () {

        makeButton('<', 600, 600);
        makeButton(currentTrackNumber, 650, 600);
        makeButton('>', 700, 600);
    },
    update: function () {

    }

}


function makeButton(name, x, y) {

    var button = game.add.button(x, y, 'button', click, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    var text = game.add.bitmapText(x, y + 7, 'nokia', name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

}

function click(button) {

    soundTest.setSong(tracks[currentTrackNumber].name, tracks[currentTrackNumber].number);
    [soundTest.songName].play();
    currentTrackNumber++;
    /* button.play(); */


}