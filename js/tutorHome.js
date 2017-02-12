function lookForStudent() {
	document.getElementById('gps_ring_style').style.display = 'block';
}

//calculates distance between two points in km's
function calcDistance(p1, p2) {
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

document.addEventListener("DOMContentLoaded", function(event) { 
	// obtain tutors's current address
	var latLocationTutor = 51.5073346; // default values - if errors
	var lonLocationTutor = -0.1276831;  // default values
	var latLocationStudent = 34.0557006; // default values - if errors
	var lonLocationStudent = -117.8209629;  // default values

	navigator.geolocation.getCurrentPosition(function(location) {
		latLocationTutor = location.coords.latitude;
		lonLocationTutor = location.coords.longitude;
		console.log(latLocationTutor);
		console.log(lonLocationTutor);
		var map = new GMaps({
		    el: '#basic_map',
		    lat: latLocationTutor,
		    lng: lonLocationTutor,
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
			lat: latLocationStudent,
			lng: lonLocationStudent,
			title: 'Madame Tussauds',
			infoWindow: {
				content: '<p>Madame Tussauds is a wax museum in London with branches in a number of major cities.</p>'
			}
	    });

	    // calculate the distance 
	    var p1 = new google.maps.LatLng(latLocationTutor, lonLocationTutor);
		var p2 = new google.maps.LatLng(latLocationStudent, lonLocationStudent);
		var distance = calcDistance (p1, p2);
		document.getElementById('gps_ring_style').style.display = 'none';
		console.log('Distance: ' + calcDistance(p1, p2));

	    setTimeout(function () {}, 5000); // delay of 5 seconds
	    document.getElementById('gps_ring_style').style.display = 'none';
	});


	// update student's address
	var address = '3801 W Temple Ave, Pomona, CA 91768';
	document.getElementById('addressOutput').innerHTML = 'Address: ' + address;

	// address tutor's profit margin through formula
	var priceFormula = 20;
	var distribution = 5; //static
	var output = '$' + (priceFormula - distribution) + ' - ' + '$' + (priceFormula + distribution);

	console.log('priceoutput = ' + output);
	document.getElementById('profitOutput').innerHTML = output;
	// document.getElementById('profitOutput').innerHTML = 20;
});
