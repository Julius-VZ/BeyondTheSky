//Put each element who have class "planet-row" in one array to make handling easier
const ROWS = document.querySelectorAll(".content-row");

for(let i = 0; i <  ROWS.length; i++){
    const ROW = ROWS[i];
    const DETAILSBTN = ROW.querySelector(".btn-details");
    const DETAILSAPANEL = ROW.querySelector(".details-panel");
    const NEXTBTN = ROW.querySelector(".btn-next");
    const BACKBTN = ROW.querySelector(".btn-back");

    DETAILSBTN.addEventListener("click", function(){
        DETAILSAPANEL.classList.toggle("hidden");
        ROW.scrollIntoView({behavior: "smooth"});
    });

    NEXTBTN.addEventListener("click", function(){
        if(i < ROWS.length -1){
            ROWS[i + 1].scrollIntoView({behavior: "smooth"});
        }
    });

    BACKBTN.addEventListener("click", function(){
        if(i > 0){
            ROWS[i - 1].scrollIntoView({behavior: "smooth"});
        }
    });
}