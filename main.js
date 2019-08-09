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

      for (var i = 0; i<result4.length; i++) {
        if(result4[i][4][0].indexOf("x") >= 0){
          result4[i][0].unshift(1000);
          result4[i][0].unshift("x");
          result4[i][1].unshift(100);
          result4[i][1].unshift("x");
          result4[i][2].unshift(10);
          result4[i][2].unshift("x");
          result4[i][3].unshift(1);
          result4[i][3].unshift("x");
        } else if (result4[i][4][0].indexOf("y") >= 0){
          result4[i][0].unshift(1000);
          result4[i][0].unshift("y");
          result4[i][1].unshift(100);
          result4[i][1].unshift("y");
          result4[i][2].unshift(10);
          result4[i][2].unshift("y");
          result4[i][3].unshift(1);
          result4[i][3].unshift("y");
        }
      }
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
