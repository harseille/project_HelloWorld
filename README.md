<!-- ![로고](./client/assets/images/BusLogo.png) -->

<h1><img src="./client/public/favicon.ico" width="28px"> Hello World: 당신의 여행을 공유해보세요</h1>

기간: 2022-08-12 ~ 2022-09-01 (21일)

자세한 프로젝트 정보 및 시연 영상은 [여기](https://absorbed-leek-405.notion.site/21636fac3f9b4c009e5bba33c8c8867b)에서 확인 가능합니다.

<!-- <video src="/assets/videos/intro.mov" autoplay="true" loop="true" muted="true"> -->

## 목차

1. [**서비스 소개**](#1)
2. [**프로젝트 목표**](#2)
3. [**기술 스택**](#3)
4. [**주요 기능**](#4)
5. [**기획 산출물**](#5)
6. [**Credit roll**](#6)
7. [**회고**](#7)
8. [**실행 방법**](#8)
   <br />

---

<div id="1"></div>

## ✈️ 서비스 소개

코로나19 이후 변해버린 일상 속, ‘현재’와 ‘나’의 행복에 초점을 맞춘 개인은 여행을 통해 자신의 취향을 경험하고 기록한다는 의미의 [해빗-어스(H.A.B.I.T-U.S.)](https://kto.visitkorea.or.kr/kor/notice/news/press/board/view.kto?id=444634&isNotice=false&instanceId=42&rnum=12)가 2022년 국내관광의 핵심이 될 전망.

### **여행 일정표**를 만들고 **기록**하며 **공유**할 수 있는 여행 커뮤니티

<br>

<div id="2"></div>

## 🎯 프로젝트 목표

1. 약 한 달 반 진행되었던 JavaScript 수업 내용을 복습하고 적용하는 프로젝트.
2. JS 프레임워크의 동작 방식을 심도 있게 이해하기 위해, Vanilla JS로 SPA 및 CBD를 구현하여 프로젝트 수행.
3. JWT를 이용한 로그인 회원가입 서비스 구현.

<br>

<div id="3"></div>

## 🛠 기술 스택

<div> 
  <h4>Front-end</h4> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/Google Maps-4285F4?style=for-the-badge&logo=Google Maps&logoColor=white"> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 
  <br>
  <h4>Back-end</h4> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <br>
  <h4>Version Control</h4> 
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <br>
  <h4>Co-operation</h4> 
  <img src="https://img.shields.io/badge/notion-eeeeee?style=for-the-badge&logo=notion&logoColor=black">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>
<br>

<div id="4"></div>

## ✨ 주요 기능

| 기능                        | 내용                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| auth                        | JWT를 이용하여 로그인, 회원가입, 로그아웃 기능 </br> client 단에서 입력 값 validation 처리 기능                   |
| 검색                        | 데이터베이스에 등록된 여행 일정 검색 기능 </br> Google map API Auto Complete를 활용한 여행지 자동 완성            |
| 새 일정 만들기 기능         | 여행 시작일, 종료일 기준으로 일 단위 여행 일정표 생성 </br> 시작일, 종료일 변경 시 동적으로 여행 일정표 변경      |
| 세부 일정 등록 및 편집 기능 | 카테고리를 선택하고 계획한 여행지를 검색하여 등록 </br> 등록된 여행지를 여행 일정표에서 Drag & Drop으로 이동 가능 |
| 일정 동선 확인 기능         | 세부 일정이 장소를 기준으로 시간 순서대로 지도에 마커를 찍으면서 선을 연결하여 일정 동선 파악                     |

### 그 외 주요 구현 사항

- 마이페이지
- Date Picker
- 게시글 댓글 및 좋아요 기능

<br>

<!-- ## 📐 프로젝트 구성도

<div id="6"></div>
  <img src="/client/assets/images/architecture.png">
<br> -->

<div id="5"></div>

## 📑 프로젝트 산출물

<table>
  <thead>
    <tr>
      <th>
        <a href="https://absorbed-leek-405.notion.site/b0a9acc7214e4303a0628db065e947cc">기획서</a>
      </th>
      <th>
        <a href="https://absorbed-leek-405.notion.site/01f981c31884406cab23f7d4f0d892b3">요구사항 명세서</a>
      </th>
      <th>
        <a href="https://www.figma.com/file/Y2i7FagaFVoJ1WMsU7B3g1/Hello-world?node-id=0%3A1">Figma</a>
      </th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/b0a9acc7214e4303a0628db065e947cc">
          <img width="789" alt="image" src="/client/assets/images/doc/projectstart.png">
        </a>
      </td>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/01f981c31884406cab23f7d4f0d892b3">
          <img width="789" alt="image" src="/client/assets/images/doc/demend.png">
        </a>
      </td>
      <td align="center">
        <a href="https://www.figma.com/file/Y2i7FagaFVoJ1WMsU7B3g1/Hello-world?node-id=0%3A1">
          <img width="789" alt="image" src="/client/assets/images/doc/figma.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>
        <a href="https://absorbed-leek-405.notion.site/e6840df2aa624595910e8876f70769d1?v=0883c70f19c247e3b430dea1d53264ab">회의록</a>
      </th>
      <th>
        <a href="https://absorbed-leek-405.notion.site/96ee8f7bd04544579c8cc18b48deb9a9?v=54d782f70b2c4008a355c2fe93b6bf68">칸반보드 / 간트차트</a>
      </th>
      <th>
        <a href="https://absorbed-leek-405.notion.site/Git-convention-389d22f88111471db595f58892001b38">Git Convention</a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/e6840df2aa624595910e8876f70769d1?v=0883c70f19c247e3b430dea1d53264ab">
          <img width="789" alt="image" src="/client/assets/images/doc/meetingLog.png">
        </a>
      </td>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/96ee8f7bd04544579c8cc18b48deb9a9?v=54d782f70b2c4008a355c2fe93b6bf68">
          <img width="789" alt="image" src="/client/assets/images/doc/canban.png">
        </a>
      </td>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/Git-convention-389d22f88111471db595f58892001b38">
          <img width="789" alt="image" src="/client/assets/images/doc/gitconvention.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>

<div id="6"></div>

## 👋 Credit roll

<img src="/client/assets/images/busLogo2.png">

<table class="tg">
<tbody>
  <tr>
    <td>Name</td>
    <td>🍑황도은</td>
    <td>🦦 김다빈</td>
    <td>🐋최원오</td>
    <td>🦎박준하</td>
  </tr>
  <tr>
    <td>Role</td>
    <td>FE(팀장)</td>
    <td>FE</td>
    <td>FE</td>
    <td>FE</td>
  </tr>
  <tr>
    <td >e-mail</td>
    <td ><a href="mailto:dehya0518@naver.com">dehya0518@naver.com</a></td>
    <td ><a href="mailto:kdbj12003@gmail.com">kdbj12003@gmail.com</a></td>
    <td ><a href="mailto:cwo1401@gmail.com">cwo1401@gmail.com</a></td>
    <td ><a href="mailto:joonhabaak@gmail.com">joonhabaak@gmail.com</a></td>
  </tr>
  <tr>
    <td>Github</td>
    <td><a href="https://github.com/dee0518">https://github.com/dee0518</a></td>
    <td><a href="https://github.com/davinahi">https://github.com/davinahi</a></td>
    <td><a href="https://github.com/choi1five">https://github.com/choi1five</a></td>
    <td><a href="https://github.com/harseille">https://github.com/harseille</a></td>
  </tr>
  <tr>
    <td>Blog</td>
    <td><a href="https://velog.io/@dee0518">https://velog.io/@dee0518</a></td>
    <td><a href="https://velog.io/@dadak">https://velog.io/@dadak</a></td>
    <td><a href="https://velog.io/@o1_choi">https://velog.io/@o1_choi</a></td>
    <td><a href="https://velog.io/@dessin">https://velog.io/@dessin</a></td>
  </tr>
</tbody>
</table>
<br>

<div id="7"></div>

## 💭 회고

인터뷰 형식으로 프로젝트를 회고를 했습니다. 프로젝트를 하며 받은 느낀점, 잘한점, 아쉬운 점, 앞으로의 포부를 팀 원 모두 함께 얘기하며 작성한 회고록 입니다.

[여기](https://absorbed-leek-405.notion.site/59117ff28507471db35192d64b7a532c)를 클릭하면 Notion 회고록 페이지로 이동합니다.

<br>

<div id="8"></div>

## 💻 실행방법

</br>

```
npm install
npm start
```
