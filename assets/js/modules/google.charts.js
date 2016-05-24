var googleCharts = angular
  .module('google-charts', []);

function Visualization($log, $timeout) {
  return {
    restrict: 'E',
    scope: {
      type: '<',
      data: '<',
      options: '<',
      drag: '<',
      swap: '<',
      download: '<',
      downloadSelector: '<'
    },
    transclude: true,
    template: `
      <div class="chart__wrapper"></div>
      <div ng-transclude></div>
    `,
    link: function($scope, $element, $attrs) {
      var
        element = $element[0],
        DEFAULT_CHART_IMAGE_TITLE = 'Visualization.png',
        chartDownloadElement = chartDownloadElement || element.parentNode.querySelector('.mdl-card__actions .chart__download');

      element.addEventListener('dragstart', function(event) {
        // Set the drag's format and data
        event.dataTransfer.setData('text/plain', event.target.id);
      });

      /**
       * Visualization
       */

      function drawChart() {
        chart.draw(google.visualization.arrayToDataTable($scope.data), $scope.options);
      }

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization[$scope.type](element.querySelector('.chart__wrapper'));

      // Wait for the ready event to ensure that the chart has finished rendering.
      google.visualization.events.addListener(chart, 'ready', function () {
        chartDownloadElement.setAttribute('href', chart.getImageURI());
        chartDownloadElement.setAttribute('download', $scope.options.title ? $scope.options.title : DEFAULT_CHART_IMAGE_TITLE);
      });
      // drawChart();

      $scope.$watch('data', function(newValue, oldValue) {
        $timeout(function() {
          drawChart();
        });
      });
    }
  }
}

Visualization.$inject = ['$log', '$timeout'];

/**
 * Visualization
 * TODO: Allow `swap`, `download`, `chart download selector` & `drag` options
 */
googleCharts.directive('visualization', Visualization);

/**
 * Drop Visualization
 */
function dropVisualization($log) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      var element = $element[0];
      element.addEventListener('dragover', function(event) {
        event.preventDefault();
      });
      element.addEventListener('drop', function(event) {
        event.preventDefault();
        var dragSourceIDRef = document.querySelector('#' + event.dataTransfer.getData('text'));

        var dragSourceParentNode = dragSourceIDRef.parentNode;
        dragSourceParentNode.appendChild(element.querySelector('visualization'));

        element.appendChild(dragSourceIDRef);

        // Clear the drag data cache (for all formats/types)
        event.dataTransfer.clearData();
      });
    }
  }
}

dropVisualization.$inject = ['$log'];

googleCharts.directive('dropVisualization', dropVisualization);
