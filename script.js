//alert('script is working for this page')

const url = window.location.href
let position = 1

if (!url.startsWith('https://web.telegram.org/')) showTG()
if (!url.startsWith('https://www.youtube.com/')) showUT()
if (!url.startsWith('https://vk.com')) showVK()

function showVK(){
    const style = 'style' + position
    position++

    const button = document.createElement('img');
    button.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Font_Awesome_5_brands_vk.svg/1024px-Font_Awesome_5_brands_vk.svg.png"
    button.classList.add(style)
    document.body.append(button)

    button.addEventListener('click', event => {
        document.location.href = "https://vk.com/"
    })
}

function showTG(){
    const style = 'style' + position
    position++

    const button = document.createElement('img');
    button.src = "https://galinaseregina.ru/wp-content/uploads/tg-1024x1024.png"
    button.classList.add(style)
    document.body.append(button)

    button.addEventListener('click', event => {
        document.location.href = "https://web.telegram.org/"
    })
}

function showUT(){
    const style = 'style' + position
    position++

    const button = document.createElement('img');
    button.src = "https://www.pinclipart.com/picdir/big/519-5196877_youtube-4k-video-downloader-4k-video-downloader-png.png"
    button.classList.add(style)
    document.body.append(button)

    button.addEventListener('click', event => {
        document.location.href = "https://www.youtube.com/"
    })
}