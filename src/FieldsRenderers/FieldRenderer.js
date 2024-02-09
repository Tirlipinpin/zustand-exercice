import { useShallow } from "zustand/react/shallow";
import { useCardsStore } from "../store";
import { TagsRenderer } from "./TagsRenderer";
import { TextRenderer } from "./TextRenderer";

export const FieldRenderer = ({ cardId, fieldId }) => {
  const fieldsMetadata = useCardsStore((state) => state.fieldsMetadata);
  const field = useCardsStore(
    useShallow((state) => state.cardsById[cardId].fieldsById[fieldId])
  );

  const fieldMetadata = fieldsMetadata[fieldId];

  if (fieldMetadata.type === "tags") {
    return <TagsRenderer field={field} />;
  }

  if (fieldMetadata.type === "string") {
    return <TextRenderer field={field} />;
  }

  return null;
};
