var inicio = function() {
	$('.bx-wrapper .bx-controls-direction a').on('click', function(e){
		e.preventDefault();
		var index = parseInt($('.bx-pager-link.active').attr('data-slide-index'));
		console.log(index);
		if (index == 0) {
			$('#works_descrip_1').css('display', 'block');
			$('#works_descrip_2').css('display', 'none');
			$('#works_descrip_3').css('display', 'none');
			$('#works_descrip_4').css('display', 'none');
		} else if (index == 1) {
			$('#works_descrip_1').css('display', 'none');
			$('#works_descrip_2').css('display', 'block');
			$('#works_descrip_3').css('display', 'none');
			$('#works_descrip_4').css('display', 'none');
		} else if (index == 2) {
			$('#works_descrip_1').css('display', 'none');
			$('#works_descrip_2').css('display', 'none');
			$('#works_descrip_3').css('display', 'block');
			$('#works_descrip_4').css('display', 'none');
		} else if (index == 3) {
			$('#works_descrip_1').css('display', 'none');
			$('#works_descrip_2').css('display', 'none');
			$('#works_descrip_3').css('display', 'none');
			$('#works_descrip_4').css('display', 'block');
		}
	});
}

$(document).ready(inicio);