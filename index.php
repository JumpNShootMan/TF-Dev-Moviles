<?php
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Trabajo Final</title>
</head>
<body>
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-database.js"></script>

<script>
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		var firebaseConfig = {
			apiKey: "AIzaSyCofkg7aXC739HDU6D7fX6kR78SqrlvqzA",
			authDomain: "trabajo-final-devgames.firebaseapp.com",
			databaseURL: "https://trabajo-final-devgames-default-rtdb.firebaseio.com",
			projectId: "trabajo-final-devgames",
			storageBucket: "trabajo-final-devgames.appspot.com",
			messagingSenderId: "3224857635",
			appId: "1:3224857635:web:b63cc57a65d424c89a9596",
			measurementId: "G-GXH62ERRT4"
  		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		firebase.analytics();
</script>



<script type="text/javascript" src="lib/phaser.min.js"></script>
<script type="text/javascript" src="js/prefabs/Platform.js?v=<?php echo time() ?>"></script>
<script type="text/javascript" src="js/prefabs/Player.js?v=<?php echo time() ?>"></script>
<script type="text/javascript" src="js/states/Preload.js?v=<?php echo time() ?>"></script>
<script type="text/javascript" src="js/states/Game.js?v=<?php echo time() ?>"></script>
<script type="text/javascript" src="js/states/Menu.js?v=<?php echo time() ?>"></script>


<script type="text/javascript" src="js/main.js?v=<?php echo time() ?>"></script>
</body>
</html>