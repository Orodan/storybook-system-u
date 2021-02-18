<template>
    <button :class="[color, size]" :disabled="disabled">Button</button>
</template>

<script>
export default {
    name: 'zenbox-button',
    props: {
        color: {
            type: String,
            default: 'primary',
            validator: value => ['primary', 'secondary'].includes(value)
        },
        size: {
            type: String,
            default: 'large',
            validator: value => ['small', 'large'].includes(value)
        },
        disabled: Boolean
    }
}
</script>

<style scoped>
    button {
        color: #FFFFFF;
        border: none;
        border-radius: 38px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        outline: none;
    }

    button:disabled {
        color: #706F6F;
    }

    .large {
        padding: 10px;
    }

    .small {
        padding: 5px 10px;
    }

    .primary {
        background-color: #FF4785;
    }

    .primary:hover {
        background-color: #B2335E;
    }

    .primary:focus {
        background-color: #6F1D38;
    }

    .primary:disabled {
        background-color: rgba(255,71,133,.1);
    }

    .secondary {
        background-color: #1EA7FD;
    }

    .secondary:hover {
        background-color: #116396;
    }

    .secondary:focus {
        background-color: #0C3B58;
    }

    .secondary:disabled {
        background-color: rgba(30,167,253,.1);
    }
</style>