import Mock from 'mockjs'
const Random = Mock.Random;
function getArticle(){
    var article = [
        {
            id: Random.guid(),
            title: '一起来观看 Wes Anderson的色彩回旋舞',
            sort: Random.ctitle(2) +'|'+ Random.ctitle(2) +'|'+ Random.ctitle(2),
            img: require('@/assets/imgs/find/1.png'),
            content: {
                img1: require('@/assets/imgs/find/img1.png'),
                name: Random.cname(2,3),
                img2: require('@/assets/imgs/find/img2.png'),
                pag1: Random.cparagraph(1,2),
                pag2: Random.cparagraph(1,2),
                img3: Random.image('346x160',Random.color())
            }
        }
    ]
    for(var i = 0; i < 5;i ++){
        article.push({
            id: Random.guid(),
            title: Random.ctitle(13,22),
            sort: Random.ctitle(2) +'|'+ Random.ctitle(2) +'|'+ Random.ctitle(2),
            img: Random.image('265x358',Random.color()),
            content: {
                img1: Random.image('186x186',Random.color()),
                name: Random.cname(2,3),
                img2: Random.image('346x160',Random.color()),
                pag1: Random.cparagraph(1,2),
                pag2: Random.cparagraph(1,2),
                img3: Random.image('346x160',Random.color())
            }
        })
    }

    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(article)
        }, 200);
    })
    return promise
}


function getGoods(){
    var goodsImg = [
        {
            id: Random.guid(),
            img: require('@/assets/imgs/find/good1.png'),
            title: Random.ctitle(13,22),
            ctitle: Random.ctitle(13,22),
        },
        {
            id: Random.guid(),
            img: require('@/assets/imgs/find/good2.png'),
            title: Random.ctitle(13,22),
            ctitle: Random.ctitle(13,22),
        },
        {
            id: Random.guid(),
            img: require('@/assets/imgs/find/good3.png'),
            title: Random.ctitle(13,22),
            ctitle: Random.ctitle(13,22),
        }
    ]
    for(var i = 0; i < 5; i ++){
        goodsImg.push({
            id: Random.guid(),
            img: Random.image('375x160',Random.color()),
            title: Random.ctitle(13,22),
            ctitle: Random.ctitle(13,22),
        })
    }

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(goodsImg)
        },200)
    })
    return promise
}


export default {
    getArticle,
    getGoods
}