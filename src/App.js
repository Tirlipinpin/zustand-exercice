import { Card } from "./Card";
import { useCardsStore } from "./store";
import "./styles.css";

export default function App() {
  const cardIds = useCardsStore((state) => state.cardIds);
  const fakeUpdateCard1 = useCardsStore((state) => state.fakeUpdateCard1);

  onButtonClick = () => {
    fakeUpdateCard1();
  };

  return (
    <div className="App">
      {cardIds?.map((cardId) => (
        <Card cardId={cardId} />
      ))}
      <button onClick={onButtonClick}>Refresh card 1 data</button>
    </div>
  );
}
