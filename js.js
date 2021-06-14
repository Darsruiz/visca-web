const checkbox = document.getElementById('switch');
alphabet = document.getElementById('parent');
a = document.getElementById('a');
b = document.getElementById('b');
c = document.getElementById('c');
d = document.getElementById('d');
e = document.getElementById('e');
let sorted = false;



function sort() {
    if (sorted) {    
        a.style.order = 4;
        b.style.order = 5;
        c.style.order = 3;
        d.style.order = 1;
        e.style.order = 2;
        sorted = false
    } else {
        a.style.order = 1;
        b.style.order = 2;
        c.style.order = 3;
        d.style.order = 4;
        e.style.order = 5;
        sorted = true
    }
    
    
}

function changeView() {
    if (checkbox.checked) {
        alphabet.style.display = "flex"
        alphabet.style.justifyContent = "space-around"
        alphabet.style.alignItems = "center"

        flexElem(a)
        flexElem(b)
        flexElem(c)
        flexElem(d)
        flexElem(e)
    } else {
        alphabet.style.display = "grid";
        alphabet.style.gridTemplateColumns = "22% 22% 22% 22% 25%";

        gridElem(a);
        gridElem(b);
        gridElem(c);
        gridElem(d);
        gridElem(e);
    }
    
}

function gridElem(elem) {
    elem.style.height = "25rem";
    elem.style.width = "14rem";
    elem.style.display = "grid";
    elem.style.gridAutoFlow = "row";
    elem.style.alignItems = "center"
    elem.style.justifyItems = "center"
    elem.style.paddingRight = 0
}

function flexElem(elem) {
    elem.style.height = "7rem";
    elem.style.width = "100%";
    elem.style.display = "flex"
}