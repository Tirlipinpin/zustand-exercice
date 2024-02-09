import { useCardsStore } from "./store";
import { FieldRenderer } from "./FieldsRenderers/FieldRenderer";

import "./Card.css";

export const Card = ({ cardId }) => {
  const cardTitle = useCardsStore((state) => state.cardsById[cardId]?.title);
  const availableFields = useCardsStore((state) => state.availableFields);

  console.log("rerendering card");

  return (
    <div className="card">
      <h2>{cardTitle}</h2>
      {availableFields?.map((fieldId) => (
        <FieldRenderer cardId={cardId} fieldId={fieldId} />
      ))}
    </div>
  );
};
