import Vue from 'vue';
import Router from 'vue-router';
import RecipesIndex from '@/components/routable/recipes/Index';

import AromasInitial from '@/components/routable/aromas/Initial';
import AromasIndex from '@/components/routable/aromas/Index';
import AromasAdd from '@/components/routable/aromas/Add';
import AromasEdit from '@/components/routable/aromas/Edit';

import Main from '@/components/Main';
import SignIn from '@/components/SignIn';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'recipes',
          name: 'Recipes',
          component: RecipesIndex,
        },
        {
          path: 'aromas',
          component: AromasInitial,
          children: [
            {
              path: '',
              name: 'aromas-index',
              component: AromasIndex,
            },
            {
              path: 'add',
              name: 'aromas-add',
              component: AromasAdd,
            },
            {
              path: ':id/edit',
              name: 'aromas-edit',
              component: AromasEdit,
            },
          ],
        },
      ],
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
    },
  ],
});
