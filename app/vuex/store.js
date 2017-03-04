import Vue from 'vue';
import Vuex from 'vuex';
// import index from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: 'zs',
        isOk: false,
        time: 0
    },
    mutations: {
        changeOk(state, options) {
            state.time = state.time + options.num;
            state.isOk = !state.isok;
        }
    },
    actions: {
        // changeOk(content){
        //     content.commit('changeOk');
        // }
        // ES6参数解构
        // 异步执行 不同于mutations的同步执行
        // changeOk({commit}){
        //     setTimeout(()=>{
        //         commit('changeOk');
        //     }, 2000);            
        // }

        // 方式二 对象载荷形式传参
        //  changeOk({commit}){
        //     setTimeout(()=>{
        //         commit({
        //             type: 'changeOk',
        //             num: 10,
        //         });
        //     }, 1000);            
        // }

        // Promise 多重组合嵌套
        actionA({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('actionA中的定时器执行了');
                    commit({
                        type: 'changeOk',
                        num: 2,
                    });
                    // 成功后要执行的回调函数
                    // 自定义是执行成功还是失败
                    // Promise 对象执行的过程
                    // 执行完定时器后要执行的回调函数
                    // resolve(); 自己定义成功执行什么 失败执行什么
                    // 对应的then中两个回调函数 成功执行的函数 与失败执行的函数
                    // reject();
                    resolve();
                    /*宗以上所理解 也就是 我如果需要向服务端请求数据 获取
                      前面请求到的数据 作为后面请求数据的参数的话 可以使用异步嵌套
                      实现复杂的数据处理逻辑
                    */

                }, 1000)
            })
        },
        // 分发和commit dispatch 作为对象参数传入进来 
        actionB({ dispatch, commit }) {
            // 多重Promise嵌套  actionC要使用异步嵌套 
            // 在actionB中比不返回一个Promise实例
            return new Promise((resolve, reject) => {
                dispatch('actionA').then(() => {
                    setTimeout(() => {
                        console.log('actionB中的定时器执行了');
                        commit({
                            type: 'changeOk',
                            num: 5,
                        });                       
                       resolve();
                    }, 3000);
                }, () => {
                    console.log('actionB失败了')
                })
            })         

        },
        // 多重嵌套 
        actionC({ dispatch, commit }) {
            return dispatch('actionB').then(() => {
                setTimeout(() => {
                    console.log('actionC中的定时器执行了');
                    commit({
                        type: 'changeOk',
                        num: 10,
                    });
                }, 1000)

            }, () => {
                console.log('actionC失败了')
            })
        }
    }
    // //组合模块
    // modules:{
    //     index
    // }
})