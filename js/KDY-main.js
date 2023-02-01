function makeQuestion(content, isComment, comment) {
  const template = `<div class="question" onClick="location.href='http://www.naver.com'">
  <div class="question_box">
    <div class="user_info">
      <img class="profile" src="image/KDY-dora.jpg" alt="dora" />
      <div class="question_info">
        <h3 class="user_name">도라에몽</h3>
        <h6 class="date">23-01-17 12:57PM</h6>
      </div>
    </div>

    <p>
      ${content}
    </p>
    ${
      isComment
        ? `<div class="answer">
      <div class="user_info">
        <img class="profile" src="image/KDY-jingu.jpeg" alt="jingu" />
        <div class="question_info">
          <h3 class="user_name">노진구</h3>
          <h6 class="date">23-01-17 12:57PM</h6>
        </div>
      </div>
      <p>
        ${comment}
      </p>
    </div>`
        : ""
    }
  </div>
</div>`;
  return template;
}

// 유저가 작성한 질문 정보를 기반으로 html에 태그를 추가하는 함수
function PostAppend() {
  $(document).ready(function () {
    $(".question_list").append(makeQuestion("테스트 입니다.", false));
    $(".question_list").append(makeQuestion("테스트 입니다.", true, "답글"));
  });
}
