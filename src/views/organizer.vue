<template>
  <v-main>
    <v-container fluid class="mb-5">
      <v-row
        justify="center"
        align="center"
        class=""
        style="border-bottom:1px solid #e0e0e0"
      >
        <v-col md="10" lg="10" sm="11" cols="12" class="my-md-12 px-4">
          <p
            class="google-font mb-0 grey--text text--darken-2"
            style="
                    font-size:1.9em;
                    font-weight: 500;
                  "
          >
            Organizer Badge
          </p>
          <p class="google-font" style="font-size:120%">
            Generate your #IWDIndia Badge
          </p>
        </v-col>
      </v-row>
      <v-row
        v-if="passcodeStatus"
        justify="start"
        align="start"
        class="pa-0 my-0 mb-md-15 my-md-15"
      >
        <v-col md="4" offset-md="1">
          <v-text-field
            label="Enter Passcode"
            placeholder="Enter Passcode for Organizer"
            outlined
            v-model="passcode"
            :counter="6"
            :rules="nameRules"
          ></v-text-field>
          <v-btn large color="primary" v-on:click="checkOrg">Next</v-btn>
        </v-col>
      </v-row>
      <v-row
        v-show="passcodeStatus == false"
        justify="center"
        align="center"
        class="pa-0 my-0 mb-md-15"
      >
        <v-col md="10" lg="10" sm="11" cols="12" class="pa-0 ma-0">
          <v-container fluid class="pa-0 ma-0">
            <v-row class="ma-0 pa-0">
              <v-col md="3" cols="12" class="order-md-1 order-2 pt-md-10 px-7">
                <div class="input">
                  <label class="google-font" style="font-size:120%"
                    >Profile Picture</label
                  >
                  <v-btn
                    class="primary google-font"
                    depressed
                    large
                    @click="uploadImage()"
                    style="text-transform: capitalize;"
                  >
                    Upload Image
                  </v-btn>
                  <input
                    class="profile-input"
                    type="file"
                    accept="image/*"
                    @change="upload"
                    hidden
                  />
                </div>
                <div class="input">
                  <label class="google-font" style="font-size:120%"
                    >Image Shape</label
                  >
                  <div class="select-container">
                    <div
                      class="select google-font"
                      id="original"
                      selected
                      @click="changeShape('original')"
                    >
                      Original
                    </div>
                    <div
                      class="select google-font"
                      id="square"
                      @click="changeShape('square')"
                    >
                      Square
                    </div>
                    <div
                      class="select google-font"
                      id="circle"
                      @click="changeShape('circle')"
                    >
                      Circle
                    </div>
                  </div>
                </div>
                <p>
                  <span
                    ><span style="color:red;">*</span>&nbsp; We respect your
                    privacy and are not storing your pictures on our
                    servers.</span
                  >
                </p>
              </v-col>
              <v-col
                class="text-center grey lighten-4 py-md-10 py-5 order-md-2 order-1"
                style=""
                md="9"
                cols="12"
              >
                <canvas class=""></canvas>
                <br /><br />
                <!--v-if="downloadbtn"  -->
                <v-btn
                  class="pb-0 mb-0"
                  color="red"
                  dark
                  id="download"
                  @click="download()"
                  ><v-icon left>mdi-arrow-down-bold-circle-outline</v-icon
                  >Download</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import gdgImage from "@/assets/img/badge.png";
export default {
  name: "badge",
  data: () => ({
    passcode: "",
    passcodeStatus: true,
    downloadbtn: false,
    canvas: null,
    shape: "original",
    image: "",
    ctx: null,
    banner: null,
    nameRules: [(v) => v.length <= 6 || "Name must be less than 7 characters"],
  }),
  methods: {
    checkOrg() {
      if (this.passcode === "SBGH12") {
        this.passcodeStatus = false;
      }
    },
    upload(e) {
      if (e && e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            this.image = img;
            this.draw();
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    uploadImage() {
      document.querySelector("input.profile-input").click();
      this.downloadbtn = true;
      document.getElementById("download").style.visibility = "visible";
    },

    changeShape(type) {
      const original = document.querySelector(
        ".select-container .select#original"
      );
      const square = document.querySelector(".select-container .select#square");
      const circle = document.querySelector(".select-container .select#circle");
      this.shape = type;
      switch (type) {
        case "original": {
          original.setAttribute("selected", "");
          square.removeAttribute("selected");
          circle.removeAttribute("selected");
          break;
        }
        case "square": {
          square.setAttribute("selected", "");
          original.removeAttribute("selected");
          circle.removeAttribute("selected");
          break;
        }
        case "circle": {
          circle.setAttribute("selected", "");
          original.removeAttribute("selected");
          square.removeAttribute("selected");
          break;
        }
      }
      this.draw();
    },

    draw() {
      if (this.image) {
        switch (this.shape) {
          case "original": {
            this.canvas.width = this.image.width;
            this.canvas.height = this.image.height;
            this.ctx.drawImage(this.image, 0, 0);
            break;
          }
          default: {
            this.canvas.width = 500;
            this.canvas.height = 500;
            const hRatio = this.canvas.width / this.image.width;
            const vRatio = this.canvas.height / this.image.height;
            const ratio = Math.max(hRatio, vRatio);
            const x = (this.canvas.width - this.image.width * ratio) / 2;
            const y = (this.canvas.height - this.image.height * ratio) / 2;
            this.ctx.drawImage(
              this.image,
              0,
              0,
              this.image.width,
              this.image.height,
              x,
              y,
              this.image.width * ratio,
              this.image.height * ratio
            );
            break;
          }
        }
      } else {
        this.ctx.canvas.width = 500;
        this.ctx.canvas.height = 500;
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }

      const height =
        (this.banner.height / this.banner.width) * this.canvas.width;
      const y = this.canvas.height - height;
      const fontSize = this.canvas.width / 17.2;
      this.ctx.drawImage(
        this.banner,
        0,
        0,
        this.banner.width,
        this.banner.height,
        0,
        y,
        this.canvas.width,
        height
      );

      this.ctx.fillStyle = "#757575";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.font = `${fontSize}px Google Sans, sans-serif`;
      // ctx.fillText(category, canvas.width / 2, fontY)

      if (this.shape === "circle") {
        this.ctx.globalCompositeOperation = "destination-in";
        this.ctx.beginPath();
        this.ctx.arc(
          this.canvas.width / 2,
          this.canvas.height / 2,
          this.canvas.height / 2,
          0,
          Math.PI * 2
        );
        this.ctx.closePath();
        this.ctx.fill();
      }
    },

    download() {
      const a = document.createElement("a");
      const url = this.canvas.toDataURL("image/png;base64");
      a.download = "#IWDIndia2021_badge.png";
      a.href = url;

      a.click();
    },
  },
  mounted() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.image = "";
    this.shape = "original";
    this.downloadbtn = false;
    document.getElementById("download").style.visibility = "hidden";
    this.banner = new Image();
    this.banner.src = gdgImage;
    // console.log(this.banner);
    this.banner.onload = () => {
      this.draw();
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  --shadow-elevation-1: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  --shadow-elevation-2: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  --button-color: #2b81d6;
  --button-color-hover: #2b81d6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.whole {
  background: #e0e0e0;
  margin: 0;
  font-family: "Google Sans", sans-serif;
  display: flex;
  flex-direction: column;
  color: #4a4a4a;
  /* min-height: 100vh; */
}

header {
  background-color: white;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1;
}

.main-container {
  display: flex;
  flex: 1;
}

.input-panel {
  padding: 24px;
  width: 40%;
  max-width: 420px;
  background-color: #f5f5f5;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.input {
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input:last-child {
  margin-bottom: 0;
}

.input label {
  font-size: 13px;
  margin-bottom: 8px;
  font-weight: 500;
}

.button {
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px 12px;
  box-shadow: var(--shadow-elevation-1);
  background-color: var(--button-color);
  cursor: pointer;
  border: none;
  transition: box-shadow 100ms ease, background-color 100ms ease;
}

.button:hover {
  box-shadow: var(--shadow-elevation-2);
  background-color: var(--button-color-hover);
}

input.category-input {
  font-size: 15px;
  padding: 8px;
  background: #fff;
  border: 1px solid #cacaca;
  border-radius: 4px;
  width: 100%;
  max-width: 360px;
}

input.category-input:focus {
  outline: none;
  border-color: #8e8e8e;
}

.select-container {
  display: flex;
  border-radius: 4px;
  border: 1px solid #cacaca;
  overflow: hidden;
}

.select-container .select {
  background-color: #fff;
  padding: 6px 12px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 100ms ease;
}

.select-container .select:not(:last-child) {
  border-right: 1px solid #cacaca;
}

.select-container .select[selected] {
  color: #fff;
  background-color: var(--button-color);
}

.preview-panel {
  padding: 36px 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

canvas {
  width: 500px;
  max-width: 80%;
}

.download-fab {
  cursor: pointer;
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: #2b81d6;
  box-shadow: var(--shadow-elevation-1);
  transition: background-color 100ms ease, box-shadow 100ms ease;
}

.download-fab:hover {
  background-color: #2b81d6;
  box-shadow: var(--shadow-elevation-2);
}

/* .input-link {
      padding-top: 40px;
    } */

.header-flex-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}

.header-flex-wrapper .badge-list {
  list-style: none;
  padding-left: 0;
}

.header-flex-wrapper .badge-list li {
  display: inline-block;
}

.header-flex-wrapper .badge-list li:first-child {
  margin-right: 10px;
}

.blue-btn {
  background-color: #2b81d6;
  border-color: #2b81d6;
  text-transform: capitalize;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 20px;
  box-shadow: 0px 3px 5px #f2f2f2;
}

.border-btn {
  text-transform: capitalize;
  border-radius: 5px;
  border: 1px solid rgb(224, 224, 224);
  color: #2b81d6;
  background-color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 20px;
}

.border-btn:hover {
  background-color: #f5f5f5;
}

@media screen and (max-width: 860px) {
  header {
    height: auto;
    font-size: 20px;
  }
  .main-container {
    flex-direction: column;
  }
  .input-panel,
  .preview-panel {
    width: 100%;
    max-width: initial;
  }
  .preview-panel {
    padding: 24px 0 96px 0;
    flex: 1;
  }
  .input {
    margin-bottom: 24px;
  }
  .download-fab {
    width: 56px;
    height: 56px;
  }

  .header-flex-wrapper {
    display: block;
    padding: 15px 20px;
    text-align: center;
  }

  .title {
    padding-bottom: 5px;
  }
}
</style>
