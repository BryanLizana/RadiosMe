//<![CDATA[
    $(document).ready(function(){
        var streamrcast = {
            mp3: "http://67.212.179.138:8730/;"
          },
          ready = false;
          $("#jquery_jplayer_rcast").jPlayer({
            ready: function (event) {
              ready = true;
              $(this).jPlayer("setMedia", streamrcast).jPlayer("play");
            },
            play: function() {
              $(this).jPlayer("pauseOthers", 0);
         $('#volumercast').css('visibility','visible');
            },
            pause: function() {
              $(this).jPlayer("clearMedia");
         $('#volumercast').css('visibility','hidden');
            },
            error: function(event) {
              if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
                $(this).jPlayer("setMedia", streamrcast).jPlayer("play");
              }
            },
            swfPath: "jPlayer/dist/jplayer",
            supplied: "mp3",
          cssSelectorAncestor: "#jp_container_rcast",
            preload: "none",
            globalVolume: "true",
            volume: "100"
          });
   });
   //]]>
   
   $(document).ready(function() {
   
     refreshTable();
     loadArtist();
   
     $("#jquery_jplayer_rcast").on(
       $.jPlayer.event.ready + ' ' + $.jPlayer.event.play,
       function(event) {
   
   
         /* === VOLUME DRAGGING ==== */
   
         $('.jp-volume-bar').mousedown(function() {
             var parentOffset = $(this).offset(),
               width = $(this).width();
             $(window).mousemove(function(e) {
               var x = e.pageX - parentOffset.left,
                 volume = x / width
               if (volume > 1) {
                 $("#jquery_jplayer_rcast").jPlayer("volume", 1);
               } else if (volume <= 0) {
                 $("#jquery_jplayer_rcast").jPlayer("mute");
               } else {
                 $("#jquery_jplayer_rcast").jPlayer("volume", volume);
                 $("#jquery_jplayer_rcast").jPlayer("unmute");
               }
             });
             return false;
           })
           .mouseup(function() {
             $(window).unbind("mousemove");
           });
   
         //update Progress Bar control
         var updatebar = function(x) {
   
           var progress = $('.jp-progress');
           //var maxduration = myPlaylist.duration; //audio duration
   
           var position = x - progress.offset().left; //Click pos
           var percentage = 100 * position / progress.width();
   
           //Check within range
           if (percentage > 100) {
             percentage = 100;
           }
           if (percentage < 0) {
             percentage = 0;
           }
   
           $("#jquery_jplayer_rcast").jPlayer("playHead", percentage);
   
           //Update progress bar
           $('.jp-play-bar').css('width', percentage + '%');
         };
   
   
       }); // end jplayer event ready
   
   }); // end document ready
   
   function refreshTable(){
       $('#stats').load('', function(){
          //setTimeout(refreshTable, 30000);
       });
   }
   
   function loadArtist(){
   $('.artist-preload').show();
           $.ajax({
               //url: "lastfm.php?stream=http%3A%2F%2F195.154.56.114%3A7008%2F&t=",
               cache: false,
               success: function(data){
             console.log(data);
   
   
   $('.artist-preload').hide();
               }
           })
   $.ajaxSetup({ cache: false });
   }
   //setInterval(loadArtist,60000);