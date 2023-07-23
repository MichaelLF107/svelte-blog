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

    function verifyFormComplete() {
        if (form.name !== '' && form.email !== '' && form.password !== '' && form.confirmPassword !== '') {
            enabled = true
        } else {
            enabled = false
        }
    }
</script>

<Layout>
    <div class="form-container">
        <form>
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
                on:change={verifyFormComplete}
            />
            <input
                class="input"
                type="password"
                placeholder="Confirm Password"
                bind:value={form.confirmPassword}
                on:change={verifyFormComplete}
            />
        </form>
        <Button variant={'outlined'} disabled={!enabled}>Register</Button>
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
</style>