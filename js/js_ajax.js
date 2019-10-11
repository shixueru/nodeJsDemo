function fetch(url, method, data, success) {
    var ajax = new XMLHttpRequest();
    if (method === 'get') {
      if (data) {
        url += '?';
        url += data;
      }
      ajax.open(method, url);
      ajax.send();
    } else {
      ajax.open(method, url);
      ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      if (data) {
        ajax.send(data);
      }
      ajax.send();
    }
    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status === 200 || ajax.status===304) {
        success(ajax.responseText);
      }
    }
}
// window.fetch = fetch;
// module.exports = fetch;