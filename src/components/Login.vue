<template>
    <div :style="{paddingTop: '50px'}">
        <div class="formContainer">
            <div class="formHeader">Login</div>
            <form>
                <div class="inputblock">
                    <label class="label" for="email">E-mail</label>
                    <input :class="[loginPending ? ['input', 'disabledInput'] : 'input']" 
                    autocomplete="email" v-model="email" type="text" placeholder="email" name="email" :disabled="loginPending">
                    <div class="warning" v-if="!emailValid">E-mail is not valid</div>
                </div>              
                <div class="inputblock">
                    <label class="label" for="password">Password</label>
                    <input :class="[loginPending ? ['input', 'disabledInput'] : 'input']" 
                    autocomplete="current-password" v-model="password" type="password" placeholder="password" name="password">
                </div>
                <div class="inputblock">
                    <button type="button" @click="submitFormHandler()"> LOG IN </button>
                </div>
                <div v-if="error" class="formError">
                    {{error}}
                </div>
                <div v-if="loginPending && !error">
                    Logging in...
                </div>
            </form> 
            <p>
                Not signed up? 
                <router-link to="/register"> register! </router-link>
            </p>
        </div>
    </div>
</template>

<!-- Styles are for Login AND Register components -->
<!-- 
    


-->

<script type="text/javascript">
    
    export default {
        data() {
            return {
                password: '',
                email: '',
                emailValid: true,

                loginPending: false,
                error: ''
            }
        },
        methods: {
            submitFormHandler() {
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                    this.emailValid = true;
                } else {
                    this.emailValid = false;
                }

                if (this.emailValid) {
                    // email is valid, so send dispatch.
                    const { password, email } = this 

                    this.loginPending = true
                    this.$store.dispatch('authRequest', { password, email })
                    .then((resp) => {

                        setTimeout(() => {
                            if (resp.data.error) {
                                this.error = resp.data.error
                                this.loginPending = false
                            } else if (resp.data.success) {
                                this.loginPending = false
                                // do something
                            }
                        }, 2000)


                    }, (err) => {
                        // promise rejected, do something.
                        console.log(err)
                    })

                    /* If the Promise rejects, the second function in your first .then() 
                    will get called with the rejected value, and whatever value it 
                    returns will become a new resolved Promise which passes into the 
                    first function of your second then.*/

                    /* This sends a login request to server and returns the user details,
                    which it stores in localStorage. If the user authentication succeeds,
                    then this.$store.status == 'success'. The token will be sent with each
                    axios request, stored in the interceptor*/

                }
            }
        }

    } 

</script>

<style type="text/css">

    .formHeader {
        text-align: center;
        font-size: 25px;
    }

    .inputblock {
        text-align: center;
        margin: 20px 0px;
    }

    .inputblock .warning {
        color: red;
        margin: 5px;
    }

    .inputblock .disabledInput {
        pointer-events: none;
        opacity: 0.6;
    }

    .inputblock .input {
        margin: 5px 5px 0px 5px;
        border-radius: 5px;
        border: 1px solid grey;
        padding: 5px;        
    }

    .inputblock .input:disabled {
        color: grey;
    }

    .inputblock .label {
        display: block;        
    }

    .inputblock .dob {
        width: 50px;        
    }

    .formContainer {
        width: 40%;
        background: whitesmoke;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid lightgrey;
        box-shadow: 4px 4px #e7e7e7;
        margin: 50px auto;
    }

    .formError {
        color: red;
        border: 1px solid red;
        border-radius: 10px;
        padding: 8px;
        background: #ffeaea;
    }

</style>