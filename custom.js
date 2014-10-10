$(document).ready(function(){
	$('#js-create-user').click(function(e){
		$('#js-dialog-content').dialog({
		modal: true,
		open: function(){
			$('#js-new-user-submit').click(function(e){
			var username = $("#js-new-username").val();
			alert(username);
		});
		},
		close: function(event, ui){
			$('#js-create-user').html("closeしたね");
		}
		});
	});
});