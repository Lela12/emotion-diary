import { useParams } from "react-router-dom";
//별도의 라이브러리가 자신의 라이브러리의 기능을 편하게 이용할 수 있도록
//만들어진 사용자 정의 hook을 custom hooks이라고 부른다

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
