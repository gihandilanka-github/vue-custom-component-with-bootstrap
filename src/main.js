import Vue from "vue";
import _ from 'lodash';
import router from './router'
import vueCustomElement from "vue-custom-element";
import 'document-register-element/build/document-register-element';
import App from "./components/App";
import CompanyList from "./components/CompanyList";

Vue.use(vueCustomElement);
App.router = router

const options = {
	shadow: true,
	beforeCreateVueInstance(root){

		const rootNode = root.el.getRootNode();

		if(rootNode instanceof ShadowRoot){

			root.shadowRoot = rootNode

		}else{

			root.shadowRoot = document.head;
		}

		return root;

	}
}

Vue.customElement('vue-app', App, options);
Vue.customElement('company-list', CompanyList, options);
