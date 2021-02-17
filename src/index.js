import Vue from "vue";
import LoadingBar from "@/components/LoadingBar";

function install(Vue, options = {}) {
    Vue.component(options.LoadingBarName || "LoadingBar", LoadingBar);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue)
    install(window.Vue);

export { LoadingBar };
