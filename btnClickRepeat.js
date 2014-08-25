
setInterval(function(){runit()}, 3000); function runit(){$("#add_recruit").click();};

window._alert = window.alert;
window.alert = function (msg, showItNow) {    
    if (showItNow) {
        window._alert(msg);
    }
};
window.alert("BOOOO!");  //I will not show up