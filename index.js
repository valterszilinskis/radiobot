const YouTube = require('youtube-node');
const youtube = new YouTube();
youtube.setKey("AIzaSyDWDmfyJ7uXWbdi7bceWrPJN-yDVLNEWW0");

youtube.search('RadioHead - creep', 10, function(err, result){
    if(err){
        console.error(err)
    }else{
        console.log(JSON.stringify(result, null, 2))
    }
})


