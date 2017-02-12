function lookForStudent() {
	if(document.getElementById('gps_ring_style').style.display === 'block') {
		document.getElementById('gps_ring_style').style.display = 'none';
	} else { // looking for prospective students
		document.getElementById('gps_ring_style').style.display = 'block';

		document.getElementById('profitOutput').innerHTML = 'Calculating Profit...';
		document.getElementById('distangeRange').innerHTML = 'Calculating Total Distance...';
		document.getElementById('timeArrival').innerHTML = 'Calculating Estimated Time of Arrival...';
		// obtain tutors's current address
		var latLocationTutor = 43.1557006; // default values - if errors
		var lonLocationTutor = 1.1236831;  // default values
		var latLocationStudent = 34.055673299999995; // default values - if errors
		var lonLocationStudent = -117.92103409999999;  // default values

		navigator.geolocation.getCurrentPosition(function(location) {
			setTimeout(function () {}, 4000); // delay of 5 seconds
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

			// draw line to destination
			map.setCenter(latLocationTutor, lonLocationTutor);
				map.drawRoute({
					origin: [latLocationTutor, lonLocationTutor],
			        destination: [latLocationStudent, lonLocationStudent],
			        travelMode: 'driving',
			        strokeColor: '#42bfc2',
			        strokeOpacity: 0.8,
			        strokeWeight: 6
		      });

			// calculate the time
			map.getRoutes({
	            origin: [latLocationTutor, lonLocationTutor],
	            destination: [latLocationStudent, lonLocationStudent],
	            callback: function (e) {
	                var time = 0;
	                for (var i=0; i<e[0].legs.length; i++) {
	                    time += e[0].legs[i].duration.value;
	                }
	                var totalTime = (time/3600);
	                var distribution = totalTime/2;
	               	document.getElementById('timeArrival').innerHTML = (totalTime - distribution).toFixed(2) + ' - ' + (totalTime + distribution).toFixed(2) + ' mins';
	            }
	        });

			// // add markers for geolocation of the student's address
			map.addMarker({ 
				lat: latLocationStudent,
				lng: lonLocationStudent,
				title: 'Madame Tussauds',
				infoWindow: {
					content: '<p>Madame Tussauds is a wax museum in London with branches in a number of major cities.</p>'
				}
		    });

		    // if user clicks 'accept button'
		    
		    // calculate the distance 
		    var p1 = new google.maps.LatLng(latLocationTutor, lonLocationTutor);
			var p2 = new google.maps.LatLng(latLocationStudent, lonLocationStudent);
			var distance = calcDistance (p1, p2).toFixed(2);
			document.getElementById('distangeRange').innerHTML = distance + ' miles';
			console.log('Distance: ' + calcDistance(p1, p2) + ' miles.');

			// update student's address
			var address = '3801 W Temple Ave, Pomona, CA 91768';
			var name = 'Billy Bob Joe';
			var phoneNum = '4086684825'
			document.getElementById('studentName').innerHTML = 'Student\'s Name: ' + name.bold();
			document.getElementById('addressOutput').innerHTML = 'Address: ' + address;
			document.getElementById('phoneNumber').innerHTML = 'Phone Number: ' + phoneNum;

			// address tutor's profit margin through formula
			var priceFormula = 20;
			var distribution = priceFormula/4; //static
			var output = '$' + (priceFormula - distribution) + ' - ' + '$' + (priceFormula + distribution);

			console.log('priceoutput = ' + output);
			document.getElementById('profitOutput').innerHTML = output;
			// document.getElementById('profitOutput').innerHTML = 20;

		    setTimeout(function () {}, 7000); // delay of 5 seconds
		    document.getElementById('gps_ring_style').style.display = 'none';
		});
	}
}

//calculates distance between two points in km's
function calcDistance(p1, p2) {
  return ((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2))*0.621371;
}

function acceptStudent() {
	console.log('toaster called!');
	var studentName = 'Bob';
	toastr.success("Congratulations! You have been paired up with " + studentName + '!');
}

function declineStudent() {
	console.log('toaster called!');
	toastr.info('You have decline this student.');
}
