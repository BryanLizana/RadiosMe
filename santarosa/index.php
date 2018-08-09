<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Radio Santa Rosa</title>
</head>
<body bgcolor="transparent">

    <!-- <link href="http://empresarialhost.com/generador/1/player/audio6_html5.css" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet">  -->

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js" type="text/javascript"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
<!-- and new libraries to use lastfm -->
<script type="text/javascript" src="http://empresarialhost.com/generador/1/player/js/lastfm.api.md5.js"></script>
<script type="text/javascript" src="http://empresarialhost.com/generador/1/player/js/lastfm.api.js"></script>
<script type="text/javascript" src="http://empresarialhost.com/generador/1/player/js/lastfm.api.cache.js"></script>
<!-- and new libraries to use lastfm -->
<!-- <script type="text/javascript" src="http://empresarialhost.com/generador/1/player/js/swfobject.js"></script> -->
<!-- <script src="http://empresarialhost.com/generador/1/player/js/jquery.mousewheel.min.js" type="text/javascript"></script> -->
<script src="http://empresarialhost.com/generador/1/player/js/jquery.touchSwipe.min.js" type="text/javascript"></script>
<!-- <script src="http://empresarialhost.com/generador/1/player/js/audio6_html5.js" type="text/javascript"></script> -->
<script src="./js/audio6_html5.js" type="text/javascript"></script>


<!-- must have -->
<script>		
	jQuery(function() {			
		jQuery("#lbg_audio6_html5_shoutcast_1").audio6_html5({
			radio_stream:"http://195.154.182.222:3401/",
          radio_name:"Radio Santa Rosa",
			playerWidth:880,
			imageHeight:120,
			skin:"blackControllers",
			responsive:true,
			grabLastFmPhoto:true,
			autoPlay:true,
			songTitleColor:"#000",
			authorTitleColor:"#000000",
			lineSeparatorColor:"#7A7A7A",
			radioStationColor:"#fff",
			frameBehindTextColor:"#ffffff",
			frameBehindButtonsColor:"#0b31c8",
			sticky:false,
			startMinified:false,
			showOnlyPlayButton:false,
			centerPlayer:true,
			playerBorderSize:0,
			playerBorderColor:"#000000",
			showFacebookBut:false,
			facebookAppID:"",
			facebookShareTitle:"HTML5 Radio Player With History - Shoutcast and Icecast",
			facebookShareDescription:"A top-notch responsive HTML5 Radio Player compatible with all major browsers and mobile devices.",
			showTwitterBut:false,
			showVolume:true,
			showRadioStation:true,
			showTitle:true,
			showHistoryBut:true,
			showHistory:false,
            showHistoryOnInit:true, 
			translateReadingData:"reading data...",
			historyTranslate:"HISTORIAL MUSICAL",
			historyTitleColor:"#858585",
			historyBgColor:"#f0f0f0",
			historyRecordBgColor:"transparent",
			historyRecordBottomBorderColor:"transparent",
			historyRecordSongColor:"#000000",
			historyRecordSongBottomBorderColor:"#818181",
			historyRecordAuthorColor:"#6d6d6d",
			numberOfThumbsPerScreen:3,
			historyPadding:16,
			historyRecordTitleLimit:25,
			historyRecordAuthorLimit:36,
			nowPlayingInterval:15,
			noImageAvailable:"http://www.empresarialhost.com/generador/movimientogif.gif"			
		});		
	});	
</script>	
             <div class="audio6_html5">            
             	<audio id="lbg_audio6_html5_shoutcast_1" allow="autoplay" preload="metadata">              
                No HTML5 audio playback capabilities for this browser. Use <a href="https://www.google.com/intl/en/chrome/browser/">Chrome Browser!</a>
                </audio>
             </div>
             <br style="clear:both;">
</body>

</html>