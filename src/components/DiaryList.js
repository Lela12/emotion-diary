import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];
//value:어떤 것을 선택할 것인지, onChange select가 변화했을때 바꿀 함수,
// optionList select태그안에 들어갈 옵션
//sortType을 변경시킬  select역할
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  //React.memo 강화된 컴포넌트를 돌려주는 고차 컴포넌트
  //값이 바뀌지 않으면 랜더링 되지 않게 해줌
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map(
        (
          it,
          idx //it:첫번째 객체(latest,oldest)
        ) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        )
      )}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    //diaryList배열을 JSON화 시켜서 문자열로 바꿈 parse를 통해 다시 배열로 바꿔 copyList에 값을 전달
    //diaryList 배열을 건들이지 않기 위함
    const copyList = JSON.parse(JSON.stringify(diaryList));

    //감정에 따라 filter하여 해당하는 감정의 값만 보여주게함
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")} //페이지 이동
          />
        </div>
      </div>

      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
