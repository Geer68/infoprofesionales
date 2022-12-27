function search() {
    var inputName,
        inputCountry,
        filterName,
        filterCountry,
        table,
        tr,
        td,
        i,
        name,
        country;
    inputName = document.getElementById("myInput");
    inputCountry = document.getElementById("myInput2");

    filterName = inputName.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        if (td && td1) {
            name = (td.textContent || td.innerText).toUpperCase();
            country = (td1.textContent || td1.innerText).toUpperCase();
            if (
                name.indexOf(filterName) > -1 &&
                country.indexOf(filterCountry) > -1
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}