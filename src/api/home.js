import homeMock from '@/mock/home.js'   

// 方法
// function getBannerImages(){
//     var images = [];
//     images.push({
//         id:1,
//         img: require('@assets/imgs/home/swiper-1.png')
//     })
//     images.push({
//         id:3,
//         img: require('@assets/imgs/home/swiper-2.png')
//     })
//     images.push({
//         id:2,
//         img: require('@assets/imgs/home/swiper-3.png')
//     })
//     return images;
// }

// 后期会用axios作为请求 异步 返回的一个promise
// 这里模拟promise
function getBannerImages(){
    var images = [];
    images.push({
        id:1,
        img: require('@assets/imgs/home/swiper-1.png')
    })
    images.push({
        id:3,
        img: require('@assets/imgs/home/swiper-2.png')
    })
    images.push({
        id:2,
        img: require('@assets/imgs/home/swiper-3.png')
    })
    var promise = new Promise((resolve,reject)=>{
        // 模拟延迟
        setTimeout(()=>{
            resolve(images);
        },200)
    })
    return promise;
}



// 模仿 promises
function getMondayImgs(){
    var imgs = homeMock.mandayImgs();
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(imgs);
        },200)
    })
}

// 向外导出这个方法
export default {
    getBannerImages,
    getMondayImgs
}