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
const toggleMenu = () => document.body.classList.toggle("open");

//prueba
document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end