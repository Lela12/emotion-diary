import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    //title이란 태그를 갖는 모든 element를 가져와라(배열)
    //페이지마다 다른 타이틀을 가지게 할 수 있음
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `이모션 다이어리 - 새 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
