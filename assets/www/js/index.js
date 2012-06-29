/* Description: JS for index and propertylist page
* Created On: 
* Created By: Nikhil
* Last Modified On: 
* Last Modified By:
* Last Modified Reason:
* TODO: To find alternative for document.ready(HINT: bind("pageinit"))
*/  
var footer='<div data-role="footer" data-theme="a" data-position="fixed" data-tap-toggle="false"><h1 style="height: 15px;">Placeholder for footer</h1></div>';
//TODO:Change document.ready to init mobile function
$(document).ready( function(){
 //Uncomment if you don't want to initialize page automatically
 //$.mobile.autoInitializePage = false;
 //Give class="redirect" and rel="external" for all external links
 $(".redirect").click(function() {
        var test = "JavaScript:void(0);";
        if($(this).attr("data-href").toLowerCase()!= test.toLowerCase())
        {
            showLoading();
            window.location.href = $(this).attr("data-href");
        }
    });

//Store data in a variable TODO: get data through ajax call
var data=proItems.PropertyItems;
//bind data to the list
for(var  i=0; i<data.length;i++){
var listItem='<li><a rel="external" class="redirect" data-href="Details.html"><h3>'+data[i].ProName+'</h3><p>'+data[i].Address+'</p><div style="padding: 8px 8px 8px 0; text-align: center; float: left;"><img style="max-width: 80px; max-height: 80px;" src="images/'+data[i].ImgID+'.jpg"/></div><h4>$'+data[i].Cost+'</h4><p>'+data[i].Type+'</p><p>'+data[i].Size+'</p><p id="pProNo">Property ID <span style="font-weight:bold">#'+data[i].ProID+'</span></p><p class="ui-li-aside"><strong>'+data[i].Rating+' stars</strong></p></a></li>';
$('#dvList').append(listItem);
}
//Append footer on every page    
    //$('#dvIndex').append(footer);
});
function showLoading() {
   $.mobile.loadingMessage = "Loading...";              
    $.mobile.showPageLoadingMsg();  
}
//sample json data
var proItems={
    "PropertyItems": [
        {
            "index": 1,
            "ProID": "145675",
            "ProName": "402 Gold Hill Rd E",
            "Cost": "1600000",
            "Type": "Residential",
            "Size": "4BHK",
            "Address": "Greenwater, Wa, 98022",
            "Rating": "4",
            "ImgID": "p1"
        },
        {
            "index": 2,
            "ProID": "465763",
            "ProName": "Ashley Villa",
            "Cost": "175000",
            "Type": "Appartment",
            "Size": "3BHK",
            "Address": "Durham,Wa,98022",
            "Rating": "4.5",
            "ImgID": "p2"
        },
        {
            "index": 3,
            "ProID": "345654",
            "ProName": "408 Gold Hills Rd",
            "Cost": "799000",
            "Type": "Residential",
            "Size": "4BHK",
            "Address": "EnumClaw,Wa,98022",
            "Rating": "4",
            "ImgID": "p3"
        },
        {
            "index": 4,
            "ProID": "342556",
            "ProName": "4160828th Eve",
            "Cost": "550000",
            "Type": "Residential",
            "Size": "4BHK",
            "Address": "Redmond Street, CA",
            "Rating": "4",
            "ImgID": "p4"
        },
        {
            "index": 5,
            "ProID": "560432",
            "ProName": "Cobain Appts",
            "Cost": "8000000",
            "Type": "Appartment",
            "Size": "3BHK",
            "Address": "Kurt Street,CA",
            "Rating": "5",
            "ImgID": "p5"
        },
        {
            "index": 6,
            "ProID": "849643",
            "ProName": "Gilbert Palace",
            "Cost": "300000",
            "Type": "Residential",
            "Size": "2BHK",
            "Address": "RheniusStreet,CA,987708",
            "Rating": "4",
            "ImgID": "p6"
        },
        {
            "index": 7,
            "ProID": "465784",
            "ProName": "Skyline Apts",
            "Cost": "450000",
            "Type": "Appartment",
            "Size": "2BHK",
            "Address": "Frazer Street, Wa 949900",
            "Rating": "4.5",
            "ImgID": "p7"
        }
    ]
}
