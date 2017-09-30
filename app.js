console.log("hello from app.js!!!");

var viewer = PhotoSphereViewer({
    container: 'mydiv',
    panorama: 'assets/22068963_10210743068677454_2017749385_o.jpg'
});


btn_original = document.getElementById("original");
btn_red = document.getElementById("red");
btn_blue = document.getElementById("blue");

btn_original.onclick = function () {
    viewer.setPanorama('assets/22068963_10210743068677454_2017749385_o.jpg');
}

btn_red.onclick = function () {
    viewer.setPanorama('assets/22117720_10210743057237168_1489438937_o.jpg');
}

btn_blue.onclick = function () {
    viewer.setPanorama('assets/22092645_10210743056957161_1797174468_o.jpg');
}
