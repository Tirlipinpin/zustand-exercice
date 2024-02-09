import { useCardsStore } from "../store";

import "./TagsRenderer.css";

export const TagsRenderer = ({ field }) => {
  console.log("rendering tags");

  return (
    <ul className="tags">
      {field.value?.map((tag) => (
        <li className="tag" style={{ backgroundColor: tag.color }}>
          {tag.text}
        </li>
      ))}
    </ul>
  );
};
