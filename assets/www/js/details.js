/* Description: JS for details page
* Created On: 
* Created By: Nikhil
* Last Modified On: 
* Last Modified By:
* Last Modified Reason:
* TODO: Error loading page message coming after clicking in tab
*/  
$(document).bind("pageinit", function(){
 //alert("document ready");
//keep gallery div open on load of page
 $("#dvGallery").show();
//Navbar functionality
 $(document).delegate('[data-role="navbar"] a', 'click', function () {
    $(this).addClass('ui-btn-active');
    $('.content_div').hide();
    $('#' + $(this).attr('data-href')).show();
//TODO: returning false on load of map, else giving error
    //initMap();
    return false;
});
//Initialize map on app load
 //Make horizontal carousel
 makeHorizontalCarousel();
//TODO:bind thumbnail to list/on click of thumbnail
//on click of thumbnail
 $('.thumbimage').bind("tap", function() { 
    //Hide previous image  
    $('#dvImage').hide();
    //Ajax loader while loading
    $('#mainimage').css('background-image', "url('loader.gif')");
    //alert(this.src);
    //Load image in div
    var i = $('<img />').attr('src',this.src).load(function() {
    //change source of image to clicked thumbnail
        $('#mainimage').attr('src', i.attr('src'));
        $('#dvImage').css('background-image', 'none');
    //fade in got image
        $('#dvImage').fadeIn();
    });
    return false; 
});
});
//Function to initialize map
function initMap() {
    //Sample latitute, longitude
    var latlng = new google.maps.LatLng(36.4885, 119.7014); 
    var myOptions = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP 
        //mapTypeId: google.maps.MapTypeId.SATELLITE 
    };
    //Implement a house marker at property location
    var map = new google.maps.Map(document.getElementById("dvMap"), myOptions);
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(36.4885,119.7014),
        map: map,
        icon: 'images/housemarker.jpg',
        title: '402 Gold Hill Rd E'
    });
    var contentString='<div style="padding: 8px 8px 8px 0; text-align: center; float: left; color:black;"><img style="max-width: 80px; max-height:80px;" src="images/p2.jpg"/><h3>402 Gold Hill Rd E</h4><p style="color:gray;">Listing ID #4456754</p></div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        draggable:false
    });
    infowindow.open(map,marker);
    //map.setTilt(45);
 }
//Written by Nikhil:To make div scroll horizontally
function makeHorizontalCarousel(){
    //variable for step
     var step = 1;
     //current index
     var current = 0;
     //maximum size of ul
     var maximum = $(".categories ul li").size();
     //index for visible
     var visible = 2;
     //speed of carousel
     var speed = 800;
     //size of li
     var liSize = 140;
     //height of li
     var height = 80;
     //maximum ul size
     var ulSize = liSize * maximum;
     //div size
     var divSize = liSize * visible; 
     //set css for categories and ul 
     $('.categories').css("width", "auto").css("height", height+"px").css("visibility", "visible").css("overflow", "hidden").css("position", "relative");
     $(".categories ul li").css("list-style","none").css("display","inline");
     $(".categories ul").css("width", ulSize+"px").css("left", -(current * liSize)).css("position", "absolute").css("white-space","nowrap").css("margin","0px").css("padding","5px");
     //on swipeleft function
     $(".categories").swipeleft(function(event){
         //check if there is element on left
         if(current + step < 0 || current + step > maximum - visible) {return; }
         else {
             //add a step
             current = current + step;
             //
             $('.categories ul').animate({left: -(liSize * current)}, speed, null);
         }
         return false;
     });

     $(".categories").swiperight(function(){
         //check if there is element on right
         if(current - step < 0 || current - step > maximum - visible) {return; }
         else {
             //decrease a step and animate left
             current = current - step;
             $('.categories ul').animate({left: -(liSize * current)}, speed, null);
         }
         return false;
     });         
}
