function lookForStudent() {
	document.getElementById('gps_ring_style').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function(event) { 
	// obtain tutors's current address
	var latLocationUser = 51.5073346, // default values
	var lonLocationUser: -0.1276831;  // default values
	navigator.geolocation.getCurrentPosition(function(location) {
		latLocationUser = location.coords.latitude;
		lonLocationUser = location.coords.longitude;
	});


	// update student's address
	var address = '3801 W Temple Ave, Pomona, CA 91768';
	document.getElementById('addressOutput').innerHTML = 'Address: ' + address;

	// address tutor's profit margin through formula
	var priceFormula = 20;
	var distribution = 5;
	var output = '$' + (priceFormula - distribution) + ' - ' + '$' + (priceFormula + distribution);

	console.log('priceoutput = ' + output);
	document.getElementById('profitOutput').innerHTML = output;
	// document.getElementById('profitOutput').innerHTML = 20;

	var map = new GMaps({
	    el: '#basic_map',
	    lat: 51.5073346,
	    lng: -0.1276831,
	    zoom: 12,
	    zoomControl : true,
	    zoomControlOpt: {
	        style : 'SMALL',
	        position: 'TOP_LEFT'
	    },
	    panControl : false,
  	});
	
	// add markers for geolocation of the student's address
	map.addMarker({ 
      lat: 51.5228316,
      lng: -0.1553503,
      title: 'Madame Tussauds',
      infoWindow: {
        content: '<p>Madame Tussauds is a wax museum in London with branches in a number of major cities.</p>'
      }
    });
});
