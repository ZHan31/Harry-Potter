function faculty() {
    var name1 = document.getElementById("NameOne").value;
    var name2 = document.getElementById("NameFaculty").value;

    if (name1.length <= 2) {
        alert("Enter at least 3 character");
    }
    if (name2.length <= 2) {
        alert("Enter at least 3 character")
    } else {
        var random = Math.floor(Math.random() * 100);
        document.getElementById("print").innerHTML = name1 + "and" + name2 + "=" + random + "%" + "of compatible"
    }
    if (random <= 10 || random <= 24) {
        document.getElementById("statement").innerHTML = "You're a member of the Hufflepuff faculty";
        document.getElementById("soundno").play()
    } else if (random <= 25 || random <= 49) {
        document.getElementById("statement").innerHTML = "You're a member of the Ravenclaw faculty";
        document.getElementById("soundyes").play()
    } else if (random <= 50 || random <= 74) {
        document.getElementById("statement").innerHTML = "You're a member of the Slytherin faculty";
        document.getElementById("soundyes").play()
    } else if (random <= 75 || random <= 100) {
        document.getElementById("statement").innerHTML = "You're a member of the Gryffindor faculty";
        document.getElementById("soundyes").play()
    }
}