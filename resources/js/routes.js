const Home = () => import('./components/Home.vue');
const Contact = () => import('./components/Contact.vue');

//blog Components
const Show = () => import('./components/Blog/show.vue');
const Create = () => import('./components/Blog/create.vue');
const Edit = () => import('./components/Blog/edit.vue');


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'showBlog',
        path: '/Blogs',
        component: Show
    },
    {
        name: 'createBlog',
        path: '/blog/create',
        component: Create
    },
    {
        name: 'editBlog',
        path: '/blog/edit/:id',
        component: Edit
    },
];
