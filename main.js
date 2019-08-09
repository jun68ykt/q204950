document.addEventListener('DOMContentLoaded', function() {

  var obj1 = document.getElementById("selfile");

  obj1.addEventListener("change",function(evt){

    var file = evt.target.files;
    var reader = new FileReader();
    reader.readAsText(file[0]);

    reader.onload = function(ev){

      //テキストエリアに表示
      document.test.txt.value = reader.result.toLowerCase();
      var result2=reader.result.toLowerCase().split("\n").filter(str => str);

      var result3 = result2.map(
        line => line.split(/\s+/).slice(0, 5)
      );

      var result4 = result3.map(ary =>  ary.map(e => [e]));

      result4 = result4.map(ary => ary.map(
                  (a, i) => (i <= 3 ? [ary[4][0], 10**(3-i), a[0]] : a)
                ));

      console.log(result4);

      var result5 = [];
      for (var i = 0; i < result4.length; i++) {
        for (var j = 0; j < result4[i].length; j++) {
          k = result4[i][j][2];
          if (!result5[k]) {
            result5[k] = [];
          }
          result5[k].push(result4[i][j]);
        }
      }
      console.log(result5);
    }
  },false);

});
