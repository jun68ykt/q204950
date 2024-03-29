document.addEventListener('DOMContentLoaded', function() {

  const obj1 = document.getElementById("selfile");

  obj1.addEventListener("change",function(evt){

    const file = evt.target.files;
    const reader = new FileReader();
    reader.readAsText(file[0]);

    reader.onload = function(ev){

      //テキストエリアに表示
      document.test.txt.value = reader.result.toLowerCase();
      const result2 = reader.result.toLowerCase().split("\n").filter(str => str);

      const result3 = result2.map(
        line => line.split(/\s+/).slice(0, 5)
      );

      const result4 = result3.map(
        ary => ary.map(
          (e, i) => (i <= 3 ? [ary[4], 10**(3-i), e] : [e])
      ));

      console.log(result4);

      const result5 = result4.reduce((a, e) => ([...a, ...e]), [])
                           .filter(a => a.length > 1)
                           .reduce(
                             (obj, e) => ({
                               ...obj,
                               [e[2]]: obj[e[2]] ? [...obj[e[2]], e] : [e]
                             })
                             ,{});
      console.log(result5);

      const summarize = (ary) => {
        const map = ary.reduce((m, e) => m.set(e[0], (m.get(e[0]) || 0) + e[1]), new Map());
        return [...map].sort((e1,e2) => e1[0].localeCompare(e2[0]));
      }

      const result6 = _.mapValues(result5, summarize);

      console.log(result6);
    }
  },false);

});
