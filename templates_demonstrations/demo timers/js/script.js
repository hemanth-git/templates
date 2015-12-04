
$('document').ready(game)
function game(){
	var init=0;
	var timerId;
	$('#start').click(function(){
		console.log("start clicked");
		timerId=setInterval(timerExecute,1000)
	});
	$('#stop').click(function(){
		clearInterval(timerId);
	});
	function timerExecute(){
		init+=1;
		console.log(init);
		$('.timer-show').html(init);
		
	}
}