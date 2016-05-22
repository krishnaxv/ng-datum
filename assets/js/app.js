/**
 * Google Charts
 */

 // Load the Visualization API and the core chart package.
 google.charts.load('current', {
   packages: ['corechart']
 });

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(function() {
   console.info('Bootstrapping application!');
   angular.bootstrap(document.documentElement, ['datumApp']);
 });


angular
  .module('datumApp', ['ui.router', 'google-charts']);
