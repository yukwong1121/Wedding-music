var playAudio;

//config
var playingListName="No"
var musicFolderPath = './music/';
var FadeInTime = 5000; //5s
var FadeOutTime = 5000; //5s


$(document).ready(function() {
    console.log( "doc ready!" );

    // $("button").click(function(){
    //     alert("asd")
    // });

    fadeOutAllMusic();

    updatePlayingListName(playingListName);
    //$('#tone').prop("volume", 0.0);
});


function fadeInClick(n){    
    console.log("fadeInClick", n)
    fadeOutAllMusic();
    if (n != 5){
        $('#playlist'+n)[0].currentTime = 0
        $('#playlist'+n)[0].volume = 0;
        $('#playlist'+n).animate({volume: 1},FadeInTime)
        updatePlayingListName('Playlist '+n);
    }else{
        playlist5Music(n, 1, true)
    }
}

function playlist5Music(n, playNum, Anim){
    updatePlayingListName('Playlist '+n+ '/'+ playNum);
    $('#playlist'+n)[0].currentTime = 0
    $('#playlist'+n)[0].volume = 0;
    musicListConfig[playNum]
    $('#playlist'+n).attr("src", musicFolderPath+'playlist5/'+musicListConfig[playNum]+'.mp3');
    if (Anim) {
        $('#playlist'+n).animate({volume: 1},FadeInTime)
    }else{
        $('#playlist'+n).animate({volume: 1},0)
    }
    $('#playlist'+n).on('ended', function() {
        setTimeout(()=>{
            playlist5Music(n, playNum+1, false)
        }, 1000)
    });
}

function fadeOutClick(n){
    console.log("fadeOutClick", n)
    $('#playlist'+n).animate({volume: 0},FadeOutTime)


}

function fadeOutAllMusic(){
    for(var i =1; i <6; i++){
        try{
            $('#playlist'+i).prop("volume", 0.0);
        }catch(err){
            console.log("music didn't playing:", i)
        }
    }
}

function updatePlayingListName(w){
    $('#playingListName').html(w);
}


var musicListConfig={
    1: '1. MC oHo  KidNey 係咁先啦ft Kayan9896 Official MV ',
    2: '2. COLLARNevernever LandColor Coded Lyricstraditional Chinese顏色歌詞分配丨繁中歌詞',
    3: '3. Dear Jane  人類不宜飛行歌詞Lyrics',
    4: '4. Dear Jane  銀河修理員繁體卡拉OK歌詞',
    5: '5. Edan Lui呂爵安My Apple PieColor Coded Lyrics',
    6: '6. Error愛情值日生歌詞版 lyrics',
    7: '7. GarethT  笑住喊  歌詞版',
    8: '8. Ian Chan陳卓賢留一天與你喘息Color Coded Lyricstraditional Chinese顏色歌詞分配丨繁中歌詞',
    9: '9. MC 張天賦  老派約會之必要  歌詞版',
    10: '10. 三分甜  Lolly Talk Color Coded Lyrics',
    11: '11. 五種愛的密語  Lolly Talk Color Coded Lyrics',
    12: '12. 再次puppy love',
    13: '13. 姜濤 Keung To  蒙著嘴說愛你 So I say I love you 只有愛恆久不枯 動態歌詞Lyrics',
    14: '14. 馮允謙 Jay Fung  報復式浪漫 feat moon tang Sweeetly Official Music Video'
}