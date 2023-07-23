<script>
    import { goto } from '$app/navigation'
</script>

<head>
    <title>SvelteKit Blog</title>
</head>

<body>
    <nav class="navbar">
        <button class="navbar__item" on:click={() => goto('/')}>
            <a href="/">Home</a>
        </button>
        <button class="navbar__item" on:click={() => goto('/register')}>
            <a href="/register">Register</a>
        </button>
    </nav>
    <main class="main">
        <slot />
    </main>
</body>

<style lang="scss">
    .navbar {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        background-color: #191622;
        padding: .5rem;
    }

    .navbar__item {
        padding: .5rem;
        border: 1px solid #fff;
        border-radius: 5px;
        transition: all .2s ease-in-out;
        background-color: #191622;
        cursor: pointer;

        a {
            text-decoration: none;
            color: #fff;
        }
    }

    .navbar__item:hover {
        background-color: #09070d;
        color: #191622;
        box-shadow: 0 0 10px 0 rgba(187, 187, 187, 0.2);
    }

    .main {
        padding: 1rem;
        min-height: 100vh;
        box-sizing: border-box;
    }

    :global(body) {
        background-color: #242424;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        color: #fefefe;
    }
</style>