$(document).on("click",".my-dd-click",function(ev)
               {
                ev.preventDefault();
                var curDD=$(this).attr("href");
                console.log("hello");
                $(curDD).slideToggle();
                });