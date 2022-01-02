import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";
import DiaryList from "../components/DiaryList";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    //title이란 태그를 갖는 모든 element를 가져와라(배열)
    //페이지마다 다른 타이틀을 가지게 할 수 있음
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `이모션 다이어리 - ${id}번 일기 수정`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      //일기데이터가 하나라도 있을때에만 꺼내옴
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true }); //내용이 없는 페이지로 다시 되돌아가지 못하게
      }
    }
  }, [id, diaryList]); //id,diaryList가 다를 경우에만 꺼내옴

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  ); //originData가 있으면, DiaryList랜더링
};

export default Edit;
