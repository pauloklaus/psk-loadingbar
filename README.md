# psk-loadingbar

Vue component with animated horizontal bar.

Ideal to be displayed while a process is waiting to be completed, such as the response to an http request. 

* Report bugs: https://github.com/pauloklaus/psk-loadingbar/issues
* Live test: https://pauloklaus.com.br/playground

## Install

Create a new vue project:
```
vue create
```

Install component:
```
npm install --save psk-loadingbar
```

## Environment setting

Make a src/resources folder at the root:
```
mkdir src/resources
```

### Configure the psk-loadingbar

Create the src/resources/psk-loadingbar.js:
```
import Vue from "vue";
import LoadingBar from "psk-loadingbar";
import "psk-loadingbar/dist/LoadingBar.css";

Vue.use(LoadingBar, { LoadingBarName: "MyLoadingBar" });
```

### Import psk-loadingbar and dependencies

The "src/main.js" file should look like this:
```
import Vue from "vue";
import App from "./App.vue";

import "./resources/psk-loadingbar";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

## How to use (example in App.vue)
```
<template>
    <div>
        <my-loading-bar :animate="true" :fgClass="my-color" />
    </div>
</template>

<style>
.my-color {
    background-color: red;
}
</style>
```

## Properties

Property | Description | Required | Default
-|-|-|-
animate | Start animation | no | yes
resetOnStop | Clear the bar status when the animation stops  | no | yes
bgClass | Background CSS class | no | -
fgClass | Foreground CSS class | no | -

## Using in the browser

To use directly in the browser, import psk-loadingbar:
```
<script src="https://unpkg.com/psk-loadingbar" />
```
