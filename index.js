const YouTube = require('youtube-node');


const youtube = new YouTube();
youtube.setKey(process.env.YoutubeAPI);

youtube.search('RadioHead - creep', 10, function(err, result){
    if(err){
        console.error(err)
    }else{
        console.log(JSON.stringify(result, null, 2))
    }
})


