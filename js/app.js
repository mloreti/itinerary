(function() {
  angular.module('myApp', ['ngStorage'])
    .controller('controller', function(
      $scope,
      $localStorage,
      $sessionStorage
    ) {

      $scope.data = $localStorage.data;

      $scope.removeF = function(item) {
        if (confirm('Are you sure you want to delete this entry?')) {
          var index = item;
          var clicked = angular.element(event.target.parentElement);
          console.log(clicked);
          $localStorage.data.flights.splice(index, 1);
        };
      };
      $scope.removeH = function(item) {
        if (confirm('Are you sure you want to delete this entry?')) {
          var index = item;
          $localStorage.data.hotels.splice(index, 1);
        };
      };
      $scope.removeC = function(item) {
        if (confirm('Are you sure you want to delete this entry?')) {
          var index = item;
          $localStorage.data.cars.splice(index, 1);
        };
      };
      $scope.addF = function() {
        $localStorage.data.flights.push({
          departure: $scope.departure,
          arrival: $scope.arrival,
          date: $scope.date,
          departureTime: $scope.departureTime,
          arrivalTime: $scope.arrivalTime,
          flightNum: $scope.flightNum
        });
        $scope.departure = '';
        $scope.arrival = '';
        $scope.date = '';
        $scope.departureTime = '';
        $scope.arrivalTime = '';
        $scope.flightNum = '';
      };
      $scope.addH = function() {
        $localStorage.data.hotels.push({
          name: $scope.name,
          departure: $scope.departureh,
          arrival: $scope.arrivalh,
          date: $scope.dateh,
          address: $scope.address,
          city: $scope.city
        });
        $scope.name = '';
        $scope.departureh = '';
        $scope.arrivalh = '';
        $scope.dateh = '';
        $scope.address = '';
        $scope.city = '';
      };
      $scope.addC = function() {
        $localStorage.data.cars.push({
          company: $scope.company,
          departure: $scope.departurec,
          arrival: $scope.arrivalc,
          arrivalDate: $scope.datec,
          departureDate: $scope.datedo
        });
        $scope.company = '';
        $scope.departurec = '';
        $scope.arrivalc = '';
        $scope.datec = '';
        $scope.datedo = '';
      };
      $('.newName').hide();
      //$('.mapicon').hide();
      var gmsrc = 'https://www.google.com/maps/embed/v1/place?key=';
      var gmkey = 'AIzaSyBKfpIBpDWYJAOctMfxoPO-kx7AtirUPyI';

      //$localStorage.project = '';
      //$localStorage.location = '';
      $('iframe').attr('src', gmsrc + gmkey + '&q=' + $localStorage.location);
      if($localStorage.project === ''){
        $localStorage.project = 'Miami Vacation';
      }
      if($localStorage.location === ''){
        $localStorage.location = 'Miami, FL';
      }
      $scope.project = $localStorage.project;
      $scope.location = $localStorage.location;
      $scope.add = function() {
        $('.newName').hide();
        //$('.mapicon').show();
        $localStorage.project = $scope.project;
        $localStorage.location = $scope.location;
        $('iframe').attr('src', gmsrc + gmkey + '&q=' + $scope.location);
        if ($scope.project === "") {
          alert('Your project must have a name.');
          $scope.project = "Trip Name";
        }
      };
      $scope.edit = function() {
        $('.newName').show();
      };
      $scope.reset = function(){
        if(confirm('Are you sure you would like to reset the data?')){
        $localStorage.project = 'Trip Name';
        $localStorage.location = 'USA';
        $localStorage.data = reset;
      }
      }
    });

  //------ DATA ------ //
  var reset = {
    flights: [{
      departure: 'XXX',
      arrival: 'XXX',
      date: new Date('01/01/2015'),
      departureTime: '10:00AM',
      arrivalTime: '6:00PM',
      flightNum: '#000XXX'
    }],
    hotels: [{
      name: 'Hotel Name',
      arrival: '8:30AM',
      departure: '2:00PM',
      date: new Date('09/20/2015'),
      address: '123 ABC St',
      city: 'City'
    }],
    cars: [{
      company: 'Company Name',
      place: 'Terminal',
      arrival: '12:00PM',
      arrivalDate: new Date('01/01/2015'),
      departure: '12:00PM',
      departureDate: new Date('01/01/2015')
    }]
  };
  var data = {
  flights: [
    {
      departure: 'SFO',
      arrival: 'MXP',
      date: new Date('09/09/2015'),
      departureTime: '10:00AM',
      arrivalTime: '6:00PM',
      flightNum: '#000XXX'
    },
    {
      departure: 'MIA',
      arrival: 'SFO',
      date: new Date('09/22/2015'),
      departureTime: '10:00AM',
      arrivalTime: '6:00PM',
      flightNum: '#000XXX'
    }
  ],
  hotels: [
    {
      name: 'Hyatt Miami',
      arrival: '8:30AM',
      departure: '2:00PM',
      date: new Date('09/10/2015'),
      address: '1600 Collins Blvd',
      city: 'Miami'
    },
    {
      name: 'Hilton Fort Lauderdale',
      arrival: '8:30AM',
      departure: '2:00PM',
      date: new Date('09/12/2015'),
      address: '2450 Florida Ave',
      city: 'Ft. Lauderdale'
    },
    {
      name: 'The Floridian',
      arrival: '8:30AM',
      departure: '2:00PM',
      date: new Date('09/20/2015'),
      address: '55 6th Ave',
      city: 'Miami'
    }
  ],
  cars: [
    {
      company: 'Sixt',
      place: 'Terminal C',
      arrival: '2:00PM',
      arrivalDate: new Date('09/10/2015'),
      departure: '10:00AM',
      departureDate: new Date('09/20/2015')
    }
  ]
};

})();
