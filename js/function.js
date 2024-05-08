////////////BESTEMMIE

// function changeImg(visibleImg, visibleMiniatura, arrayImg, arrayMiniatura, index) {
//     if (!visibleImg.classList.contains('d-none') && index < arrayImg.length - 1) {
//         visibleImg.classList.add('d-none')
//         index++
//         visibleImg = arrayImg[index];
//         visibleImg.classList.remove('d-none')
//         visibleMiniatura.classList.remove('border', 'rounded', 'border-5', 'border-warning')
//         visibleMiniatura = arrayMiniatura[index];
//         visibleMiniatura.classList.add('border', 'rounded', 'border-5', 'border-warning')
        

//     } else {
//         visibleImg.classList.add('d-none')
//         index = 0
//         visibleImg = arrayImg[index];
//         visibleImg.classList.remove('d-none');
//         visibleMiniatura.classList.remove('border', 'rounded', 'border-5', 'border-warning')
//         visibleMiniatura = arrayMiniatura[index];
//         visibleMiniatura.classList.add('border', 'rounded', 'border-5', 'border-warning')
        
//     }  
//  }

 // changeImg(imgAttiva, miniaturaAttiva, div, divMiniatura, i)



 function changeImg() {
     if (!imgAttiva.classList.contains('d-none') && i < div.length - 1) {
         imgAttiva.classList.add('d-none')
         i++
         imgAttiva = div[i];
         imgAttiva.classList.remove('d-none')
         miniaturaAttiva.classList.remove('border', 'rounded', 'border-5', 'border-warning')
         miniaturaAttiva = divMiniatura[i];
         miniaturaAttiva.classList.add('border', 'rounded', 'border-5', 'border-warning')


     } else {
         imgAttiva.classList.add('d-none')
         i = 0
         imgAttiva = div[i];
         imgAttiva.classList.remove('d-none');
         miniaturaAttiva.classList.remove('border', 'rounded', 'border-5', 'border-warning')
         miniaturaAttiva = divMiniatura[i];
         miniaturaAttiva.classList.add('border', 'rounded', 'border-5', 'border-warning') 
     }
    }