export function giftExport() {
  function auditionApi() {
    let nicoAudition = new giftAudition("gift_audition_coty2022_sweet");
  
    let nicoCallbackFunction = function (response) {
      let auditionData = response;
      let participants = auditionData.data.participants;
      artistSort(participants);
    };

    nicoAudition.getDate(nicoCallbackFunction);
  }
  
  function artistSort(IdAndScore) {

    var artist = [
      {no:1,name:"豊田",userId:119641499,score:0}
      ,{no:2,name:"黒澤",userId:116301244,score:0}
      ,{no:3,name:"垣見",userId:121059217,score:0}
      ,{no:4,name:"飯塚",userId:121065331,score:0}
      ,{no:5,name:"綿谷",userId:33742414,score:0}
      ,{no:6,name:"佐々木",userId:19715178,score:0}
    ];

    for(var i = 0 ; i < artist.length ; i++ ){
      var id = artist[i].userId;
      var target = IdAndScore.filter(x => x.userId == id);
      artist[i].score = target[0].totalGiftPoint;
    }

    for(var i = 0 ; i < artist.length ; i++ ){
      $(".giftTest-ParticipantList_Point").eq(i).text(artist[i].score);
      $(".giftTest-ParticipantList_Name").eq(i).text(artist[i].name);
      $(".giftTest-ParticipantList_MypageAnchor").eq(i).attr("href","https://www.nicovideo.jp/user/" + artist[i].userId);
    }

    artist.sort(
      function(a,b){
        var aName = a["score"];
        var bName = b["score"];
        if( aName < bName ) return 1;
        if( aName > bName ) return -1;
        return 0;
      }
    );

    var kurikoshi = 1;
    for(var i = 0 ; i < artist.length ; i++ ){
        artist[i].rank = (i+1);
        if(i != 0 && artist[i].score == artist[i-1].score){  
            artist[i].rank -= kurikoshi;
            kurikoshi++;
        }
        else{
            kurikoshi = 1;
        }
    }

    artist.sort(
      function(a,b){
        var aName = a["no"];
        var bName = b["no"];
        if( aName > bName ) return 1;
        if( aName < bName ) return -1;
        return 0;
      }
    );

    for(var i = 0 ; i < artist.length ; i++ ){
      $(".giftTest-ParticipantList_No").eq(i).text(artist[i].rank);
    }

    console.log(artist);

  }

  $(window).on('load', function () {
    auditionApi();
  });

}
