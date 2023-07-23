<script lang="ts">
    export let variant: 'filled' | 'outlined' = 'filled'
    export let disabled: boolean = false
</script>

{#if variant === 'filled'}
    <button
        class="button button--filled"
        disabled={disabled}
    >
        <slot />
    </button>
{:else if variant === 'outlined'}
    <button
        class="button button--outlined"
        disabled={disabled}
    >
        <slot />
    </button>
{/if}

<style lang="scss">
    .button {
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .button--filled {
        background-color: rgb(17, 139, 97);
        color: white;
    }

    .button--filled:hover {
        background-color: rgb(17, 139, 97, 0.6);
    }

    .button--outlined {
        background-color: transparent;
        border: 1px solid rgb(17, 139, 97);
        color: rgb(17, 139, 97);
    }

    .button--outlined:hover {
        background-color: rgb(17, 139, 97, 0.1);
    }
</style>