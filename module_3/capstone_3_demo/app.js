$("#alert-success").hide();
$("#alert-fail").hide();

fetch("https://www.colr.org/json/schemes/random/30?scheme_size_limit=>4")
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      data.schemes.map((obj) => {
        $("#main-container").append(createCard(obj.colors));
      });
      $("#alert-success").show();
    }
  })
  .catch((err) => {
    $("#alert-fail").show();
  });

function createCard(colors) {
  let card = `
    <div class="col-lg-3 col-md-4 col-sm-6 my-3">
      <div class="card-container">
        <div class="color-1" style='background: #${colors[0]};'>
          <div class='hex'>#${colors[0]}</div>
        </div>
        <div class="color-2" style='background: #${colors[1]};'>
          <div class='hex'>#${colors[1]}</div>
        </div>
        <div class="color-3" style='background: #${colors[2]};'>
          <div class='hex'>#${colors[2]}</div>
        </div>
        <div class="color-4" style='background: #${colors[3]};'>
          <div class='hex'>#${colors[0]}</div>
        
        </div>
      </div>
    </div>
  `;
  return card;
}
