var rellax = new Rellax(".rellax");

document.body.onload = function () {
   setTimeout(function () {
      var loader = document.getElementById('page-loader');
      if (!loader.classList.contains('done')) {
         loader.classList.add('done');
      }
   }, 2000);
}