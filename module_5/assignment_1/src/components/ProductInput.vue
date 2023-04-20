<script>

export default {
    emits: ["message"],
    data() {
        return {
            message: "hello"
        }
    },
    methods: {
        emitData() {
            let message = this.message
            this.$emit('message', message)
        }
    }
}
</script>

<template>
    <input type="text" v-model="message" /><br>
    <button @click="emitData">Emit Data</button>
</template>