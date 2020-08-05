<template>
    <div>
        <h1>Login Screen</h1>
        <div class="formcontainer">
            <form>
                <div class="inputblock">
                    <label class="label" for="email">E-mail</label>
                    <input class="input" autocomplete="email" v-model="email" type="text" placeholder="email" name="email">
                    <div class="warning" v-if="!emailValid">E-mail is not valid</div>
                </div>              
                <div class="inputblock">
                    <label class="label" for="password">Password</label>
                    <input class="input" autocomplete="current-password" v-model="password" type="password" placeholder="password" name="password">
                </div>
                <div class="inputblock">
                    <button type="button" @click="submitFormHandler()"> LOG IN </button>
                </div>
            </form> 
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
                emailValid: true
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
                    // email is valid, do login stuff here.
                }
            }
        }

    } 

</script>

<style type="text/css">

    .inputblock {
        text-align: center;
        margin: 20px 0px;
    }

    .inputblock .warning {
        color: red;
        margin: 5px;
    }

    .inputblock .input {
        margin: 5px 5px 0px 5px;
        border-radius: 5px;
        border: 1px solid grey;
        padding: 5px;        
    }

    .inputblock .label {
        display: block;        
    }

    .inputblock .dob {
        width: 50px;        
    }

    .formcontainer {
        width: 40%;
        margin: auto;
        background: whitesmoke;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid lightgrey;
        box-shadow: 4px 4px #e7e7e7;
    }

</style>