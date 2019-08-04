import Mock from 'mockjs'

const Random = Mock.Random

function mandayImgs(){
    var imgs = [
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p1.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p2.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p3.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p4.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p5.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p6.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p7.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p8.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p9.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p10.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p11.png')
        },
        {
            id: Random.guid(),
            url:require('@/assets/imgs/home/p12.png')
        },
    ]
    for(var i = 0; i < 6; i ++){
        imgs.push({
            id: Random.guid(),
            url: Random.image('79x79',Random.color())
        })
    }
    return imgs;
}


export default {
    mandayImgs
}