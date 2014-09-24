/* 
    Created on : Sep 11, 2014, 11:46:17 AM
    Author     : Subhajit
    Contact    : art.subhajit@gmail.com // for your advice and suggestions 
 */

jQuery(document).ready(function(event) {
    jQuery("a[data-nbg='nbg-horizig']").click(function() {
        ubee_horizigzag();
        stack_gallery(2000);
    });
    jQuery(".nbg-link").each(function() {
        var height = jQuery(this).parent().css("height");
        jQuery(this).css("height", height);
        jQuery(this.a).css("height", height);
        //jQuery(this).css("line-height",height);
    });
});
//------------------------------------------------------------------------------------------------------------------- ubee zigzag horizontal ::04/09/2014
function ubee_horizigzag()
{
    timerFunction = setInterval(horizigani, 20);
}
function horizigani()
{
    var count_rect = jQuery("#clipping").find("rect").length;
    for(i=1; i<=count_rect; i++)
    {
        if(i%2 == 0)
        {
            var box = document.getElementById("rec"+i);
            var boxx = box.getAttribute("x");//alert(boxx);
            var zig_container_width = jQuery("#zigzag-mask").parent().width();//alert(zig_width);
            var newboxx = parseInt(boxx); //2 + parseInt(boxx); //alert(newboxx);
            var boxx_left = 0;// left = 0//alert(boxx_left);
            if (newboxx > boxx_left) {
                newboxx = newboxx - 1;
                box.setAttribute("x", newboxx + '%');
            }
            else {
                clearInterval(timerFunction);
                box.setAttribute("x", '100%');
                timerFunction = null;
            }
            
        }
        else{
            var box = document.getElementById("rec"+i);
            var boxx = box.getAttribute("x");//alert(boxx);
            var zig_container_width = jQuery("#zigzag-mask").parent().width();//alert(zig_width);
            var newboxx = parseInt(boxx); //2 + parseInt(boxx); //alert(newboxx);
            var boxx_left = 0;// left = 0//alert(boxx_left);
            if (newboxx < boxx_left) {
                newboxx = newboxx + 1;
                box.setAttribute("x", newboxx + '%');
            }
            else {
                clearInterval(timerFunction);
                box.setAttribute("x", '-100%');
                timerFunction = null;
            }
            
        }
    }
    
}
//------------------------------------------------------------------------------------------------------------------- stack gallery
function stack_gallery(animation_speed)
{
    var last_liHtml = '<li>' + jQuery(".stack-gallery li:last").html() + '</li>';
    jQuery(".stack-container").append("<div class='ub-stack-over'></div>");
    jQuery(".stack-gallery li:first").before(last_liHtml);
    //jQuery(".ub-stack-gallery li:last").css({zIndex:'1'});
    jQuery(".stack-gallery li:nth-last-child(2)").css({zIndex: '3'});
    jQuery(".stack-gallery li:nth-last-child(2)").find("div").addClass("cliptarget");
    jQuery(".stack-gallery li:last").css({zIndex: '1'});
    /* -- extra addition -- */
    //jQuery("div.tunnel ul.stack-gallery li:last").addClass("tunnel-zoom");//for tunnel effect
    setTimeout(function() {
        jQuery(".stack-gallery li:nth-last-child(2)").find("div").removeClass("cliptarget");
        jQuery(".stack-gallery li:last").remove();
        jQuery(".stack-gallery li:last").css({zIndex: 'auto'});
        jQuery(".stack-over").remove();
    }, animation_speed);
}


