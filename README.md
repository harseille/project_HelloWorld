<!-- ![로고](/public/assets/images/BusLogo.png) -->

<h1><img src="/public/assets/images/favicon.ico" width="28px"> Hello World: 당신의 여행을 공유해보세요</h1>

<!-- <video src="/assets/videos/intro.mov" autoplay="true" loop="true" muted="true"> -->

## 목차

1. [**서비스 소개**](#1)
2. [**프로젝트 목표**](#2)
3. [**기술 스택**](#3)
4. [**주요 기능**](#4)
5. [**데모 영상**](#5)
6. [**기획 산출물**](#6)
7. [**Credit roll**](#7)
8. [**회고**](#8)
9. [**실행 방법**](#9)
   <br />

---

<div id="1"></div>

## ✈️ 서비스 소개

> **여행 일정표**를 만들고 **기록**하며 **공유**할 수 있는 여행 커뮤니티

## <br>

<div id="2"></div>

## 🎯 프로젝트 목표

기간: 2022-08-12 ~ 2022-09-01 ( 21 일 )
목적:

1. 약 한 달 반 진행되었던 JavaScript 수업 내용을 복습하고 적용하는 프로젝트.
2. 코로나19 이후 변해버린 일상 속, ‘현재’와 ‘나’의 행복에 초점을 맞춘 개인은 여행을 통해 자신의 취향을 경험하고 기록한다는 의미의 [해빗-어스(H.A.B.I.T-U.S.)](https://kto.visitkorea.or.kr/kor/notice/news/press/board/view.kto?id=444634&isNotice=false&instanceId=42&rnum=12)가 2022년 국내관광의 핵심이 될 전망.
3. React 프레임워크를 심도 있게 이해하기 위해 SPA 및 CBD 개발 방법론으로 프로젝트 수행.
   <br>

## 🛠 기술 스택

<div id="3"></div>

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

## ✨ 주요 기능

<div id="4"></div>

<br>

```
1. 로그인, 회원가입, 로그아웃 (jwt토큰)
2. 검색으로 여행일정 필터링
3. date-picker
 - 출발일 선택 전 도착일 캘린더를 오픈할 수 없다.
 - 출발일 이전의 날짜는 도착일 선택 시 불가하다.
 - 출발일과 도착일을 설정 후 출발일을 도착일 이후 날짜로 변경 시 도착일 날짜를 출발일과 동일한 일자로 변경한다.
 - 출발일과 도착일을 설정 후 출발일을 도착일 기준 31일을 초과하게 설정 시 도착일을 출발일 기준 31일 이후 날짜로 변경한다.
 - cover 이미지 업로드
 -
```

## 🎥 데모 영상

<div id="5"></div>
 
|로그인|
:--:
|![로그인](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/444d8423-5375-4a40-a7ad-e0cc082da844/1login.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T130802Z&X-Amz-Expires=86400&X-Amz-Signature=0e9602f6eb197c29327538baf8c3be0f27226f68835420f8fde41ae776c85df4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221login.gif%22&x-id=GetObject)|

|회원가입|
:--:
|![회원가입](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4e954fac-d470-445f-a326-80193d97ac15/2%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T131202Z&X-Amz-Expires=86400&X-Amz-Signature=0be1b1723179b37a594d1f2172e1fd52caa319c87fc463b8b682948b78463f23&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%222%25ED%259A%258C%25EC%259B%2590%25EA%25B0%2580%25EC%259E%2585.gif%22&x-id=GetObject)|

| 메인페이지                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 검색                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ![메인페이지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bcafca03-bb33-4b67-8511-3da2521ab60a/14%EA%B2%80%EC%83%89.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T131951Z&X-Amz-Expires=86400&X-Amz-Signature=79d55bd4fd7d3bff316295a5b294b7c3e7ded4082fcc3c4f613295b98e1a2ed4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2214%25EA%25B2%2580%25EC%2583%2589.gif%22&x-id=GetObject)                                                                                                 |
| 카드선택                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ![메인페이지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d0aca225-f3e1-457c-905b-5454339b5d07/5.%EB%A9%94%EC%9D%B8%EC%9D%BC%EC%A0%95%EC%84%A0%ED%83%9D.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T132133Z&X-Amz-Expires=86400&X-Amz-Signature=e78f8d3ffd37bc6fae7ca1cc133091c076b1ca980914b21f56c476a4341555bd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%225.%25EB%25A9%2594%25EC%259D%25B8%25EC%259D%25BC%25EC%25A0%2595%25EC%2584%25A0%25ED%2583%259D.gif%22&x-id=GetObject) |

|새 여행 일정 만들기 모달|
:--:
|![새 여행 일정 만들기 모달](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/67bc8369-9b8b-420c-bcd2-d9af231b6215/3.%EC%9D%BC%EC%A0%95%EB%A7%8C%EB%93%A4%EA%B8%B0%EC%A0%84%EC%B2%B4%ED%9D%90%EB%A6%84.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T132242Z&X-Amz-Expires=86400&X-Amz-Signature=f226dce3d329bd2257c336db2ef3bed5c0357e1a754aaf7f0f321a41bda28c9e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%223.%25EC%259D%25BC%25EC%25A0%2595%25EB%25A7%258C%25EB%2593%25A4%25EA%25B8%25B0%25EC%25A0%2584%25EC%25B2%25B4%25ED%259D%2590%25EB%25A6%2584.gif%22&x-id=GetObject)|

|여행 일정 편집 페이지|
:--:
|![여행 일정 편집 페이지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b997b5a-a697-4c39-bb1b-ed5e5bd13e19/7.%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%84%A0%ED%83%9D.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T132419Z&X-Amz-Expires=86400&X-Amz-Signature=2d9be62214b5c25a9a8977b76a758486547591c5e95458e8c7f8e00e31bd7709&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%227.%25EC%25BB%25A4%25EB%25B2%2584%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580%25EC%2584%25A0%25ED%2583%259D.gif%22&x-id=GetObject)|
|![여행 일정 편집 페이지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7aa3a059-aef2-46b1-9afc-d13eb252aef7/poly_line.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T133002Z&X-Amz-Expires=86400&X-Amz-Signature=e49cc99ae922ae99a74b02c1d07e721a11d658784b8e7d83e43e42dd26df7e2c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22poly_line.gif%22&x-id=GetObject)|

|회원가입|
:--:
|![]()|

<br>

<!-- ## 📐 프로젝트 구성도

<div id="6"></div>
  <img src="/public/assets/images/architecture.png">
<br> -->

## 📑 프로젝트 산출물

<div id="7"></div>

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
          <img width="789" alt="image" src="/public/assets/images/doc/projectstart.png">
        </a>
      </td>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/01f981c31884406cab23f7d4f0d892b3">
          <img width="789" alt="image" src="/public/assets/images/doc/demend.png">
        </a>
      </td>
      <td align="center">
        <a href="https://www.figma.com/file/Y2i7FagaFVoJ1WMsU7B3g1/Hello-world?node-id=0%3A1">
          <img width="789" alt="image" src="/public/assets/images/doc/figma.png">
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
          <img width="789" alt="image" src="/public/assets/images/doc/meetingLog.png">
        </a>
      </td>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/96ee8f7bd04544579c8cc18b48deb9a9?v=54d782f70b2c4008a355c2fe93b6bf68">
          <img width="789" alt="image" src="/public/assets/images/doc/canban.png">
        </a>
      </td>
      <td align="center">
        <a href="https://absorbed-leek-405.notion.site/Git-convention-389d22f88111471db595f58892001b38">
          <img width="789" alt="image" src="/public/assets/images/doc/gitconvention.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 👋 Credit roll

<div id="8"></div>

<img src="/public/assets/images/busLogo2.png">

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
    <td ><a href=">dehya0518@naver.com">dehya0518@naver.com</a></td>
    <td ><a href=">kdbj12003@gmail.com">kdbj12003@gmail.com</a></td>
    <td ><a href=">cwo1401@gmail.com">cwo1401@gmail.com</a></td>
    <td ><a href=">joonhabaak@gmail.com">joonhabaak@gmail.com</a></td>
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

## 💭 회고

<div id="9"></div>

[회고록](https://absorbed-leek-405.notion.site/59117ff28507471db35192d64b7a532c)

<br>

## 💻 실행방법

<div id="9"></div>
</br>

```
npm install
npm start
```
