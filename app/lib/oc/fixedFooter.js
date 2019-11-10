angular.module("OrderCloud-FixedFooter", []);

angular
  .module("OrderCloud-FixedFooter")
  .directive("fixedfooter", fixedfooter)
  // .directive('orderbuttons', orderbuttons)
  .controller("FixedFooterCtrl", FixedFooterCtrl);

function fixedfooter() {
  var directive = {
    restrict: "E",
    template: template,
    controller: "FixedFooterCtrl"
  };
  return directive;

  function template() {
    return [
      '<style>',
      'body {margin-bottom:0;}',
      '.footFoot {margin-top:400px;}',
      //'.fixed-footer-bottom .pull-left a {font-size:2em; margin-right:0.5em;}',
      '.copyright-view {margin:0; padding-bottom:150px !important;}',
      //'@media (max-width:767px) { .copyright-view {height: 300px !important; margin-top:25px; padding-top:0;} }',
      '</style>',
      '<nav>',
      '<div class="footFoot">',
      '<div class="TopFooter visible-sm visible-md visible-lg">',
      '<div class="footLeft">',
      '<a href="https://www.toppromotions.com/" target="_blank"><img class="footerLogo" src="https://www.four51.com/Themes/Custom/cdde0792-3f36-497d-88eb-12c282cba5d2/Top-Promotions/images/Top-Full-Logo-onWhite-200.png" alt = "Get high quality promotional products, apparel and items from Top Promotions." / > < /a>',
      '</div>',
      '<div class="footRight">',
      '<p>Contact Us</p>',
      '<p><i class="fa fa-phone"></i> 1.800.344.2968</p>',
      '<p><i class="fa fa-envelope"></i>  <a href="mailto:webservices@toppromotions.com?subject=Top%20Promotions%20Contact">webservices@toppromotions.com</a></p>',
      '</div>',
      '</div>',
      '<div class="TopxsFooter visible-xs">',
      '<div class="xsFootLeft">',
      '<a href="https://www.toppromotions.com/" target="_blank"><img class="footerLogo" src="https://www.four51.com/Themes/Custom/cdde0792-3f36-497d-88eb-12c282cba5d2/Top-Promotions/images/Top-Full-Logo-onWhite-200.png" alt="Get high quality promotional products, apparel and items from Top Promotions." /></a>',
      "</div>",
      '<div class="xsFootRight">',
      '<p>Contact Us</p>',
      '<p><i class="fa fa-phone"></i> 1.800.344.2968</p>',
      '<p><i class="fa fa-envelope"></i>  <a href="mailto:webservices@toppromotions.com?subject=Top%20Promotions%20Contact">webservices@toppromotions.com</a></p>',
      '</div>',
      '</div>',
      //'<div class="TopxxsFooter visible-xxs">',
      //'<div class="xxsFootLeft">',
      //'<a href="https://www.toppromotions.com/" target="_blank"><img class="footerLogo" src="https://www.four51.com/Themes/Custom/cdde0792-3f36-497d-88eb-12c282cba5d2/Top-Promotions/images/Top-Full-Logo-onWhite-200.png" alt="Get high quality promotional products, apparel and items from Top Promotions." /></a>',
      //'</div>',
      //'<div class="xxsFootRight">',
      //'<p>Contact Us</p>',
      //'<p><i class="fa fa-phone"></i> 1.800.344.2968</p>',
      //'<p><i class="fa fa-envelope"></i>  <a href="mailto:webservices@toppromotions.com?subject=Top%20Promotions%20Contact">webservices@toppromotions.com</a></p>',
      //'</div>',
      //'</div>',
      '<div class="socialFooter">',
      '<p class="text-left">',
      //<a class="pull-left" href="" style="padding-top:10px;">Terms</a>
      //'<a class="vertIcon iconTrans iconTwitter" target="_blank" href="https://twitter.com/"><i class="fa fa-twitter-square fa-3x"></i></a>',
      '<a class="vertIcon iconTrans iconFacebook" target="_blank" href="https://www.facebook.com/Toppromotions"><i class="fa fa-facebook-square fa-3x"></i></a>',
      //'<a class="vertIcon iconTrans iconInstagram" target="_blank" href="https://www.instagram.com/"><i class="fa fa-instagram fa-3x"></i></a>',
      '<a class="vertIcon iconTrans iconLinkedIn" target="_blank" href="https://www.linkedin.com/company/top-promotions"><i class="fa fa-linkedin-square fa-3x "></i></a>',
      '</p>',
      '</div>',
      '</div>',
      '</nav>'
    ].join("");
  }
}

// function orderbuttons() {
//     var directive = {
//         restrict: 'E',
//         template: template,
//         link: function(scope, element, attrs) {
//             attrs.$observe('continue', function(val) {
//                 scope.continue = val == 'true' ? true : false;
//             });
//
//             attrs.$observe('view', function(val) {
//                 if (val) {
//                     var view;
//                     switch (val) {
//                         case 'cart':
//                             view = 'cart'
//                             break;
//                         case 'checkout':
//                             view = 'checkout';
//                             break;
//                         default:
//                             break;
//                     }
//                     scope.view = 'partials/controls/' + (view == 'cart' ? 'cartButtons.html' : 'checkoutButtons.html');
//                 }
//             });
//         }
//     };
//     return directive;
//
//     function template() {
//         return [
//             '<style>',
//             'orderbuttons {width:100%; margin:0 auto;}',
//             '.navbar-fixed-bottom {position:relative;}',
//             'orderbuttons li {width:25%;float:left; padding-right:10px; }',
//             'orderbuttons .btn {border-radius:0; width:100%; margin:0 5px;}',
//             'orderbuttons btn:nth-of-type(4) {margin-right:0; }',
//             '@media (max-width:767px) { orderbuttons li {width:100%;} }',
//             '@media (max-width:767px) { orderbuttons .btn {border-radius:0;width:100%; margin:5px 0;} }',
//             '</style>',
//             '<ul ng-include="view"></ul>'
//         ].join('');
//     }
// }

FixedFooterCtrl.$inject = ["$scope", "$location"];

function FixedFooterCtrl($scope, $location) {
  var d = new Date();
  $scope.year = d.getFullYear();

  /*below functions from NavCtrl.js in case navigation is used in the footer*/
  $scope.isActive = function(path) {
    var cur_path = $location.path().replace("/", "");
    var result = false;

    if (path instanceof Array) {
      angular.forEach(path, function(p) {
        if (p == cur_path && !result) result = true;
      });
    } else {
      if (cur_path == path) result = true;
    }
    return result;
  };

  //extension of above isActive in path
  $scope.isInPath = function(path) {
    var cur_path = $location.path().replace("/", "");
    var result = false;

    if (cur_path.indexOf(path) > -1) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };
}