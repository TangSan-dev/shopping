// mixin 混合  引入的方法获取api

// 引入 mockjs
import Mock from 'mockjs'
const Random = Mock.Random



export default{
    data(){
        return {
            imgs:[
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
        }
    }
}