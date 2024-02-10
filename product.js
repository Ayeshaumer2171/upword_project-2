function closeChatBox() {
    document.getElementById('chatBox').style.display = 'none';
  }

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.toggle-chat').addEventListener('click', function () {
      document.getElementById('chatBox').style.display = 'block';
    });
  });




  var checkboxesDiv = document.querySelector('.checkboxes');

    checkboxesDiv.addEventListener('scroll', function () {
        var scrollPosition = checkboxesDiv.scrollTop;
        console.log('Scroll Position:', scrollPosition);
    });



    // toggle mobile view
    document.addEventListener("DOMContentLoaded", function () {
      var toggleIcon = document.getElementById("toggleIcon");
      var hiddenDiv = document.querySelector(".hidden-on-mobile");

      toggleIcon.addEventListener("click", function () {
          hiddenDiv.style.display = "block";
      });
  });