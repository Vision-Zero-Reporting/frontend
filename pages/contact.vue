<template>
    <article>
        <h1 class='title is-2'>Contact us</h1>
        <h2 class="subtitle is-4">Get in touch</h2>
        <section class="content">
            <form name="contact" method="POST" netlify>
                <p>
                    <label>Full name:
                        <input type="text" name="name" class="input" />
                    </label>
                </p>
                <p>
                    <label>
                        Email address:
                        <input type="email" name="email" class="input" />
                    </label>
                </p>
                <p>
                    Pick the role that best describes you:<br/>
                    <label>
                        <input type="radio" name="role" value="journalist" />
                        Journalist / news publisher
                    </label><br/>
                    <label>
                        <input type="radio" name="role" value="researcher" />
                        Researcher
                    </label><br/>
                    <label>
                        <input type="radio" name="role" value="government" />
                        Government official
                    </label><br/>
                    <label>
                        <input type="radio" name="role" value="other" checked />
                        Individual
                    </label>
                </p>
                <p>
                    <label>
                        Message:
                        <textarea name="message" class="textarea"></textarea>
                    </label>
                </p>
                <p>
                    <button type="submit" class="button is-info is-pulled-right">Submit</button>
                </p>
                <div style="clear:both;"></div>
            </form>
        </section>
    </article>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
section {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
}
label > input[type="radio"] { margin-left: 15px; }
</style>