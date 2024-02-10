<template>
  <div>제작중입니다 &middot;&middot;&middot;</div>
  <!--  <section id="empty_layout">-->
  <!--    <section id="main_container">-->
  <!--      <div class="default_page_header">-->
  <!--        <img-->
  <!--          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQBSURBVHgB7d2xTlsxFMbxQyKidsvY8XYisABvABtjlAipG8nYqfQJCmO3vgGwUSFI2LpBt25lQIIxfYKmWyVE6Dn0QgPlJnZoq9r+/6SIgK6n88W5tq+NCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N9NCcZqNpuvrq6u1vVtpq+evrqDwWCz2+32JXAEYIxGo7GlP1r3/z41NXVyeXm5HHoISoJCRcU32iMslEqldQkcASigxX8jBcUfsiaBIwAPyIu/4XBpJoEjAPd4FN/0JHAEYIhn8e1G8FgCRwByvsVXvenp6U0JHMNAmaz4lUpleXd3tyeBSz4AKRffJB0AneFb0/H8tkeTqIpvkg3ABMXvl8vl5b29vROJSJIBoPi/JBeA1dXVBZ3D/+zRJNrim6SGgXnxj3za6Fi/HWvxTTIBGCp+1aNZe39/vysRS+IroF6vZ7pyZ92+V/EPDg62JXLR9wB58X0/+a9TKL6JOgBDxc88mm1q8d9JIqL9CnhE8TckIVEGgOK7iy4AFN9PVAGg+P6iCYAWv5oP9TKPZkkX30QRACu+Ttce2ZO6rm302p1Op9OSxAUfAIr/OMHPA2jxOxR/ckH3AKM2bjzEdvPo3P6i4FawPcAkxbetXII7ggyA466dW7Hs4/sbQu0BWh7X9ih+seACYOv64j7Wv36Ik+IXCy4AFxcXFPMPCnIUoPcAX8VxfZ/v/9FCvQdw3pJlcwQ2UWQTRoLflCVAZ2dnn2q12nP9dLtOAD3TdYKVmZmZ9+fn598Ft4KdB7DZPJvVc70+7wk6gjuC7AFu6Ke5Ozc3Z71AzbFJptdn2oMcCq4FvxagN3htu9FzvV57glaz2dwSXEt2OVhDs63rAm1JXNBfATfsxs5u8OxGT3995thsYXZ21m4oP0rCogiAuQmBfrJfiPsegKXUQxBNAEwegkMNQV0IgZOoAmA0BH1C4C66ABhC4C7KABhC4CbaAJhHhOCbTTdLAtgeXkBD09J5Auep5lAlcUCELgX37JgXfeu8JGxnCNlZQhK5pM4ImuSUkNh7glQPifIJAYdExcQKaQc/eTSpWmDyZxGjk+Rh0fnBT4RAEj8qttFotPSHz9Jwv1KpLMZ0VGzU8wDj6Fj/xMb8+nbFsckT7Qnq8/Pzh6enp1E8ZJp0AIxN+GgIrCdccmxSjSkEyQfAaAiOJwmBzjLuhP6QKQHITRICfT3VAHyQgPEvY4bkx8U47znQ4ST/Ni42niEIfrMJAXiARwh6EjgCUMBC4LDxJPg1AgIwwqjdR7YXYTAYBH+mMKOAMWz3kY4OvmjBM/n5yLmN/d9q8V+y4xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwLPwAy6drjy7bCWgAAAABJRU5ErkJggg=="-->
  <!--        />-->
  <!--        <div class="default_slot"><p class="font_16">로그인</p></div>-->
  <!--      </div>-->
  <!--      <section id="shop_login_page">-->
  <!--        <img-->
  <!--          class="logo"-->
  <!--          src="https://ba-dream.com/_nuxt/logo_main_vert.f93e9aa0.png"-->
  <!--        />-->
  <!--        <p class="font_16 font_bold_500">바드림 비즈 회원</p>-->
  <!--        <p class="font_bold main_title">통합로그인</p>-->
  <!--        <section class="login_container">-->
  <!--          <div class="info_input">-->
  <!--            <div class="input_container flex_row">-->
  <!--              <input-->
  <!--                type="text"-->
  <!--                class="font_16 text_left"-->
  <!--                placeholder="아이디"-->
  <!--              />-->
  <!--            </div>-->
  <!--            <span class="error_msg font_12 font_bold_400"-->
  <!--              >아이디를 입력해주세요.</span-->
  <!--            >-->
  <!--          </div>-->
  <!--          <div class="info_input">-->
  <!--            <div class="input_container flex_row">-->
  <!--              <input-->
  <!--                type="password"-->
  <!--                class="font_16 text_left"-->
  <!--                placeholder="비밀번호"-->
  <!--              />-->
  <!--            </div>-->
  <!--            <span class="error_msg font_12 font_bold_400"-->
  <!--              >비밀번호를 입력해주세요.</span-->
  <!--            >-->
  <!--          </div>-->
  <!--        </section>-->
  <!--        <section class="login_function_container">-->
  <!--          <div class="checkbox_container">-->
  <!--            <div class="checkbox flex_row">-->
  <!--              <img-->
  <!--                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALaSURBVHgB7dxNbtNAGMbxd+wUUIuqdBmJRbthS7awIssuUNsbcAO4QZwbwAk4QkE9QDiC12yaHUJsKsTHxpGZx6nBSuPOjO1xZibvX6rqKK2U+ckf8diyoPWuvr8kkZ8R5eeU0zHtRikJkVK8nNHpaFF9Q/xburweUnwwlThvaZfLo3e0/Dmji5MbvFwBAWewP5dLY+JQStnvCZCi4iXWHMapNqb4MUzkGnT59ZgG0TVxG4omEe3FU+JqWp5HlOe8adUlxBn2QQxUl/yaExF3bwykiIEUMZAiBlLEQIp2Ami4J+jNyT41aUCBB5z58yMaHw6K5dmXX0b/H/QaVMVBydMDmsofk4IFWscpM0UKEqgOp8wEKTggFU6ZLlJQQLo4ZULjb4IBMsXB0SzROKIFAWQLB3kPZBMHeQ1kGwd5C9QHDvISqC8c5B1QnzjIK6C+cZA3QNvAQY2AXj95RMNBf7bbwkHGo8T5y4fxIc1fDHtB2iYOMhohcJLbEzx8YNtI28ZB2qOr4pTZRHIBB2mNbBNOmQ0kV3CQclT34ZR1ieQSDlKOSGfOBHWB5BoOUo4GH0D3SkAbJBdxkNZIbCO5ioO0R2ELyWUcZLQtdI3kOg4y3ll0heQDDmp0yGmL5AsOanxMborkEw4SdPUtpxaZXKVMf2TFb19wUOu7O8oB6CDpwiAXcFAnJ1Amm5tOruCgzs4wu0JyCQd1Ok/RFsk1HNT5RE5TJBdxkJXpQFMkV3GQtflSXSSXcZDVWXcVkus4yPpliTokH3BQLxe31pF8wUG93SddBfEFB7U+Fwu9oG8k7yIGUsRAihhIEQMpYiBFDKSIgRRF8qvigriaRIpnd3wibnOCJBDlH4nbXLycRfRq9FkivSduLWlyOlqsdtLZw4TwWCquLKXsT4KFFdDF0Q1lDya8JiFpcPv8Mry6e4cdHtkVR4l85xntyrOFcCQvDlZyf1zscv73Fz7KjNcMHZxwAAAAAElFTkSuQmCC"-->
  <!--              />-->
  <!--              <p class="font_14">아이디 저장</p>-->
  <!--            </div>-->
  <!--            <div class="button_container">-->
  <!--              <span class="font_12">회원가입</span>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <button class="btn_main font_bold">로그인</button>-->
  <!--        </section>-->
  <!--        <p class="footer_text">ⓒ Cycloid Co. Ltd.</p>-->
  <!--      </section>-->
  <!--    </section>-->
  <!--    &lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
  <!--  </section>-->
</template>

<script>
export default {
  name: "cloneCode",
};
</script>

<style lang="scss" scoped>
.flicking-viewport {
  overflow: hidden;
  position: relative;
}

.flicking-viewport.vertical,
.flicking-viewport.vertical > .flicking-camera {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.flicking-viewport.vertical > .flicking-camera {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flicking-viewport.flicking-hidden > .flicking-camera > * {
  visibility: hidden;
}

.flicking-camera {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100%;
  will-change: transform;
  z-index: 1;
}

.flicking-camera > * {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.vel-fade-enter-active,
.vel-fade-leave-active {
  transition: all 0.3s ease;
}

.vel-fade-enter-from,
.vel-fade-leave-to {
  opacity: 0;
}

.vel-img-swiper {
  display: block;
  position: relative;
}

.vel-modal {
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  margin: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9998;
}

.vel-img-wrapper {
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50% -50%);
  transition: 0.3s linear;
  will-change: transform opacity;
}

.vel-img,
.vel-img-wrapper {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.vel-img {
  background-color: #000000b3;
  box-shadow: 0 5px 20px 2px #000000b3;
  display: block;
  max-height: 80vh;
  max-width: 80vw;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

@media (max-width: 750px) {
  .vel-img {
    max-height: 95vh;
    max-width: 85vw;
  }
}

.vel-btns-wrapper {
  position: static;
}

.vel-btns-wrapper .btn__close,
.vel-btns-wrapper .btn__next,
.vel-btns-wrapper .btn__prev {
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 32px;
  opacity: 0.6;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.15s linear;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.vel-btns-wrapper .btn__close:hover,
.vel-btns-wrapper .btn__next:hover,
.vel-btns-wrapper .btn__prev:hover {
  opacity: 1;
}

.vel-btns-wrapper .btn__close.disable,
.vel-btns-wrapper .btn__close.disable:hover,
.vel-btns-wrapper .btn__next.disable,
.vel-btns-wrapper .btn__next.disable:hover,
.vel-btns-wrapper .btn__prev.disable,
.vel-btns-wrapper .btn__prev.disable:hover {
  cursor: default;
  opacity: 0.2;
}

.vel-btns-wrapper .btn__next {
  right: 12px;
}

.vel-btns-wrapper .btn__prev {
  left: 12px;
}

.vel-btns-wrapper .btn__close {
  right: 10px;
  top: 24px;
}

@media (max-width: 750px) {
  .vel-btns-wrapper .btn__next,
  .vel-btns-wrapper .btn__prev {
    font-size: 20px;
  }

  .vel-btns-wrapper .btn__close {
    font-size: 24px;
  }

  .vel-btns-wrapper .btn__next {
    right: 4px;
  }

  .vel-btns-wrapper .btn__prev {
    left: 4px;
  }
}

.vel-modal.is-rtl .vel-btns-wrapper .btn__next {
  left: 12px;
  right: auto;
}

.vel-modal.is-rtl .vel-btns-wrapper .btn__prev {
  left: auto;
  right: 12px;
}

@media (max-width: 750px) {
  .vel-modal.is-rtl .vel-btns-wrapper .btn__next {
    left: 4px;
    right: auto;
  }

  .vel-modal.is-rtl .vel-btns-wrapper .btn__prev {
    left: auto;
    right: 4px;
  }
}

.vel-modal.is-rtl .vel-img-title {
  direction: rtl;
}

.vel-loading {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.vel-loading .ring {
  display: inline-block;
  height: 64px;
  width: 64px;
}

.vel-loading .ring:after {
  animation: ring 1.2s linear infinite;
  border-color: hsla(0, 0%, 100%, 0.7) transparent;
  border-radius: 50%;
  border-style: solid;
  border-width: 5px;
  content: " ";
  display: block;
  height: 46px;
  margin: 1px;
  width: 46px;
}

@keyframes ring {
  0% {
    transform: rotate(0);
  }

  to {
    transform: rotate(1turn);
  }
}

.vel-on-error {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.vel-on-error .icon {
  color: #aaa;
  font-size: 80px;
}

.vel-img-title {
  bottom: 60px;
  color: #ccc;
  cursor: default;
  font-size: 12px;
  left: 50%;
  line-height: 1;
  max-width: 80%;
  opacity: 0.8;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-overflow: ellipsis;
  transform: translate(-50%);
  transition: opacity 0.15s;
  white-space: nowrap;
}

.vel-img-title:hover {
  opacity: 1;
}

.vel-icon {
  fill: currentColor;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  width: 1em;
}

.vel-toolbar {
  border-radius: 4px;
  bottom: 8px;
  display: flex;
  left: 50%;
  opacity: 0.9;
  overflow: hidden;
  padding: 0;
  position: absolute;
  transform: translate(-50%);
}

.vel-toolbar,
.vel-toolbar .toolbar-btn {
  background-color: #2d2d2d;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.vel-toolbar .toolbar-btn {
  -ms-flex-negative: 0;
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 20px;
  outline: none;
  padding: 6px 10px;
}

.vel-toolbar .toolbar-btn:active,
.vel-toolbar .toolbar-btn:hover {
  background-color: #3d3d3d;
}

.default_page_header {
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 6.4rem;
  justify-content: flex-start;
  max-width: 42rem;
  padding: 1.2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}

.default_page_header > img {
  height: 3.2rem;
  left: 1.2rem;
  position: absolute;
  width: 3.2rem;
  z-index: 2;
}

.default_page_header > .default_slot {
  width: 100%;
}

.default_page_header > .default_slot > p {
  text-align: center;
}

#shop_login_page {
  min-height: 100vh;
  padding: 0 3.2rem;
  text-align: center;
  width: 100%;
}

#shop_login_page > img.logo {
  height: 18rem;
  margin-bottom: 0.8rem;
  margin-top: 4rem;
  width: 18rem;
}

#shop_login_page > .main_title {
  font-size: 3.2rem;
  margin-block: 0.8rem 5.6rem;
}

#shop_login_page .login_container > .info_input {
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 1.6rem;
  width: 100%;
}

#shop_login_page .login_container > .info_input.error {
  border-color: #ff8585;
  position: relative;
}

#shop_login_page .login_container > .info_input.error span.error_msg {
  color: #ff8585;
  display: block;
  left: 0;
  position: absolute;
  top: calc(100% + 1.2rem);
}

#shop_login_page .login_container > .info_input .error_msg {
  display: none;
}

#shop_login_page .login_container > .info_input .input_container {
  flex: auto 0;
  gap: 0.8rem;
  height: 4.8rem;
  justify-content: flex-end;
  padding: 0 0.4rem;
  width: 100%;
}

#shop_login_page .login_container > .info_input .input_container > input {
  flex-grow: 1;
  text-align: right;
}

#shop_login_page
  .login_container
  > .info_input
  .input_container
  > input::-moz-placeholder {
  text-align: left;
}

#shop_login_page
  .login_container
  > .info_input
  .input_container
  > input::placeholder {
  text-align: left;
}

#shop_login_page .login_function_container {
  padding-block: 1.6rem 3.4rem;
}

#shop_login_page .login_function_container .checkbox_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 3.6rem;
  width: 100%;
}

#shop_login_page .login_function_container .checkbox_container .checkbox {
  flex-wrap: nowrap;
}

#shop_login_page .login_function_container .checkbox_container .checkbox > img {
  height: 1.8rem;
  margin-right: 0.8rem;
  width: 1.8rem;
}

#shop_login_page
  .login_function_container
  .checkbox_container
  > .button_container {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
}

#shop_login_page
  .login_function_container
  .checkbox_container
  > .button_container
  > span {
  cursor: pointer;
}

#shop_login_page .login_function_container > .btn_main {
  width: 100%;
}

#shop_login_page .footer_text {
  font-size: 1.1rem;
  font-weight: 400;
  max-height: 13.5rem;
}
</style>
