function mail(form) {
    var name=form.name.value;
    var subject=form.subject.value;
    var message=form.message.value;
    var email="solstudioss@gmail.com"

    var str="mailto:" + email;

    if (name && subject) {
      str += "?subject=" + name + " - " + subject;
    }
    else if (name && !subject) {
      str += "?subject=" + name;
    }
    else if (!name && subject) {
      str += "?subject=" + subject;
    }
    else {
      str += "?subject=Sol Studios Webmail";
    }

    if (message) {
       str += "&body=" + message;
    }
    console.log(form);

    document.getElementById('submit1').onclick=function() {
      goto(str);
    };
    document.getElementById('submit2').onclick=function() {
      goto(str);
    };
}

function goto(url) {
  window.location.href = url;
}

function filterFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filterInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("filterUl");
  li = ul.getElementsByTagName('filterLi');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
