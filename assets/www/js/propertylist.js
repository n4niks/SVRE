$(document).ready(function(){
debugger;
var data=proItems.PropertyItems;
for(var  i=0; i<data.length;i++){
var listItem='<li><a href="details.html"><h3>'+data[i].ProName+'</h3><p>'+data[i].Address+'</p><div style="padding: 8px 8px 8px 0; text-align: center; float: left;"><img style="max-width: 80px; max-height: 80px;" src="images/'+data[i].ImgID+'/></div><h4>$'+data[i].Cost+'</h4><p>'+data[i].Type+'</p><p>'+data[i].Size+'</p><p id="pProNo">Property ID <span style="font-weight:bold">#'+data[i].ProID+'</span></p><p class="ui-li-aside"><strong>'+data[i]Rating+' stars</strong></p></a></li>';
$('#dvList').append(listItem);
}
});
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
            "ImgID": "P1"
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
            "ImgID": "P2"
        },
        {
            "index": 3,
            "ProID": "345654",
            "ProName": "408GoldHillsRd",
            "Cost": "799000",
            "Type": "Residential",
            "Size": "4BHK",
            "Address": "EnumClaw,Wa,98022",
            "Rating": "4",
            "ImgID": "P3"
        },
        {
            "index": 4,
            "ProID": "342556",
            "ProName": "4160828thEve",
            "Cost": "550000",
            "Type": "Residential",
            "Size": "4BHK",
            "Address": "RedmondStreet, CA",
            "Rating": "4",
            "ImgID": "P4"
        },
        {
            "index": 5,
            "ProID": "560432",
            "ProName": "CobainAppts",
            "Cost": "8000000",
            "Type": "Appartment",
            "Size": "3BHK",
            "Address": "KurtStreet,CA",
            "Rating": "5",
            "ImgID": "P5"
        },
        {
            "index": 6,
            "ProID": "849643",
            "ProName": "GilbertPalace",
            "Cost": "300000",
            "Type": "Residential",
            "Size": "2BHK",
            "Address": "RheniusStreet,CA,987708",
            "Rating": "4",
            "ImgID": "P6"
        },
        {
            "index": 7,
            "ProID": "465784",
            "ProName": "SkylineApts",
            "Cost": "450000",
            "Type": "Appartment",
            "Size": "2BHK",
            "Address": "Frazer Street, Wa 949900",
            "Rating": "4.5",
            "ImgID": "P7"
        }
    ]
}