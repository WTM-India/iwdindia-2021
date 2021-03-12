<template>
  <v-main class="ma-0">
    <v-container fluid class="mb-5">
      <v-row
          justify="center"
          align="center"
          class=""
          style="border-bottom:1px solid #e0e0e0"
      >
        <v-col md="10" lg="10" sm="11" cols="12" class="my-md-12">
          <h1
              class="google-font"
              style="
                    font-size:2.5em;
                    line-height: 1.22;
                    font-weight: 500;
                  "
          >
            Drawing with mousemove event
          </h1>
          <div id="canvas">
            <canvas id="myCanvas" width="560" height="360" @mousemove="draw" @mousedown="beginDrawing" @mouseup="stopDrawing" />
            <v-btn class="pb-0 mb-0" color="red" dark id="download" @click="download()"><v-icon left>mdi-arrow-down-bold-circle-outline</v-icon>Download</v-btn>

          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Canvas",
  data: () => ({
    canvas: null,
    x: 0,
    y: 0,
    isDrawing: false
  }),
  methods: {
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    draw(e) {
      if(this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },
    download() {
      const a = document.createElement("a");
      this.canvas =document.getElementById("myCanvas");
      const url = this.canvas.toDataURL("image/png;base64");
      a.download = "#IWDIndia2021_canvas.png";
      a.href = url;

      a.click();
    },
  },
  mounted() {
    let c = document.getElementById("myCanvas");
    this.canvas = c.getContext('2d');
  }
}


</script>

<style scoped>
#myCanvas {
  border: 1px solid grey;
}
</style>