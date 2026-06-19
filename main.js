// Thay đổi nội dung búc thư ở đây
var letterContent =" Happy Monthsary My Love! Vậy là đôi mình đã đi với nhau được 10 tháng rùi nàii. Tuy là 6 tháng qua mình đã phải ở xa nhau nhưng tình cảm tụi mình vẫn cứ thế mà lớn hơn từng ngày! Cảm ơn em đã ở bên cạnh anh trong suốt thời gian qua, cùng anh trải qua những chuyện vui buồn những vẫn ngồi lại cùng anh sau tất cả. Anh luôn hi vọng đôi mình sẽ vẫn cùng nhau đón hết những trạm kỉ niệm ở phía trước mãi em nhé! Anh Yêu Em <3"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})