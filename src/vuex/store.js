import Vue from 'vue';
import Vuex from 'vuex';
import iView from 'iview';
import $ from 'jquery';
import 'iview/dist/styles/iview.css';

/*加载各个模块的vuex*/
import indexStore from "./index.store";
import detailStore from "./detail.store";

Vue.use($);
Vue.use(Vuex);
Vue.use(iView);
export default  new Vuex.Store({
   modules: {
     indexStore,
     detailStore
   }
});
