<template>
  <div class="hello">
    <header class="profil">
      <div class="profile-picture">
        <img src="../assets/images/Photo.png" alt="이충재의 프로필 사진" />
      </div>
      <div class="description">
        <p style="color: #1465b6; font-size: 30px">이충재</p>
        <p>프론트엔드 개발자</p>
        <p style="font-size: 11pt">
          010-5696-1909 / knm8643@nate.com /
          <a href="https://github.com/knm8643"
            >github <i class="fa-brands fa-github"></i
          ></a>
          /
        </p>
        <span>
          최신 웹 트렌드를 반영하기 위해<br />
          다양한 프론트엔드 프레임워크와 타입스크립트를 활용하며 사용자 중심의
          개발에 지향합니다.<br />
          만족도를 높이고 효율적인 개발과 사용자 경험 개선을 <br />
          추구합니다.
        </span>
      </div>
    </header>
    <div class="experience">
      <h4>경력 및 교육</h4>
      <table>
        <thead>
          <tr>
            <th style="width: 20%">근무 기간</th>
            <th style="width: 20%">회사명</th>
            <th style="width: 60%">주요 업무 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022.04 - 2023.05</td>
            <td>LF<br />트라이씨클</td>
            <td style="text-align: left; padding: 20px">
              • 자사몰(하프클럽, 보리보리) 서비스 고도화 및 개선작업<br />
              • 쇼핑몰 서비스에서 구동되는 내부 api 및 웹개발 <br />
              • 커머스플랫폼 기반의 비즈니스 로직 구현 및 성능 최적화<br />
            </td>
          </tr>
          <tr>
            <td>2021.09 - 2022.02</td>
            <td>KH<br />정보교육원</td>
            <td style="text-align: left; padding: 20px">
              • 웹 개발자 양성과정 교육 이수 <br />
              • Java, Spring, Oracle, JavaScript, JSP, Tomcat
            </td>
          </tr>
          <tr>
            <td>2019.03 - 2021.08</td>
            <td>서울특별시사회복지<br />협의회</td>
            <td style="text-align: left; padding: 20px">
              • 사이트 리뉴얼 의뢰<br />
              • 프레임워크 선정 및 ERP 구조 설계, 리뉴얼 사이트 구축 계획
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="description02">
      <h4>Stack</h4>
      <div class="tech_text">
        <div id="techList">
          <div>
            <h5>
              <i class="fa-brands fa-java"></i> Java, Spring, and SpringBoot
            </h5>
            <p>
              다양한 프로젝트 경험으로 안정적이고 확장성 있는 애플리케이션을
              개발할 수 있습니다.
            </p>
            <br />

            <h5>
              <i class="fa-brands fa-js"></i> JSP, JavaScript, Vue3, TypeScript
            </h5>
            <p>
              동적이고 사용자 친화적인 프론트엔드를 개발하는 것에 강점이
              있습니다. 사용자 중심의 경험(UX)을 고려한 개발을 지향합니다.
            </p>
            <br />

            <h5><i class="fa-brands fa-angular"></i> AngularJs</h5>
            <p>
              모듈화와 컴포넌트 기반의 설계에 익숙하여 복잡한 웹 애플리케이션을
              개발할 수 있습니다.
            </p>
            <br />

            <h5>
              <font-awesome-icon icon="database" /> Oracle, MySQL, Dbeaver
            </h5>
            <p>
              데이터베이스를 효율적으로 설계하고 관리할 수 있으며, 성능 최적화
              및 쿼리 튜닝에 경험이 있습니다.
            </p>
            <br />

            <h5><i class="fa-brands fa-github"></i> GitHub, GitLab</h5>
            <p>
              협업 및 버전 관리를 효율적으로 수행할 수 있습니다. 오픈 소스
              프로젝트에 참여한 경험이 있어, 다양한 개발자들과의 협업에
              능숙합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <h4>Projects</h4>
      <div class="probox">
        <router-link to="/pacman" class="portfolio-link">
          <div class="portfolio-box">
            <img src="../assets/images/back.webp" alt="포트폴리오 이미지" />
            <div class="overlay">포트폴리오 보기</div>
          </div>
        </router-link>
        <router-link to="/anyThingPage" class="portfolio-link">
          <div class="portfolio-box">
            <img src="../assets/images/tetris.avif" alt="포트폴리오 이미지" />
            <div class="overlay">포트폴리오 보기</div>
          </div>
        </router-link>
        <router-link to="/" class="portfolio-link">
          <div class="portfolio-box">
            <img src="../assets/images/img-ready.png" alt="포트폴리오 이미지" />
            <div class="overlay">포트폴리오 보기</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  mounted() {
    document.body.style.overflow = "visible";
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "TheJamsil5Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}

.profil {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 7%;
  font-family: "TheJamsil5Bold", sans-serif;
  border-top: 1px solid #eee;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  font-size: 20px;
  .profile-picture {
    width: 200px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    text-align: left;
    // cursor: pointer;
    color: #083058;
    padding: 50px;
    span {
      line-height: 0.5em;
      vertical-align: 0.5em;
      &:hover {
        border-bottom: 0.4em solid transparent;
        -moz-border-image: -moz-linear-gradient(left, #a8dbed 0%, #e291e6 100%);
        -webkit-border-image: -webkit-linear-gradient(
          left,
          #a8dbed 0%,
          #e291e652 100%
        );
        border-image: linear-gradient(to right, #a8dbed 0%, #e291e652 100%);
        border-image-slice: 1;
      }
    }
  }
}
.experience {
  font-family: "TheJamsil5Bold";
  color: #083058;
  border-bottom: 1px solid #eee;
  padding: 50px 0;
  font-size: 20px;
  h4 {
    border-bottom: 3px solid #083058;
    padding-bottom: 10px;
    text-align: left;
    font-size: 30px;
    width: 160px;
  }
  table {
    width: 100%;
    thead {
      background: #083058;
      color: #fff;
      line-height: 2;
    }
    tbody {
      background: #eee;
      line-height: 2.5;
      font-size: 17px;
    }
  }
}
.description02 {
  font-family: "TheJamsil5Bold";
  color: #083058;
  border-bottom: 1px solid #eee;
  padding: 50px 0;
  font-size: 20px;
  h4 {
    border-bottom: 3px solid #083058;
    padding-bottom: 10px;
    text-align: left;
    font-size: 30px;
    width: 85px;
  }
  .tech_text {
    // line-height: 2;
    padding: 20px;
    background: #eee;
    .techList {
      letter-spacing: 2px;
    }
  }
}
.portfolio {
  font-family: "TheJamsil5Bold";
  color: #083058;
  border-bottom: 1px solid #eee;
  padding: 50px 0;
  font-size: 20px;
  h4 {
    border-bottom: 3px solid #083058;
    padding-bottom: 10px;
    text-align: left;
    font-size: 30px;
    width: 123px;
  }
  .probox {
    background: #eee;
    display: grid;
    justify-content: center;
    padding: 35px;
    a {
      display: inline-block;
      padding: 15px;
      margin-bottom: 20px;
      background: #fff;
      text-decoration: none;
      color: #083058;
      &:hover {
        box-shadow: 0 0px 5px #a5c1dc, 0 6px 16px #c1d6eb;
        background: #eee;
      }
      .portfolio-box {
        width: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
