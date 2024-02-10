<template>
  <div id="contents">
    <div id="image">
      <img src="../assets/images/agumon.png" />
    </div>
    <div id="dday">
      <h1>뭐긴 뭐야 수능이지</h1>
      <h1>꿈 아니야</h1>
      <h1><div id="d-day">277:12:12:05.919</div></h1>
    </div>
  </div>
  <div id="audio">
    <!--    <iframe src="silence.mp3" allow="autoplay" id="a" style="display:none"></iframe>-->
    <audio ref="audioPlayer" controls loop hidden>
      <source src="../assets/music/exciting.mp3" type="audio/mpeg" />
      <!--      <source src="HelloDigimon.mp3" type="audio/mpeg" />-->
    </audio>
  </div>
</template>

<script>
export default {
  name: "cloneCode",
  mounted() {
    this.$refs.audioPlayer.volume = 0.08;
    const audioPlayer = this.$refs.audioPlayer;
    audioPlayer.play();

    function pad(n, width) {
      n = n + "";
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join("0") + n;
    }

    let ddays = [
      new Date("Nov 15, 2018 00:00:00"),
      new Date("Nov 14, 2019 00:00:00"),
      new Date("Dec 3, 2020 00:00:00"),
      new Date("Nov 18, 2021 00:00:00"),
      new Date("Nov 17, 2022 00:00:00"),
      new Date("Nov 16, 2023 00:00:00"),
      new Date("Nov 14, 2024 00:00:00"),
      new Date("Nov 13, 2025 00:00:00"),
    ].map((dday) => dday.getTime());

    let now = new Date().getTime();

    let countDownDate;
    for (var i = 0; i < ddays.length; i++) {
      if (now < ddays[i] + 86400000) {
        countDownDate = ddays[i];
        break;
      }
    }
    console.log(countDownDate);
    console.log(now);
    let distance = countDownDate - now;
    console.log(distance);

    setInterval(function () {
      // 오늘 날짜 등록
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let d = Math.floor(distance / (1000 * 60 * 60 * 24));
      let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((distance % (1000 * 60)) / 1000);
      let ms = Math.floor(distance % 1000);

      if (location.href.includes("/clone")) {
        if (distance > 0) {
          document.getElementById("d-day").innerHTML =
            "" +
            pad(d, 3) +
            ":" +
            pad(h, 2) +
            ":" +
            pad(m, 2) +
            ":" +
            pad(s, 2) +
            "." +
            pad(ms, 3) +
            "";
        } else {
          document.getElementById("d-day").innerHTML =
            "D-DAY<br>" +
            pad(0, 3) +
            ":" +
            pad(0, 2) +
            ":" +
            pad(0, 2) +
            ":" +
            pad(0, 2) +
            "." +
            pad(0, 3) +
            "<br>뭐긴 뭐야 수능대박이지";
        }
      }
    }, 25);
  },
};
</script>

<style lang="scss" scoped>
body {
  position: fixed;
  width: 100%;
  height: 100%;
  font-family: "NanumSquare", sans-serif;
}

div {
  float: left;
}

img {
  margin: 20px;
  width: 170px;
}

#audio {
  position: absolute;
  top: 20px;
  left: 87%;
}

H1 {
  font-size: 24pt;
  font-weight: 800;
  letter-spacing: 0.1em;
}
</style>
