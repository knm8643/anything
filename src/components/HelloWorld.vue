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
            다양한 프레임워크 및 언어를 활용한 빠른 프로토타이핑과 직관적인
            UI/UX 개발을 할줄 아는 성장하는 개발자 이충재입니다 😀
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
            <li>
              뷰티파이 및 SCSS를 활용한 삼성카드 모니모 레이아웃 신규생성 및
              구축
            </li>
            <li>삼성카드 내부 WCMS를 통한 CSS 수정 및 탬플릿 양산</li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>트라이씨클<em>LF.</em></h2>
          <p>Web Developer</p>
          <p>2022.04 - 2023.05</p>
          <p>온라인쇼핑몰 개발/ 운영</p>
        </div>
        <div class="row-right">
          <h3>IT개발본부/서비스플랫폼팀</h3>
          <ul>
            <li>
              AngularJS을 이용한 자사 온라인쇼핑몰 신규기능 및 유지보수
              프론트개발
            </li>
            <li>
              프론트 개발과 동시에 Java, Spring, Mysql을 통한 데이터 저장까지
              백단영역 개발 진행
            </li>
            <li>
              vue2와 Java, Spring, Mysql 를 기반으로한 자사 내부인트라넷
              서비스BO 신규게시판 영역 생성 및 유지보수 진행
            </li>
            <li>구프레임워크 마이그레이션 변경 AngularJS → Vue3</li>
            <li>구글 애널리틱스 집계 결과를 자사 서비스 디비에 적재</li>
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
            <li>javascript, JQUERY</li>
            <li>
              Java, Tomcat, Spring, Oracle, JSP, css 등과 기초적인 IT 지식 교육
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
              <h4>Java, Spring, Jsp, mySql, Oracle</h4>
              <p>
                &middot; LF트라이씨클에서 근무하면서, 이커머스 특성 상 대용량
                트래픽을 다뤄보는 경험을 쌓았습니다. 이를 통해 자바와 스프링
                등의 기초적인 백엔드 업무를 전문적으로 수행해왔습니다.
              </p>
              <p>
                &middot; LF트라이씨클에서 프론트업무와 동시에 서버까지 데이터를
                저장하는 풀스택개발 경험을 했었습니다
              </p>
              <p>
                &middot; KH정보교육원에서는 기초적인 MVC 패턴을 기반으로 한 CRUD
                및 JSP을 통한 웹 개발 흐름을 습득하고 학습하였습니다.
              </p>
            </li>
            <li>
              <h4>AngularJS, Vue, typescript</h4>
              <p>
                &middot; 주로 Angular를 사용하여 트라이씨클 자사몰(하프클럽,
                보리보리)의 모바일 웹과 PC영역들을 개발했었습니다.
              </p>
              <p>
                &middot; 자사인트라넷 Bo에서 Vue를 통한 신규게시판 기능들을
                개발하였으며 버그들을 수정해왔습니다.
              </p>
              <p>
                &middot; 개인적인 실무경험들과 공부들을 통하여 프론트개발의
                기술을 키우고자 타입스크립트를 주로 공부하였습니다.
              </p>
            </li>
            <li>
              <h4>Jenkins, aws</h4>
              <p>
                &middot; 트라이씨클에서 주된 서버배포용으로 사용하였으며 개발 및
                운영서버를 나누어 주된 빌드와 배포를 하였습니다.
              </p>
              <p>
                &middot; 학원프로젝트 진행시 포트폴리오 사이트 공개를 위해 aws
                사이트 배포를 경험했었습니다.
              </p>
            </li>
            <li>
              <h4>SCSS, css, Vuetify, bootstrap</h4>
              <p>
                &middot; 삼성카드 모니모앱 프로젝트에 퍼블리셔로서 scss 와
                뷰티파이를 사용한 경험이있습니다.
              </p>
              <p>
                &middot; KH정보교육원에서는 정적인 html영역과 그를 채워주는
                css에 대해서 기초적인 역량을 배웠으며 부트스트랩을 통한
                라이브러리 활용경험을 배웠었습니다.
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
              <h4>GitHub, GitLab, Git, bitbucket</h4>
              <p>
                &middot; 학원 및 개인적인 프로젝트와 공부등을 위해 git과
                github를 주로 사용하여 깃을 활용한 협업에 능숙합니다.
              </p>
              <p>
                &middot; 트라이씨클 및 삼성카드 모니모 프로젝트를 깃랩과
                빗버킷을 활용하여 팀원들과 협업을 진행하였습니다.
              </p>
            </li>
            <li>
              <h4>Jira, redmine, zeplin</h4>
              <p>
                &middot; 트라이씨클에서 개발자 및 MD 들과 소통을 하기위해
                레드마인을 사용하였으며 삼성카드 모니모에선 디자이너와 현업들과
                소통하기 위해 지라를 사용했습니다.
              </p>
              <p>
                &middot; 삼성카드 모니모 레이아웃을 구성하기 위해 디자이너들과
                협업을 위한 제플린을 직접 이용하여 px 값등을 확인하여 완벽한
                ui/ux를 구성하기 위해 작업했었습니다.
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
          <p>&middot; 진행상황 : 50%</p>
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
