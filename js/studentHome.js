window.onload = function(){
	// obtain tutors's current address
	var latLocationTutor = 43.1557006; // default values - if errors
	var lonLocationTutor = 1.1236831;  // default values
	var latLocationStudent = 34.055673299999995; // default values - if errors
	var lonLocationStudent = -117.92103409999999;  // default values

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
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    close("dropdown-content-subarea");
}

function subareaFunction() {
    document.getElementById("myDropdownSubarea").classList.toggle("show");
	close("dropdown-content");
}

function mathFunction(){
	document.getElementById("dropbtnContent").innerHTML = 'Math';
	console.log('math function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

function scienceFunction() {
	document.getElementById("dropbtnContent").innerHTML = 'Science';
	console.log('Science function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

function englishFunction() {
	document.getElementById("dropbtnContent").innerHTML = 'English';
	console.log('English function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

function socialStudiesFunction() {
	document.getElementById("dropbtnContent").innerHTML = 'Social Studies';
	console.log('Social Studies function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

function languageFunction() {
	document.getElementById("dropbtnContent").innerHTML = 'Languages';
	console.log('Languages function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

function historyFunction() {
	document.getElementById("dropbtnContent").innerHTML = 'History';
	console.log('History function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

function linearAlgFunction () {
	document.getElementById("subarea").innerHTML = 'Linear Algebra';
	console.log('Linear Algebra function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

function calculusFunction() {
	document.getElementById("subarea").innerHTML = 'Calculus';
	console.log('Calculus function clicked!');
	// close
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
  	}
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		close("dropdown-content-subarea");
		close("dropdown-content");
	}
}

function close(classDiv) {
	var dropdowns = document.getElementsByClassName(classDiv);
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		    openDropdown.classList.remove('show');
	  	}
	}
	
}
//calculates distance between two points in km's
function calcDistance(p1, p2) {
  return ((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2))*0.621371;
}

function acceptStudent() {
	console.log('toaster called!');
	var studentName = 'Bob';
	toastr.success("Searching for Tutors near you!");
}

function declineStudent() {
	console.log('toaster called!');
	toastr.info('You have decline this student.');
}

function redirectToSignIn(){
	window.location = "index.html";
}
