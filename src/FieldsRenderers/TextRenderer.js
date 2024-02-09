import { useCardsStore } from "../store";

export const TextRenderer = ({ field }) => {
  return <span>{field.value}</span>;
};
