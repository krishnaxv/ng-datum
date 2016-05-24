function MainController($log, $interval) {
  var vm = this;

  vm.isLoading = true;
  vm.heading = 'Visualization';

  // Visualization data
  vm.visualization1 = {
    identifier: '_' + Math.random().toString(36).substr(2, 9),
    type: 'BarChart',
    data: [
      ['Element', 'Density', { role: 'style' }, { role: 'annotation' }],
      ['Copper', 8.94, '#b87333', 'Cu'],
      ['Silver', 10.49, 'silver', 'Ag'],
      ['Gold', 19.30, 'gold', 'Au'],
      ['Platinum', 21.45, 'color: #e5e4e2', 'Pt']
    ],
    options: {
      animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
      title: 'Lengths of dinosaurs, in meters',
      chartArea: {
        width: '75%',
        height: '75%'
      },
      legend: {
        position: 'none'
      }
    }
  };

  vm.visualization2 = {
    identifier: '_' + Math.random().toString(36).substr(2, 9),
    type: 'Histogram',
    data: [
      ['Dinosaur', 'Length'],
      ['Acrocanthosaurus (top-spined lizard)', 12.2],
      ['Albertosaurus (Alberta lizard)', 9.1],
      ['Allosaurus (other lizard)', 12.2],
      ['Apatosaurus (deceptive lizard)', 22.9],
      ['Archaeopteryx (ancient wing)', 0.9],
      ['Argentinosaurus (Argentina lizard)', 36.6],
      ['Baryonyx (heavy claws)', 9.1],
      ['Brachiosaurus (arm lizard)', 30.5],
      ['Ceratosaurus (horned lizard)', 6.1],
      ['Coelophysis (hollow form)', 2.7],
      ['Compsognathus (elegant jaw)', 0.9],
      ['Deinonychus (terrible claw)', 2.7],
      ['Diplodocus (double beam)', 27.1],
      ['Dromicelomimus (emu mimic)', 3.4],
      ['Gallimimus (fowl mimic)', 5.5],
      ['Mamenchisaurus (Mamenchi lizard)', 21.0],
      ['Megalosaurus (big lizard)', 7.9],
      ['Microvenator (small hunter)', 1.2],
      ['Ornithomimus (bird mimic)', 4.6],
      ['Oviraptor (egg robber)', 1.5],
      ['Plateosaurus (flat lizard)', 7.9],
      ['Sauronithoides (narrow-clawed lizard)', 2.0],
      ['Seismosaurus (tremor lizard)', 45.7],
      ['Spinosaurus (spiny lizard)', 12.2],
      ['Supersaurus (super lizard)', 30.5],
      ['Tyrannosaurus (tyrant lizard)', 15.2],
      ['Ultrasaurus (ultra lizard)', 30.5],
      ['Velociraptor (swift robber)', 1.8]
    ],
    options: {
      animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
      title: 'Lengths of dinosaurs, in meters',
      chartArea: {
        width: '75%',
        height: '75%'
      },
      legend: {
        position: 'none'
      }
    }
  };

  vm.visualization3 = {
    identifier: '_' + Math.random().toString(36).substr(2, 9),
    type: 'GeoChart',
    data: [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ],
    options: {
      title: 'Country Popularity'
    }
  };

  vm.visualization4 = {
    identifier: '_' + Math.random().toString(36).substr(2, 9),
    type: 'PieChart',
    data: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {
      title: 'My Daily Activities',
      animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      }
    }
  }

  vm.visualization5 = {
    identifier: '_' + Math.random().toString(36).substr(2, 9),
    type: 'PieChart',
    data: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {
      title: 'My Daily Activities',
      animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }
  };

  vm.visualization6 = {
    identifier: '_' + Math.random().toString(36).substr(2, 9),
    type: 'ScatterChart',
    data: [
      ['Age', 'Weight'],
      [8, 12],
      [4, 5.5],
      [11, 14],
      [4, 5],
      [3, 3.5],
      [6.5, 7]
    ],
    options: {
      title: 'Age vs. Weight comparison',
      animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
      hAxis: {
        title: 'Age',
        minValue: 0,
        maxValue: 15
      },
      vAxis: {
        title: 'Weight',
        minValue: 0,
        maxValue: 15
      },
      legend: 'none'
    }
  };

  vm.visualization7 = {
    identifier: '_' + Math.random().toString(36).substr(2, 9),
    type: 'LineChart',
    data: [
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540],
      ['2008', 530, 1540],
      ['2009', 2030, 5040],
      ['2010', 130, 940],
      ['2011', 1035, 440],
      ['2012', 1030, 850],
    ],
    options: {
      title: 'Company Performance',
      animation:{
        startup: true,
        duration: 1000,
        easing: 'out',
      },
      curveType: 'function',
      legend: {
        position: 'bottom'
      }
    }
  };

  $interval(function () {
    vm.isLoading = false;
    vm.visualization1.data = [
       ['Element', 'Density', { role: 'style' }, { role: 'annotation' }],
       ['Copper', Math.random() * 10, '#b87333', 'Cu'],
       ['Silver', Math.random() * 10, 'silver', 'Ag'],
       ['Gold', Math.random() * 10, 'gold', 'Au'],
       ['Platinum', Math.random() * 10, 'color: #e5e4e2', 'Pt']
    ];
    vm.visualization2.data = [
      ['Dinosaur', 'Length'],
      ['Acrocanthosaurus (top-spined lizard)', Math.random() * 10],
      ['Albertosaurus (Alberta lizard)', Math.random() * 10],
      ['Allosaurus (other lizard)', Math.random() * 10],
      ['Apatosaurus (deceptive lizard)', Math.random() * 10],
      ['Archaeopteryx (ancient wing)', Math.random() * 10],
      ['Argentinosaurus (Argentina lizard)', Math.random() * 10],
      ['Baryonyx (heavy claws)', Math.random() * 10],
      ['Brachiosaurus (arm lizard)', Math.random() * 10],
      ['Ceratosaurus (horned lizard)', Math.random() * 10],
      ['Coelophysis (hollow form)', Math.random() * 10],
      ['Compsognathus (elegant jaw)', Math.random() * 10],
      ['Deinonychus (terrible claw)', Math.random() * 10],
      ['Diplodocus (double beam)', Math.random() * 10],
      ['Dromicelomimus (emu mimic)', Math.random() * 10],
      ['Gallimimus (fowl mimic)', Math.random() * 10],
      ['Mamenchisaurus (Mamenchi lizard)', Math.random() * 10],
      ['Megalosaurus (big lizard)', Math.random() * 10],
      ['Microvenator (small hunter)', Math.random() * 10],
      ['Ornithomimus (bird mimic)', Math.random() * 10],
      ['Oviraptor (egg robber)', Math.random() * 10],
      ['Plateosaurus (flat lizard)', Math.random() * 10],
      ['Sauronithoides (narrow-clawed lizard)', Math.random() * 10],
      ['Seismosaurus (tremor lizard)', Math.random() * 10],
      ['Spinosaurus (spiny lizard)', Math.random() * 10],
      ['Supersaurus (super lizard)', Math.random() * 10],
      ['Tyrannosaurus (tyrant lizard)', Math.random() * 10],
      ['Ultrasaurus (ultra lizard)', Math.random() * 10],
      ['Velociraptor (swift robber)', Math.random() * 10]
    ];
    vm.visualization3.data = [
      ['Country', 'Popularity'],
      ['Germany', Math.random() * 1000],
      ['United States', Math.random() * 1000],
      ['Brazil', Math.random() * 1000],
      ['Canada', Math.random() * 1000],
      ['France', Math.random() * 1000],
      ['RU', Math.random() * 1000]
    ];
    vm.visualization4.data = [
      ['Task', 'Hours per Day'],
      ['Work', Math.random() * 10],
      ['Eat', Math.random() * 10],
      ['Commute', Math.random() * 10],
      ['Watch TV', Math.random() * 10],
      ['Sleep', Math.random() * 10]
    ];
    vm.visualization5.data = [
      ['Task', 'Hours per Day'],
      ['Work', Math.random() * 10],
      ['Eat', Math.random() * 10],
      ['Commute', Math.random() * 10],
      ['Watch TV', Math.random() * 10],
      ['Sleep', Math.random() * 10]
    ];
    vm.visualization6.data = [
      ['Age', 'Weight'],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10],
      [Math.random() * 10, Math.random() * 10]
    ];
    vm.visualization7.data = [
      ['Year', 'Sales', 'Expenses'],
      ['2004', Math.random() * 1000, Math.random() * 1000],
      ['2005', Math.random() * 1000, Math.random() * 1000],
      ['2006', Math.random() * 1000, Math.random() * 1000],
      ['2007', Math.random() * 1000, Math.random() * 1000],
      ['2008', Math.random() * 1000, Math.random() * 1000],
      ['2009', Math.random() * 1000, Math.random() * 1000],
      ['2010', Math.random() * 1000, Math.random() * 1000],
      ['2011', Math.random() * 1000, Math.random() * 1000],
      ['2012', Math.random() * 1000, Math.random() * 1000],
    ];
  }, 5000);
}

MainController.$inject = ['$log', '$interval'];

angular
  .module('datumApp')
  .controller('MainController', MainController);
