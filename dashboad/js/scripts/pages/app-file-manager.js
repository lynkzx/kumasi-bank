$(function(){"use strict";$(".app-content");var e=$(".app-file-overlay"),o=$(".sidebar-left"),s=($(".file-manager-application"),$(".app-file-sidebar-info")),a=$(".app-file-content"),i=$(".app-file-sidebar-left");if(a.length>0)new PerfectScrollbar(".app-file-content");if(i.length>0)new PerfectScrollbar(".app-file-sidebar-content");if(s.length>0)new PerfectScrollbar(".app-file-sidebar-info");$(".menu-toggle, .close-icon, .app-file-overlay").on("click",function(a){o.removeClass("show"),e.removeClass("show"),s.removeClass("show")}),$(".app-file-info").on("click",function(){s.addClass("show"),e.addClass("show")}),$(".app-file-sidebar-close").on("click",function(){o.removeClass("show"),e.removeClass("show")}),$(".sidebar-toggle").on("click",function(s){s.stopPropagation(),o.addClass("show"),e.addClass("show")});var l=$(".app-file-sidebar-content .list-group-messages a,.list-group-labels a");$(l).on("click",function(){var e=$(this);l.removeClass("active"),e.addClass("active"),e.find(". -evo").update Evo({strokeColor:"#5A8DEE"}),l.not(".active").find(". -evo").update Evo({strokeColor:"#475f7b"})}),$(window).on("resize",function(){$(window).width()>768&&e.hasClass("show")&&(o.removeClass("show"),e.removeClass("show"),s.removeClass("show"))})});
