<script lang="ts">
    import Layout from "$lib/Layout.svelte";
    import Button from "$lib/Button.svelte";

    let form = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    let enabled = false

    let passwordError = false

    let success = false

    function verifyFormComplete() {
        if (form.name !== '' && form.email !== '' && form.password !== '' && form.confirmPassword !== '') {
            enabled = true
        } else {
            enabled = false
        }
    }

    function verifyPassword() {
        if(form.password !== '' && form.confirmPassword !== '') {
            if (form.password !== form.confirmPassword) {
                passwordError = true
            } else {
                passwordError = false
                verifyFormComplete()
            }
        }
    }

    async function handleRegister() {
        const response = await fetch('http://localhost:3333/new-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        
        if (response.ok) {
            success = true
            setTimeout(() => {
                success = false
            }, 3000)
        }
    }
</script>

<Layout>
    <div class="form-container">
        <form on:submit|preventDefault={handleRegister}>
            <input
                class="input"
                type="text"
                placeholder="Name"
                bind:value={form.name}
                on:change={verifyFormComplete}
            />
            <input
                class="input"
                type="email"
                placeholder="Email"
                bind:value={form.email}
                on:change={verifyFormComplete}
            />
            <input
                class="input"
                type="password"
                placeholder="Password"
                bind:value={form.password}
                on:change={verifyPassword}
            />
            <input
                class="input"
                type="password"
                placeholder="Confirm Password"
                bind:value={form.confirmPassword}
                on:change={verifyPassword}
            />
            <div class="form-bottom">
                <Button
                    variant={'outlined'}
                    disabled={!enabled}
                    onSubmit={handleRegister}
                >
                    Register
                </Button>
                {#if passwordError}
                    <p class="error">Passwords do not match</p>
                {/if}
                {#if success}
                    <p class="success">User created successfully!</p>
                {/if}
            </div>
        </form>
    </div>
</Layout>

<style lang="scss">
    .form-container {
        display: grid;
        place-items: center;
        padding: 1rem;
        background-color: rgb(19, 16, 26);
        border: 1px solid #fff;
        border-radius: 5px;
    }

    .input {
        width: 100%;
        padding: .5rem;
        margin-bottom: .5rem;
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: rgb(28, 24, 36);
        color: #fff;
    }

    .form-bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .error {
        color: rgb(221, 63, 63);
    }

    .success {
        color: rgb(17, 139, 97);
    }
</style>