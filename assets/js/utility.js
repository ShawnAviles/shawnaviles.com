/**
   * Update live status of project websites using fetch API
   */
function updateLiveStatusBubble(elementId, url) {
	fetch(url)
		.then(response => {
			if (response.status === 200) {
				let buttonContent = 'Visit Site';
				buttonContent += '<span class="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">';
				buttonContent += '<span class="visually-hidden">Live Status</span>';
				buttonContent += '</span>';
				document.getElementById(elementId).innerHTML = buttonContent;
			} else {
				let buttonContent = 'Site Down';
				buttonContent += '<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">';
				buttonContent += '<span class="visually-hidden">Live Status</span>';
				buttonContent += '</span>';
				document.getElementById(elementId).classList.remove('btn-outline-primary');
				document.getElementById(elementId).classList.add('btn-outline-danger');
				document.getElementById(elementId).innerHTML = buttonContent;
			}
		})
		.catch(error => {
			let buttonContent = 'Site Down';
			buttonContent += '<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">';
			buttonContent += '<span class="visually-hidden">Live Status</span>';
			buttonContent += '</span>';
			document.getElementById(elementId).classList.remove('btn-outline-success');
			document.getElementById(elementId).classList.add('btn-outline-danger');
			document.getElementById(elementId).innerHTML = buttonContent;
		});
}