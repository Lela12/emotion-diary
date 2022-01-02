import React from "react";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick, //함수이므로, EmotionItem에서 useCallback사용
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} />

      <span className="Emotion_descript">{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
