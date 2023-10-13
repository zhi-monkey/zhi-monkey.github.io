
    //默认地理位置设置为广州市天河区
    var x=113.312419,y=23.092049;   
    window.onload = function() {  
        if(navigator.geolocation) {  
            navigator.geolocation.getCurrentPosition(showPosition);
            document.getElementById("status").innerHTML = "HTML5 Geolocation is supported in your browser.";  

            // 百度地图API功能  
            var map = new BMap.Map("container");  
            var point = new BMap.Point(x,y);  
            map.centerAndZoom(point,12);  

            var geolocation = new BMap.Geolocation();  
            geolocation.getCurrentPosition(function(r) {  
                if(this.getStatus() == BMAP_STATUS_SUCCESS) {  
                    var mk = new BMap.Marker(r.point);  
                    map.addOverlay(mk);  
                    map.panTo(r.point);  
                    map.enableScrollWheelZoom();
                }  
                else {  
                    alert('failed'+this.getStatus());  
                }          
            }, {enableHighAccuracy: true})  
            return;
        }  
        alert("你的浏览器不支持获取地理位置！");
    };  

    function showPosition(position){
        x=position.coords.latitude; 
        y=position.coords.longitude;    
    }

