<template>
  <div class="hello">
    <header class="profil">
      <!-- 피시전용 -->
      <article v-if="isMobile" class="description">
        <section>
          <h1>
            안녕하세요<br />
            개발자 이충재입니다<em>.</em>
          </h1>
        </section>
        <div>
          <p>
            저는 이커머스 웹 개발 경험을 통해<br />
            다양한 프론트 프레임워크를 활용한 빠른 프로토타이핑과 직관적인 UI/UX
            개발을 할줄 아는 성장하는 개발자 이충재입니다 😀
          </p>
        </div>
      </article>
      <!-- 모바일전용 -->
      <article v-else-if="!isMobile" class="description">
        <section>
          <h1>
            안녕하세요<br />
            개발자 이충재입니다<em>.</em>
          </h1>
        </section>
        <div>
          <p>
            저는 이커머스 웹 개발<br />
            경험을 통해 다양한 프론트<br />
            프레임워크를 활용한<br />
            빠른 프로토타이핑과 직관적인 UI/UX 개발을 할줄 아는 성장하는 개발자
            이충재입니다 😀
          </p>
        </div>
      </article>
    </header>
    <article class="experience">
      <h1>Work Experience<em>.</em></h1>
      <section>
        <div class="row-left">
          <h2>스페이드컴퍼니.</h2>
          <p>Publisher</p>
          <p>2023.12 - 재직중</p>
          <p>삼성카드 모니모 UI/UX개선</p>
        </div>
        <div class="row-right">
          <h3>모니모마케팅팀</h3>
          <ul>
            <li>삼성카드 모니모 레이아웃 신규생성 및 구축</li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>트라이씨클<em>LF.</em></h2>
          <p>Frontend Developer</p>
          <p>2022.04 - 2023.05</p>
          <p>온라인쇼핑몰 개발/ 운영</p>
        </div>
        <div class="row-right">
          <h3>IT개발본부 프론트개발</h3>
          <ul>
            <li>자사몰(하프클럽, 보리보리) 서비스 고도화 및 개선작업</li>
            <li>쇼핑몰 서비스에서 구동되는 내부 api 및 웹개발</li>
            <li>커머스플랫폼 기반의 비즈니스 로직 구현 및 성능 최적화</li>
            <li>프레임워크 구조 변경 (AngularJS → Vue3)</li>
            <li>구글애널리스틱스 코드집계</li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>정보교육원<em>KH.</em></h2>
          <p>웹개발자 교육과정 이수</p>
          <p>2021.09 - 2022.02</p>
        </div>
        <div class="row-right">
          <h3>개발 전문 교육 과정</h3>
          <ul>
            <li>프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
            <li>HTML, CSS, JAVASCRIPT,JQUERY</li>
            <li>
              Java, Tomcat, Spring, Oracle, JSP 등과 기초적인 IT 지식 교육
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>서울특별시사회복지협의회<em>.</em></h2>
          <p>주임</p>
          <p>2019.03 - 2021.08</p>
        </div>
        <div class="row-right">
          <h3>개발 설계 구축</h3>
          <ul>
            <li>사이트 리뉴얼 의뢰</li>
            <li>프레임워크 선정 및 ERP 구조 설계, 리뉴얼 사이트 구축 계획</li>
          </ul>
        </div>
      </section>
    </article>
    <article class="skills">
      <h1>Skills<em>.</em></h1>
      <section>
        <div class="row-center">
          <h2>Communication<em>.</em></h2>
          <ul>
            <li>
              <h4>
                모르는 기술이 있더라도 필요하다면 능동적으로 찾아보고 학습하여
                업무에 적극적으로 활용합니다.
              </h4>
            </li>
            <li>
              <h4>커머스 플랫폼에 대한 폭넓은 이해와 운영 경험</h4>
            </li>
            <li>
              <h4>남들과 다른 미친 적응력과 생존력</h4>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-center">
          <h2>WebSkil<em>.</em></h2>
          <ul>
            <li>
              <h4>Java, Spring, mySql, oracle</h4>
              <p>
                &middot; LF트라이씨클에서 근무하면서, 이커머스 특성 상 대용량
                트래픽을 다뤄보는 경험을 쌓았습니다. 이를 통해 자바와 스프링
                등의 기초적인 백엔드 업무를 전문적으로 수행해왔습니다.
              </p>
              <p>
                &middot; KH정보교육원에서는 기초적인 MVC 패턴을 기반으로 한 CRUD
                및 SSR을 통한 웹 개발 흐름을 습득하고 학습하였습니다.
              </p>
            </li>
            <li>
              <h4>AngularJS, Vue3</h4>
              <p>
                &middot; 주로 Angular를 사용하여 회사내 프로젝트를
                개발하였습니다.
              </p>
              <p>&middot; 앵귤러에서 뷰로 마이그레이션 경험이 있습니다.</p>
            </li>
            <li>
              <h4>SCSS</h4>
              <p>
                &middot; 스페이드컴퍼니에서 현재 퍼블리셔로 scss를
                사용하고있습니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-center">
          <h2>Collaboration tool<em>.</em></h2>
          <ul>
            <li>
              <h4>GitHub, GitLab</h4>
              <p>
                &middot; 협업 및 버전 관리를 효율적으로 수행할 수 있습니다. 오픈
                소스 프로젝트에 참여한 경험이 있어, 다양한 개발자들과의 협업에
                능숙합니다.
              </p>
            </li>
            <li>
              <h4>Jira, redmine, zeplin</h4>
              <p>
                &middot; 스페이드컴퍼니에서 현재 퍼블리셔로 디자이너들과
                사용하고있습니다
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
    <article class="portfolio">
      <h1>PlayGround<em>.</em></h1>
      <section class="probox">
        <div class="row-left">
          <h2>집게사장 피하기</h2>
          <p>&middot; 제작기간 : 3일</p>
          <p>&middot; 진행상황 : 60%</p>
          <p>&middot; 주요내용 : 총알피하기를 모티브로 한 게임입니다</p>
        </div>
        <router-link to="/pacman" class="portfolio-link">
          <div class="portfolio-box">
            <img src="../assets/images/back.webp" alt="포트폴리오 이미지" />
            <div class="overlay">게임하기</div>
          </div>
        </router-link>
      </section>
      <section class="probox">
        <div class="row-left">
          <h2>뭐긴 뭐야 수능이지</h2>
          <p>&middot; 제작기간 : 제작완료</p>
          <p>&middot; 진행상황 : 100%</p>
          <p>
            &middot; 주요내용 : 설레이는 이 마음은 뭘까 왠지 잠을 이룰 수가 없어
            혹시 &middot;&middot;&middot;
          </p>
        </div>
        <router-link to="/clone" class="portfolio-link">
          <div class="portfolio-box">
            <img src="../assets/images/agumon.png" alt="포트폴리오 이미지" />
            <div class="overlay">확인하기</div>
          </div>
        </router-link>
      </section>
    </article>
    <article class="contact">
      <h1>Contact<em>.</em></h1>
      <section>
        <p v-if="isMobile">
          저의 변화와 성장은 <br />
          그동안의 다양한 경험들을 통해 쌓아온 것이라고 생각합니다<em>.</em>
          <br />
          앞으로도 끊임없는 도전과 학습을 통해 <br />
          더 나은 전문가가 되기 위해 노력하겠습니다. <br />
          감사합니다<em>.</em>
        </p>
        <p v-else-if="!isMobile">
          저의 변화와 성장은 <br />
          그동안의 다양한 경험들을 통해 쌓아온 것이라고 생각합니다<em>.</em>
          앞으로도 끊임없는 도전과 학습을 통해 더 나은 전문가가 되기 위해
          노력하겠습니다. <br />
          감사합니다<em>.</em>
        </p>
        <ul>
          <li style="list-style-type: none">
            <h4><i class="fas fa-envelope"></i></h4>
            <p>knm8643@nate.com / 010-5696-1909</p>
          </li>
          <li style="list-style-type: none">
            <h4><i class="fa-brands fa-github"></i></h4>
            <p>
              <a href="https://github.com/knm8643">이력서 주인공</a>
            </p>
            <p>
              <a href="https://github.com/yu-rim95">도움준사람</a>
            </p>
          </li>
        </ul>
      </section>
    </article>
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
  isMobile = true;
  mounted() {
    document.body.style.overflow = "visible";
    if (location.href.includes("reset")) {
      this.$router.push("/pacman");
    } else {
      this.checkIfMobile();
      window.addEventListener("resize", this.checkIfMobile);
    }
  }
  checkIfMobile = () => {
    if (window.innerWidth >= 414) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  };
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/HelloWorld.scss";
</style>
