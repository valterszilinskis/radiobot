class MusicPlayer {
    constructor(YoutubeApi, options = {
        loop: false,
        songChooseTimeout: 10,
        volume: 30
    }) {
        if(typeof YoutubeApi !== "string")
            throw new Error("The Youtube Api Key provided is not a string.");
        this.apiKey = YoutubeApi;
        this.queueList = new Map();
        this.settings = {};
        if(options.songChooseTimeout)
            this.settings.songChooseTimeout = options.songChooseTimeout * 1000;
        else
            this.settings.songChooseTimeout = 10000;
        if(options.volume)
            this.settings.volume = options.volume;
        else
            this.settings.volume = 30;
        if(options.loop)
            this.settings.loop = options.loop;
        else
            this.settings.loop = false;

    }
    #addToQueue(){

    }
    play(){

    }
    stop(){

    }
    skip(){

    }
    loop(){

    }
    shuffle(){

    }
    volume(){

    }
    pause(){

    }
    resume(){

    }
    showQueue(){

    }
    nowPlaying(){

    }


}