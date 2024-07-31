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
            저는 다양한 백/프론트 기술을 활용할줄 알고 편리하고 직관적인 사용자
            중심의 UI/UX 개발을 할줄 아는 함께하고 일하고 싶은 개발자
            이충재입니다 😀
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
            저는 다양한 백/프론트 기술을 활용할줄 알고 편리하고 직관적인 사용자
            중심의 UI/UX 개발을 할줄 아는 함께하고 일하고 싶은 개발자
            이충재입니다 😀
          </p>
        </div>
      </article>
    </header>
    <article class="experience">
      <h1>경력사항<em>.</em></h1>
      <section>
        <div class="row-left">
          <h2>굿소프트<em>.</em></h2>
          <p>2024.03 - 재직 중</p>
          <p>SI사업팀</p>
        </div>
        <div class="row-right">
          <h3>GS칼텍스 백오피스 개발 [3개월]</h3>
          <ul>
            <li>
              JAVA, Spring Boot, JSP, MSSQL 를 활용한 GS칼텍스 임직원전용
              백오피스 제작
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>트라이씨클<em>LF.</em></h2>
          <p>2022.04 - 2023.05(1년)</p>
          <p>IT개발본부 서비스플랫폼팀</p>
        </div>
        <div class="row-right">
          <h4>트라이씨클 백오피스 기능개발</h4>
          <ul>
            <li>
              Vue2, Spring Boot, JSP, JAVA, MYSQL 를 이용한 백오피스내
              신규컨텐츠 영역개발
            </li>
          </ul>
          <h4>신규 상품전시구좌 / 리뉴얼 페이지 기능개발</h4>
          <ul>
            <li>Angular2 를 이용한 페이지내 프론트기능 추가</li>
          </ul>
          <h4>자사몰 매출 데이터집계 기능개발</h4>
          <ul>
            <li>구글애널리틱스를 활용하여 자사 디비에 데이터 별도집계 처리</li>
          </ul>
          <h4>자사몰내 오류수집 집계 기능개발</h4>
          <ul>
            <li>Sentry 템플릿을 이용한 사이트로그 기록추적</li>
          </ul>
          <h4>차세대 프레임워크 전환진행</h4>
          <ul>
            <li>
              기존 Angular 프레임워크에서 Vue3로 전환을 하기 위한 리팩토링
              작업진행
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>정보교육원<em>KH.</em></h2>
          <p>2021.09 - 2022.02(6개월)</p>
          <p>웹개발자 교육</p>
        </div>
        <div class="row-right">
          <h3>웹개발 전문 교육 과정이수</h3>
          <ul>
            <li>
              Java, Tomcat, Spring, Oracle, JSP, CSS, Git 등과 기초적인 IT 지식
              교육
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>서울특별시사회복지협의회<em>.</em></h2>
          <p>2019.03 - 2021.08(2년 6개월)</p>
          <p>대외협력사업부</p>
        </div>
        <div class="row-right">
          <h3>기업사회공헌 활동담당</h3>
          <ul>
            <li>
              희망마차(이마트), 이동푸드마켓(BC카드), 1동 1푸드마켓 등 기업과
              연계된 사회봉사활동 주도
            </li>
            <li>
              피코크 봉사단, 싱싱봉사단 등 대규모 임직원, 시민자원봉사단 운영
            </li>
          </ul>
        </div>
      </section>
    </article>
    <!-- 기술 및 이력서 -->
    <article class="skills">
      <h1>기술 및 자격증<em>.</em></h1>
      <section>
        <div class="row-center">
          <h2>사용가능 스킬<em>.</em></h2>
          <ul>
            <li>
              <h4>JAVA, Spring Boot, Oracle, MSSQL, MYSQL</h4>
            </li>
            <li>
              <h4>JSP, Nuxt, Vue, Angular, JavaScript, TypeScript</h4>
            </li>
            <li>
              <h4>CSS, SCSS, Vuetify, BootStrap, Figma, Zeplin</h4>
            </li>
            <li>
              <h4>GitHub, GitLab, bitBucket, Redmine</h4>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-center">
          <h2>자격사항<em>.</em></h2>
          <ul>
            <li><h4>2024년 3회 정보처리기사 필기 합격</h4></li>
            <li><h4>2018년 컴퓨터활용능력 2급</h4></li>
            <li><h4>2018년 사회복지사 2급</h4></li>
            <li><h4>2018년 대형면허 1종</h4></li>
          </ul>
        </div>
      </section>

      <!--
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
      -->
    </article>
    <!--
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
    -->
    <article class="contact">
      <h1>통신보안<em>.</em></h1>
      <section>
        <h2>연락망 <em> : </em> 010. 5696. 1909</h2>
        <h2>언제든 당신을 기다립니다 주저하지말고 연락주세요 감사합니다.</h2>
      </section>
      <!--
<section>
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
      -->
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
