function visualizationAction($log) {
  return {
    restrict: 'E',
    template: `
      <div class="mdl-card__actions mdl-card--border">
        <a ng-href="#" class="chart__download" download>
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored">
            <i class="material-icons">file_download</i>
          </button>
        </a>
      </div>
    `
  }
}

visualizationAction.$inject = ['$log'];

angular
  .module('datumApp')
  .directive('visualizationAction', visualizationAction);
