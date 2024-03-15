const search =document.querySelector('#search')
search.addEventListener(
    "click", function(){
        document.querySelector('.timkiem').style.display="flex"
    }
)

const xemthem =document.querySelector('#xemthem')
xemthem.addEventListener(
    "click", function(){
        document.querySelector('.qc2').style.display="block"
        document.querySelector('#xemthem').style.display="none"
    }
)
