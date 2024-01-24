let inp = document.querySelectorAll("input")
let img = document.querySelector("img")

inp.forEach((item) => {
    item.addEventListener(
        "change", () => {
            let i = item.dataset.val
           
            if (i == "e") {
                img.src ="./i.jpg"
            }
            else {
                img.src = "./s.jpg";
            }
   })
})
