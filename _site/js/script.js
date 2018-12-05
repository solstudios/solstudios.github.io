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
