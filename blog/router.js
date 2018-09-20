import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/pages/index'
import Categories from '~/pages/categories'
import CategoriesElement from '~/pages/categoriesElement'
import Post from '~/pages/post'

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'index',
                path: '/',
                component: Home
            },
            {
                name: 'categories',
                path: '/categories',
                component: Categories
            },
            {
                name: 'categoriesElement',
                path: '/categories/categoriesElement',
                component: CategoriesElement
            },
            {
                name: 'post',
                path: '/categories/categoriesElement/post',
                component: Post
            }



        ]
    })
}