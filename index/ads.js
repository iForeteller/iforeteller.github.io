		function HideContent(d) {
			document.getElementById(d).style.display = "none";
			document.getElementById("closebut").disabled=true;
			document.getElementById("closebut").value = "Advertisement ends in 5...";
						document.getElementById("closebut1").disabled=true;
			document.getElementById("closebut1").value = "Advertisement ends in 5...";
						document.getElementById("closebut2").disabled=true;
			document.getElementById("closebut2").value = "Advertisement ends in 5...";
		}
		function ShowContent(d) {
			document.getElementById(d).style.display = "block";
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 4...";}, 1000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 3...";}, 2000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 2...";}, 3000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 1...";}, 4000);
setTimeout(function(){document.getElementById("closebut").value = "Close";}, 5000);
setTimeout(function(){document.getElementById("closebut").disabled=false;}, 5000);
setTimeout(function(){document.getElementById("closebut1").value = "Advertisement ends in 4...";}, 1000);
setTimeout(function(){document.getElementById("closebut1").value = "Advertisement ends in 3...";}, 2000);
setTimeout(function(){document.getElementById("closebut1").value = "Advertisement ends in 2...";}, 3000);
setTimeout(function(){document.getElementById("closebut1").value = "Advertisement ends in 1...";}, 4000);
setTimeout(function(){document.getElementById("closebut1").value = "Close";}, 5000);
setTimeout(function(){document.getElementById("closebut1").disabled=false;}, 5000);
setTimeout(function(){document.getElementById("closebut2").value = "Advertisement ends in 4...";}, 1000);
setTimeout(function(){document.getElementById("closebut2").value = "Advertisement ends in 3...";}, 2000);
setTimeout(function(){document.getElementById("closebut2").value = "Advertisement ends in 2...";}, 3000);
setTimeout(function(){document.getElementById("closebut2").value = "Advertisement ends in 1...";}, 4000);
setTimeout(function(){document.getElementById("closebut2").value = "Close";}, 5000);
setTimeout(function(){document.getElementById("closebut2").disabled=false;}, 5000);
		}
		function EnabledButton(d) {
			document.getElementById("closebut").value = "Close";
			document.getElementById("closebut").disabled=false;
						document.getElementById("closebut1").value = "Close";
			document.getElementById("closebut1").disabled=false;
						document.getElementById("closebut2").value = "Close";
			document.getElementById("closebut2").disabled=false;
		}
document:HideContent('desktop-ad2');
document:HideContent('desktop-ad1');
document.getElementById("closebut").value = "Advertisement ends in 8...";
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 7...";}, 1000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 6...";}, 2000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 5...";}, 3000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 4...";}, 4000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 3...";}, 5000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 2...";}, 6000);
setTimeout(function(){document.getElementById("closebut").value = "Advertisement ends in 1...";}, 7000);
setTimeout(function(){document.getElementById("closebut").value = "Close";}, 8000);
setTimeout(function(){document.getElementById("closebut").disabled=false;}, 8000);

