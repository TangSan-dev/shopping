import Mock from 'mockjs'

const Random = Mock.Random


function getKindImgs() {
    var kinds = [
        {
            id: Random.guid(),
            name: Random.title(1),
            pes: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            img: require('@/assets/imgs/kind/subkind/detail1.png'),
        },
        {
            id: Random.guid(),
            name: Random.title(1),
            pes: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            img: require('@/assets/imgs/kind/subkind/detail2.png'),
        },
        {
            id: Random.guid(),
            name: Random.title(1),
            pes: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            img: require('@/assets/imgs/kind/subkind/detail3.png'),
        },
        {
            id: Random.guid(),
            name: Random.title(1),
            pes: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            img: require('@/assets/imgs/kind/subkind/detail4.png'),
        },
        {
            id: Random.guid(),
            name: Random.title(1),
            pes: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            img: require('@/assets/imgs/kind/subkind/detail5.png'),
        },
        {
            id: Random.guid(),
            name: Random.title(1),
            pes: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            img: require('@/assets/imgs/kind/subkind/detail6.png'),
        }
    ]


    for (var i = 0; i < 8; i++) {
        kinds.push({
            id: Random.guid(),
            name: Random.title(1),
            pes: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            img: Random.image('129x129', Random.color())
        })
    }

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(kinds)
        },200)
    })
    return promise;
}

// 这是购物车的参数 商品明细
function getBuyCart(id) {
    var kinds = {
            id,
            name: Random.title(1),
            title: Random.ctitle(6,10),
            price: Random.integer(100, 500),
            stock: Random.integer(5, 20),
            img:Random.image('80x80', Random.color()),
            // count:0,
        }
    

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(kinds)
        },200)
    })
    return promise;
}

export default {
    getKindImgs,
    getBuyCart
}