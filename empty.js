window.onload = function() {
        var button = document.querySelector("#file + button");
        var input = document.getElementById("file");
        var display = document.getElementById("DisplayText");
        input.addEventListener("change", addDoc);
        button.addEventListener("click", handleText)

        function addDoc(event) {
          var file = this.files[0]
          var reader = new FileReader();      
          reader.onload = function(e) {
            text = reader.result;
            button.removeAttribute("disabled");
          }
          reader.onerror = function(err) {
          console.log(err, err.loaded
                        , err.loaded === 0
                        , file);
          button.removeAttribute("disabled");
          }
          reader.readAsText(event.target.files[0]);
        }

        function handleText() {
          display.textContent = text; // do stuff with `text`: `reader.result` from `addDoc`
          button.setAttribute("disabled", "disabled");

          var lines = reader.result.split();
          alert ("Содержимое файла появится в форме");      
        }
}
  