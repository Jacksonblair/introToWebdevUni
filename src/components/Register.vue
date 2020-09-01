<template>
    <div :style="{paddingTop: '50px'}">
        <div class="formContainer">
            <div class="formHeader">Register</div>
            <form>
                <div class="inputblock">
                    <label class="label" for="fname">First name</label>
                    <input :class="[registrationPending ? 'input disabledInput' : 'input']" 
                    v-model="fname" autocomplete="given-name" type="text" placeholder="first name" name="fname">
                    <div class="warning" v-if="!fnameValid">Invalid input</div>
                </div>
                <div class="inputblock">
                    <label class="label" for="lname">Last name</label>
                    <input :class="[registrationPending ? 'input disabledInput' : 'input']"  
                    v-model="lname" autocomplete="family-name" type="text" placeholder="last name" name="lname">
                    <div class="warning" v-if="!lnameValid">Invalid input</div>
                </div>
                <div class="inputblock">
                    <label class="label" for="email">E-mail</label>
                    <input :class="[registrationPending ? 'input disabledInput' : 'input']"  
                    v-model="email" autocomplete="email" type="text" placeholder="email" name="email">
                    <div class="warning" v-if="!emailValid">E-mail is not valid</div>
                </div>              
                <div class="inputblock">
                    <label class="label" for="email">Date of Birth</label>
                    <input :class="[registrationPending ?  'input dob disabledInput' : 'input dob']"   
                    v-model="day" autocomplete="bday-day" placeholder="DD" class="input dob" type="text" name="day">
                    <input :class="[registrationPending ?  'input dob disabledInput' : 'input dob']" 
                    v-model="month" autocomplete="bday-month" placeholder="MM" type="text" name="month">
                    <input :class="[registrationPending ?  'input dob disabledInput' : 'input dob']"  
                    v-model="year" autocomplete="bday-year" placeholder="YYYY" type="text" name="year">
                    <div class="warning" v-if="!dateValid">Date is invalid</div>
                </div>
                <div class="inputblock">
                    <label class="label" for="password">Password</label>
                    <input :class="[registrationPending ?  'input disabledInput' : 'input']"   
                    v-model="password" autocomplete="new-password" type="password" placeholder="password" name="password">
                </div>
                <div class="inputblock">
                    <label class="label" for="rpassword">Re-enter Password</label>
                    <input :class="[registrationPending ?  'input disabledInput' : 'input']"   
                    v-model="repeatedPassword" autocomplete="new-password" type="password" placeholder="password" name="rpassword">
                    <div class="warning" v-if="!passwordValid">Password is not long enough.</div>
                    <div class="warning" v-if="!passwordsMatch">Passwords do not match.</div>
                </div>
 
                <div v-if="error" class="formError">
                    {{error}}
                </div>
                <div v-if="registrationPending">
                    Registering...
                </div>
                <div v-else-if="canLogin">
                    <p>
                        Success!
                        <router-link to="/login"> Log in! </router-link>
                    </p>
                </div>
                <div v-else-if="!registrationPending && !error" class="inputblock">
                    <button type="button" @click="submitFormHandler()"> SUBMIT </button>
                </div>

            </form>             
            <p v-if="!registrationPending && !canLogin">
                Already registered?
                <router-link to="/login"> Log in! </router-link>
            </p>

        </div>
    </div>
</template>


<script type="text/javascript">
    
    export default {
        data() {
            return {
                password: '',
                repeatedPassword: '',
                passwordsMatch: true,
                passwordValid: true,
                email: '',
                emailValid: true,
                fname: '',
                lname: '',
                fnameValid: true,
                lnameValid: true,
                day: null,
                month: null,
                year: null,
                dateValid: true,    

                registrationPending: false,
                canLogin: false,
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

                // check fname
                if (/^[A-Za-z\s]+$/.test(this.fname)) {
                    this.fnameValid = true;
                } else {
                    this.fnameValid = false;
                }

                // check lname
                if (/^[A-Za-z\s]+$/.test(this.lname)) {
                    this.lnameValid = true;
                } else {
                    this.lnameValid = false;
                }

                // check day/month/year 
                if (this.day && this.month && this.year) {
                    if (this.isValidDate(this.day.concat('/', this.month, '/', this.year))) {
                        this.dateValid = true;
                    } else {
                        this.dateValid = false;
                    }
                } else {
                    this.dateValid = false;
                }

                if ((this.password == this.repeatedPassword)) {
                    this.passwordsMatch = true;
                } else {
                    this.passwordsMatch = false;
                }

                if ((this.password.length <= 5)) {
                    this.passwordValid = false;
                } else {
                    this.passwordValid = true;
                }

                if (this.emailValid && this.fnameValid && this.lnameValid && this.dateValid)
                {
                    // everything is valid, do something
                    console.log("EVERYTHING IS VALID")

                    const { password, repeatedPassword, email, fname, lname, day, month, year } = this 

                    this.registrationPending = true;

                    this.$store.dispatch('registerRequest', { password, repeatedPassword, email, fname, lname, day, month, year })
                    .then((resp) => {
                        if (resp.data.error) {
                            this.error = resp.data.error
                            this.registrationPending = false
                        } else if (resp.data.success) {
                            console.log('Now can login')
                            this.registrationPending = false
                            this.canLogin = true                            
                        }
                    }, (err) => {
                        // promise rejected, do something.
                        console.log(err)
                    })

                }
            },
            // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
            /*https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript*/
            isValidDate(dateString) {
                // First check for the pattern
                if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
                    return false;

                // Parse the date parts to integers
                var parts = dateString.split("/");
                var month = parseInt(parts[1], 10);
                var day = parseInt(parts[0], 10);
                var year = parseInt(parts[2], 10);

                // Check the ranges of month and year
                if(year < 1000 || year > 3000 || month == 0 || month > 12)
                    return false;

                var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

                // Adjust for leap years
                if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                    monthLength[1] = 29;

                // Check the range of the day
                return day > 0 && day <= monthLength[month - 1];
            }


        }

    } 

</script>