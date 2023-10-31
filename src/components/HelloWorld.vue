<template>
  <div class="hello">
    <header>
      <div class="profile-picture">
        <img src="../assets/images/pig.jpeg" alt="이충재의 프로필 사진" />
      </div>
      <h2>이충재</h2>
    </header>
    <div class="description">
      <h4>프론트엔드 개발자</h4>
      <span>
        최신 웹 트렌드를 반영하기 위해<br />
        다양한 프론트엔드 뷰 프레임워크와 타입스크립트를 활용하며 사용자 중심의
        개발에 지향합니다.<br />
        만족도를 높이고 효율적인 개발과 사용자 경험 개선을 <br />
        추구합니다.
      </span>
    </div>
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
            <td style="text-align: left">
              • 하프클럽 보리보리 신규기능 개발<br />
              • 사이트 기능 유지보수 <br />
              • 데이터스토리 집계 결과 수집 <br />
              • 매출 코드 집계
            </td>
          </tr>
          <tr>
            <td>2021.09 - 2022.02</td>
            <td>KH<br />정보교육원</td>
            <td style="text-align: left">
              • 웹 개발자 양성과정 교육 이수 <br />
              - Java, Spring, Oracle, JavaScript, JSP, Tomcat
            </td>
          </tr>
          <tr>
            <td>2019.03 - 2021.08</td>
            <td>서울특별시사회복지<br />협의회</td>
            <td style="text-align: left">
              • 사이트 리뉴얼 의뢰<br />
              - 프레임워크 선정 및 ERP 구조 설계, 리뉴얼 사이트 구축 계획
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="portfolio">
      <h4>최근 프로젝트</h4>
      <div class="portfolio-box">
        <img src="../assets/images/back.webp" alt="포트폴리오 이미지" />
        <div class="overlay">
          <router-link to="/pacman" class="portfolio-link"
            >포트폴리오 보기</router-link
          >
        </div>
      </div>
      <div class="portfolio-box">
        <img src="../assets/images/back3.jpeg" alt="포트폴리오 이미지" />
        <div class="overlay">
          <router-link to="/pacman" class="portfolio-link"
            >포트폴리오 보기</router-link
          >
        </div>
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
.hello {
  color: white;
  max-width: 360px;
  margin: 0 auto;
  // border: 1px solid #655858;
  // border: 1px solid #ddd;
  padding: 10px;
  background-color: none;

  header {
    text-align: center;
    background-color: #000000;
    padding: 20px;
    border-radius: 10px;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .profile-picture {
    img {
      border-radius: 50%; /* 원 모양 이미지로 만들기 */
      max-width: 100px;
      height: auto;
    }
  }

  .description {
    margin-top: 20px;
    text-align: left;
    span {
      display: block;
    }
  }

  .experience h4 {
    text-align: left;
  }
  .experience table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table-layout: fixed;
  }

  .experience th,
  .experience td {
    font-size: 10pt;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    word-wrap: break-word;
  }

  .experience th {
    background-color: #327e5c;
    color: white;
  }

  .portfolio {
    margin-top: 20px;
    h4 {
      text-align: left;
    }
    .portfolio-box {
      border: 1px solid #655858;
      position: relative;
      img {
        max-width: 100%;
        height: auto;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        .portfolio-link {
          font-size: 16pt;
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
      }
      &:hover {
        .overlay {
          opacity: 1;
        }
      }
    }
  }
}
</style>
