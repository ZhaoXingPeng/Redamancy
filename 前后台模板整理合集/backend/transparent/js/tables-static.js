/*! light-blue - v3.1.0 - 2014-12-06 */$(function(){function a(){$(".widget").widgster(),$(".sparkline").each(function(){$(this).sparkline("html",$(this).data())}),$(".js-progress-animate").animateProgressBar()}a(),PjaxApp.onPageLoad(a)});