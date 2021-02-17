<template>
    <div class="loading-bar" :class="bgClass">
        <div ref="backgroundBar"></div>
        <div ref="foregroundBar" :class="fgClass"></div>
    </div>
</template>

<script>
export default {
    props: {
        animate: {
            type: Boolean,
            default: true
        },
        resetOnStop: {
            type: Boolean,
            default: true
        },
        bgClass: {
            type: String,
            default: ""
        },
        fgClass: {
            type: String,
            default: "loading-bar-foreground"
        }
    },
    data() {
        return {
            timer: null,
            backgroundBar: 0,
            foregroundBar: 0,
            expand: true
        }
    },
    watch: {
        animate(animate) {
            if (animate)
                this.start();
            else
                this.stop();
        }
    },
    created() {
        if (this.animate)
            this.start();
    },
    methods: {
        update() {
            this.$refs.backgroundBar.style.width = this.backgroundBar + "%";
            this.$refs.foregroundBar.style.width = this.foregroundBar + "%";
        },
        doAnimate() {
            if (this.expand) {
                this.backgroundBar = 0;
                this.foregroundBar += 1;

                if (this.foregroundBar >= 100)
                    this.expand = false;
            }
            else {
                this.backgroundBar += 1;
                this.foregroundBar -= 1;

                if (this.foregroundBar <= 0) {
                    this.backgroundBar = 0;
                    this.expand = true;
                }
            }

            this.update();
        },
        stop() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;

                if (this.resetOnStop) {
                    this.backgroundBar = 0;
                    this.foregroundBar = 0;
                    this.expand = false;
                    this.update();
                }
            }
        },
        start() {
            this.stop();
            this.timer = setInterval(this.doAnimate, 10);
        },
        beforeDestroy() {
            this.stop();
        }
    }
}
</script>

<style>
.loading-bar {
    display: flex;
    height: 2px;
}
.loading-bar-foreground {
    background-color: #005;
}
</style>
