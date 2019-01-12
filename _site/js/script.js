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

function fuzzy(s, cmp) {
  // https://stackoverflow.com/questions/9206013/javascript-fuzzy-search
  var hay = cmp.toLowerCase(), i = 0, n = -1, l;
  s = s.toLowerCase();
  for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
  return true;
};

function filterClear() {
  // Declare variables
  var input, filter, ul, li, titleVal, roleVal, i, txtValue;

  // clear input
  input = document.getElementById('filterInput');
  input.value = "";

  ul = document.getElementById('filterUl');
  li = ul.getElementsByClassName('filterLi');

  // Loop through all list items, and unhide all
  for (i = 0; i < li.length; i++) {
    li[i].style.display = "";
  }
}

function filterFunction() {
  // Declare variables
  var input, filter, ul, li, titleVal, roleVal, i, txtValue;
  input = document.getElementById('filterInput');
  filter = input.value;
  ul = document.getElementById('filterUl');
  li = ul.getElementsByClassName('filterLi');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("span");
    titleVal = a[0].textContent;
    roleVal = a[1].textContent;

    if (fuzzy(filter, titleVal) || fuzzy(filter, roleVal)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function imageModal(imageSrc) {
  console.log(imageSrc);
  var image = document.getElementById('modalImage');
  image.src = imageSrc;
  $('#modal1').modal('open');
}
