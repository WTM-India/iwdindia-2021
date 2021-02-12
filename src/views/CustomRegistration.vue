<template>
  <v-main class>
    <Snackbar
      :message="snackBarMessage"
      :isShow.sync="isSnackBarVisible"
      :color="snackBarColor"
      :timeout="snackBarTimeOut"
    />

    <v-container fluid class="mt-4">
      <v-row justify="center" align="center">
        <v-col md="7" sm="8" lg="5" cols="12">
          <div style="padding:10px;" class="google-font">
            <p class="" style="font-size:2.0em;">
              <span style="color:#424242">{{maindata.eventname}} 2021</span> | 
              <span style="color:#4285f4">Registration</span>
            </p>
            <p style="font-size:1.1em">
              IWD India 2021 is a coming together of women in technology and allies from across the country to celebrate each other and to learn and gain inspiration from many exemplary women who had the courage to create despite the challenging times.
            
            </p>
            <p style="font-size:1.1em">
              These two days <b>March 20th & 21st, 2021</b> can be enjoyed in the comfort of your homes where we have inspirational speakers, discussions over chat and workshops to help you create amazing assets for yourself!
            </p>
          </div>

          <v-container fluid>
            <!-- Google Sign In -->
            <v-row>
              <v-col md="2" cols="2">
                <v-avatar color="#4285f4">
                  <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">Login with your Google Account</h3>
                <p
                  class="google-font"
                >Sign in and register to get your entry tickets of the Women Techmakers International Women's Day India Summit 2021.</p>

                <v-list-item v-if="userLoginIn" class="ml-0 pl-0">
                  <v-list-item-avatar size="65" style="border:1px solid #e0e0e0">
                    <v-img :src="user.photoURL? user.photoURL:'https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png'"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="google-font" v-html="user.displayName"></v-list-item-title>
                    <v-list-item-subtitle v-html="user.email"></v-list-item-subtitle>
                    <v-list-item-subtitle v-on:click="logout" style="color:#4285f4;cursor: pointer">
                      <u>Logout as a {{ user.email }}</u>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                
                
                <div v-if="showLoginBtn">
                  <v-btn
                    class="mt-2"
                    depressed
                    style="text-transform: capitalize"
                    v-on:click="signIn"
                    dark color="#4285f4"
                  >
                    <v-icon size="20px" left>mdi-google</v-icon>Sign In with Google
                  </v-btn>
                  <br><br><br>
                  <p class="google-font mb-2">No Google Account? Create an Account/ Sign in with Email.</p>
                  <EmailPass class="mt-0 ml-2"/>
                </div>
                <div v-if="!emailVerified">
                  <p>Kindly verify your email by clicking on the link sent to your email address. Also, do refresh this page post verification to move ahead with the registration.</p>
                </div>
              </v-col>
            </v-row>
            <!-- Google Sign In -->

            <!-- Form -->
            <v-row v-if="userForm && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#4285f4">
                  <v-icon dark>mdi-format-align-justify</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">Your details</h3>
                <p class="mb-10">Required fields are marked with an asterisk</p>
                <v-form ref="form">
                  <!-- Email Id -->
                  <p style="font-size:105%;color:black">
                    Email
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.email"
                    placeholder="Email"
                    outlined
                    disabled
                  ></v-text-field>

                  <!-- Full Name -->
                  <p style="font-size:105%;color:black">
                    Name
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.name"
                    placeholder="Name"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- City -->
                  <p style="font-size:105%;color:black">
                    City
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.city"
                    placeholder="City"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Country -->
                  <p style="font-size:105%;color:black">
                    Country
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.country"
                    placeholder="Country"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Organization -->
                  <p style="font-size:105%;color:black">
                    Company / Institute Name
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.org"
                    placeholder="Company / Institute Name"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Role -->
                  <p style="font-size:105%;color:black">
                    Role / Designation
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.role"
                    placeholder="Role / Designation"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Gender -->
                  <v-radio-group
                    :rules="[(v) => !!v || 'This field is required.']"
                    v-model="response.gender"
                    class="mb-3"
                  >
                    <div class="google-font mb-3" style="font-size:105%;color:black !important">
                      How would you like to identify yourself as?
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-show="response.gender === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio color="#4285f4" value="Male" v-slot:label>
                      <div>Male</div>
                    </v-radio>
                    <v-radio color="#4285f4" value="Female" v-slot:label>
                      <div>Female</div>
                    </v-radio>
                    <v-radio color="#4285f4" value="Prefer not to say" v-slot:label>
                      <div>Prefer not to say</div>
                    </v-radio>
                  </v-radio-group>
                  <!-- Gender -->

                  

                  <!-- Experience -->
                  <v-radio-group
                    v-model="response.experience"
                    :rules="[(v) => !!v || 'This field is required.']"
                    class="mb-5"
                  >
                    <div class="google-font mb-3" style="font-size:105%;color:black !important">
                      Years of experience
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="response.experience === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio color="#4285f4" value="0 - 2 years" v-slot:label>
                      <div>0 - 2 years</div>
                    </v-radio>
                    <v-radio color="#4285f4" value="2 - 5 years" v-slot:label>
                      <div>2 - 5 years</div>
                    </v-radio>
                    <v-radio color="#4285f4" value="5 - 10 years" v-slot:label>
                      <div>5 - 10 years</div>
                    </v-radio>
                    <v-radio color="#4285f4" value="10 - 20 years" v-slot:label>
                      <div>10 - 20 years</div>
                    </v-radio>
                    <v-radio color="#4285f4" value="21+ years" v-slot:label>
                      <div>21+ years</div>
                    </v-radio>
                  </v-radio-group>
                  <!-- Experience -->

                  <!-- GDG Program -->
                  <v-radio-group
                    v-model="response.isGDGian"
                    :rules="[(v) => !!v || 'This field is required.']"
                    class="mb-5"
                  >
                    <div class="google-font mb-3" style="font-size:105%;color:black !important">
                      Are you part of the GDG program?
                      <span style="color:#ff5252;">*</span>
                      <br>
                      <span style="font-size:80%">If not, find a <strong>Google Developers Group</strong> near you! Visit <a target="_blank" href="https://gdg.community.dev/">https://gdg.community.dev/</a></span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="response.isGDGian === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio color="#4285f4" value="Yes" v-slot:label>
                      <div>Yes</div>
                    </v-radio>
                    <v-radio color="#4285f4" value="No" v-slot:label>
                      <div>No</div>
                    </v-radio>
                  </v-radio-group>
                  <!-- Experience -->
                  

                  <!-- KnowAbout -->
                  <div class="google-font mt-5" style="font-size:105%;color:black">
                    How did you get to know about this event?
                    <span style="color:#ff5252;">*</span>
                    <br />
                    <span style="font-size:80%;color:black">Check all that apply</span>
                  </div>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#4285f4"
                    v-model="response.knowAbout"
                    label="Google Developer Groups (GDG)"
                    value="Google Developer Groups"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#4285f4"
                    v-model="response.knowAbout"
                    label="Developer Student Clubs (DSC)"
                    value="Developer Student Clubs"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    :rules="[rules.socialcheckboxbtn]"
                    hide-details="false"
                    color="#4285f4"
                    v-model="response.knowAbout"
                    label="Women Techmakers (WTM)"
                    value="Women Techmakers"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#4285f4"
                    v-model="response.knowAbout"
                    label="Through your company / Friends / Family"
                    value="Through your company / Friends / Family"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#4285f4"
                    v-model="response.knowAbout"
                    label="Twitter"
                    value="Twitter"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#4285f4"
                    v-model="response.knowAbout"
                    label="Facebook"
                    value="Facebook"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#4285f4"
                    v-model="response.knowAbout"
                    label="LinkedIn"
                    value="LinkedIn"
                  ></v-checkbox>

                  <!-- KnowAbout -->

                  <!-- Code -->
                  <p style="font-size:105%;color:black" class="mt-10">
                    If you have an event code, you can add it in here.
                  </p>
                  <v-text-field
                    v-model="response.code"
                    placeholder="Code"
                    outlined
                  ></v-text-field>
                  <!-- Code -->



                  <!-- Accepts TC -->
                  <v-checkbox
                    color="#4285f4"
                    v-model="istcChecked"
                    :rules="[v => !!v || 'You must agree to register!']"
                    label="By checking this box, i confirm that: "
                  ></v-checkbox>
                  <p
                    class="mt-3"
                  >I agree to let Women Techmakers IWD India Organizers use the information collected in this form to be used for my participation in "IWD India 2021 Event".</p>
                  <p>
                    I have read and agree to the
                    <router-link to="/tc" target="_blank">Participation Terms</router-link>, <router-link to="/coc" target="_blank">Code of conducts</router-link> & <a href="https://developers.google.com/community-guidelines" rel="noreferrer" target="_blank">Community Guidelines</a>
                  </p>
                  <!-- Accepts TC -->

                  <v-btn
                    depressed
                    dark
                    class="mt-3"
                    :loading="saveloading"
                    v-on:click="saveData"
                    color="#4285f4"
                  >Submit</v-btn>
                </v-form>
              </v-col>
            </v-row>
            <!-- Form -->

            <!-- Registration Success -->
            <v-row v-if="userSuccess && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#4285f4">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">
                  Thank you for registering for
                  <a
                    href="https://twitter.com/DevFestIndia"
                    rel="noreferrer"
                    target="_blank"
                    style="text-decoration:none;color:#4285f4"
                  >
                    <b>#IWDIndia2021</b>
                  </a>.
                </h3>
                <p class="google-font">
                  Thank you for registering for
                  <b>#IWDIndia2021</b> and giving
                  us the honour to host you at Women Techmakers IWD India Summit 2021.
                  <br />You will be receiving the confirmation mail soon from:
                  <span
                    style="color:red"
                  >no-reply@iwdindia.in</span>
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                  v-if="maindata.registrationData.facebookshare"
                  :href="maindata.registrationData.facebookshare"
                  target="_blank"
                  rel="noreferrer"
                  style="text-transform: capitalize;"
                  dark
                  depressed
                  color="#3b5998"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-facebook</v-icon>Share with your friends
                </v-btn>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <v-btn
                  outlined
                  color="#4285f4"
                  style="text-transform: capitalize;border-radius:5px;border-color:#e0e0e0"
                  class="google-font mt-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <v-icon size="20px" left>mdi-inbox</v-icon>Generate Profile Badge
                </v-btn> -->
              </v-col>
            </v-row>
            <!-- Registration Success -->

            <!-- Already Registerd -->
            <v-row v-if="userSubmitedAlready && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#4285f4">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">You have already submitted this form</h3>
                <p class="mb-5">
                  Thank you for registering for
                  <b>#IWDIndia2021</b> and giving us the
                  honour to host you at Women Techmakers IWD India Summit 2021.
                  <br />You might have received or will be receiving the confirmation mail soon from:
                  <br />
                  <span style="color:red">no-reply@iwdindia.in</span>
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                  v-if="maindata.registrationData.facebookshare"
                  :href="maindata.registrationData.facebookshare"
                  target="_blank"
                  rel="noreferrer"
                  style="text-transform: capitalize;"
                  dark
                  depressed
                  color="#3b5998"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-facebook</v-icon>Share with your friends
                </v-btn>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <v-btn
                  outlined
                  to="/badge"
                  rel="noreferrer"
                  color="#4285f4"
                  style="text-transform: capitalize;border-radius:5px;border-color:#e0e0e0"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-inbox</v-icon>Generate Profile Badge
                </v-btn> -->
              </v-col>
            </v-row>
            <!-- Already Registerd -->
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import maindata from '@/assets/data/main.json'
import FDK from "../config/firebase";
export default {
  name: "RegistrationPage",
  data: () => ({
    maindata: maindata,
    emailVerified: true,
    snackBarMessage: "",
    isSnackBarVisible: false,
    snackBarColor: "green",
    snackBarTimeOut: 5000,
    rules: {
      required: (value) => !!value || "This field is required.",
      radiobtn: (value) => {
        return value.length > 0 || "This field is required.";
      },
      checkboxbtn: (value) => {
        return value.length > 0 || "At least one item should be selected.";
      },
      socialcheckboxbtn: (value) => {
        return value.length > 0 || "At least one item should be selected.";
      }
    },
    istcChecked: false,
    showLoginBtn: true,
    userLoginIn: false,
    userForm: false,
    userSuccess: false,
    userSubmitedAlready: false,
    saveloading: false,
    user: {},
    response: {
      name: "",
      email: "",
      city: "",
      country: "",
      org: "",
      role: "",
      isGDGian:"",
      gender: "",
      code:"",
      experience: "",
      knowAbout: [],
    },
  }),
  components: {
    Snackbar: () => import(/* webpackChunkName: "Reg_Snackbar", webpackPreload: true */  "@/components/common/snackbar"),
    EmailPass: ()=> import(/* webpackChunkName: "Reg_EmailPassAuth", webpackPreload: true */  "@/components/registration/emailpass")
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      var self = this;
      FDK.auth.onAuthStateChanged(function (user) {
        if (user) {
          self.showLoginBtn = false;
          self.userLoginIn = true;
          self.user = user;
          self.response.email = user.email;
          self.response.name = user.displayName;
          if(user.emailVerified){
            FDK.firestore
            .collection("edata")
            .doc(user.uid)
            .get()
            .then((res) => {
              if (res.data()) {
                self.userForm = false;
                self.userSuccess = false;
                self.userSubmitedAlready = true;
              } else {
                self.userForm = true;
              }
            })
            .catch((e) => {
              console.log(e);
            });
          }else{
            user.sendEmailVerification().then((res)=>{
              self.emailVerified = false
            }).catch(e=>{
              console.log(e)
            })
          }
          
        }
      });
    },
    signIn() {
      var self = this;
      var provider = new FDK.firebase.auth.GoogleAuthProvider();
      FDK.firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          let user = result.user;
          self.userLoginIn = true;
          self.userForm = true;
          self.response.email = user.email;
          self.response.name = user.displayName;
          self.user = user;
          self.snackBarMessage = "Signed In with " + user.email;
          self.isSnackBarVisible = true;
        })
        .catch(function (error) {
        });
    },
    saveData() {
      if (this.$refs.form.validate()) {
        this.saveloading = true;
        FDK.firestore
          .collection("edata")
          .doc(this.user.uid)
          .set({
            name: this.response.name,
            email: this.response.email,
            image: this.user.photoURL? this.user.photoURL:'https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png',
            city: this.response.city.toUpperCase(),
            country: this.response.country.toUpperCase(),
            gender: this.response.gender,
            experience: this.response.experience,
            code: this.response.code.toUpperCase(),
            knowAbout: this.response.knowAbout,
            role: this.response.role,
            org: this.response.org,
            isGDGian: this.response.isGDGian,
            date: new Date(),
          })
          .then(() => {
            this.userSuccess = true;
            this.saveloading = false;
            this.userForm = false;
          })
          .catch((e) => {
            this.saveloading = false;
          });
      } else {
        alert("Please fill the required fields before submitting the form :)");
      }
    },
    logout() {
      var self = this;
      FDK.auth
        .signOut()
        .then(function () {
          self.userLoginIn = false;
          self.userForm = false;
          self.userSuccess = false;
          self.userSubmitedAlready = false;
          self.showLoginBtn = true;
          self.snackBarMessage = "Logged out from " + self.user.email;
          self.isSnackBarVisible = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>