(function () {
  function getData(url, cf) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return; //return if not complete 
      if (xhr.status != 200) { //check request status      
        alert('Error ' + xhr.status + ': ' + xhr.statusText);
        return;
      }
      cf(xhr.responseText); // process result 
    }
    xhr.send();
  }

  $('#p1').on('click', function (e) {
    e.preventDefault();
    getData('http://192.168.250.133:8080/AJAXProject/randomNumber', function (responseText) {
      var resultJson = JSON.parse(responseText);
//      debugger;
      $('#content').css('background-color', resultJson.color);
    });
  });

  $('#p2').on('click', function (e) {
    e.preventDefault();
    $.getJSON('http://192.168.250.133:8080/AJAXProject/randomNumber', function (data) {
      $('#content').css('background-color', data.color);
    })
  });

  $('#p3').on('click', function (e) {
    e.preventDefault();
    alert($(this).text());
  });

})($);