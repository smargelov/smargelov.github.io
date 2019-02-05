$(document).ready(function() {
	$('.toggle-instruction').click(function() {
		this.innerHTML = this.innerHTML === 'Показать весь список <span class="down"></span>' ? 'Скрыть часть списка <span class="up"></span>' : 'Показать весь список <span class="down"></span>';
		$('.second').toggle('slow');
	});

	$('.hide-table').click(function() {
		$('.specification-content').toggleClass('halfhide');
		this.innerHTML = this.innerHTML === 'Скрыть характеристки <span class="up"></span>' ? 'Показать характеристики <span class="down"></span>' : 'Скрыть характеристки <span class="up"></span>';
	});

	
})
