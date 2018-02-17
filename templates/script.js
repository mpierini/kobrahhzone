var data;

fetch('http://localhost:5000/get-mood-board').then(function(response) {
	response.json()
		.then(function(json) {
			if (json.data && json.data.length) {
				data = json.data;
			} else {
				console.log('Pinterest request failed: code ' + response.status + ', ' + response.statusText);
			}
		})
		.catch(function(err) {
			console.log(err);
		});
});

var index = 0;
function prevClick() {
	changePinterestPin(--index);
	if (index === data.length - 2) {
		document.getElementById('button-next').disabled = false;
	}
	if (index === 0) {
		document.getElementById('button-prev').disabled = true;
	}
};

function nextClick() {
	changePinterestPin(++index);
	if (index === data.length - 1) {
		document.getElementById('button-next').disabled = true;
	}
	if (index === 1) {
		document.getElementById('button-prev').disabled = false;
	}
};

function changePinterestPin(index) {
	var pinterest = document.getElementById('pinterest');
	var div = document.getElementById('pin');
	// create new pin div to replace old one
	var pin = document.createElement('a');
	var newDiv = document.createElement('div');
	newDiv.id = 'pin';

	pin.href = data[index].url;
	pin.setAttribute('data-pin-do', 'embedPin');
	pin.setAttribute('data-pin-width', 'large');
	pin.setAttribute('data-pin-terse', true);

	newDiv.appendChild(pin);
	pinterest.replaceChild(newDiv, div);

	// this will tell widget to build new pin
	PinUtils.build();
};
