import { create } from "zustand";

export const useCardsStore = create((set) => ({
  fieldsMetadata: {
    "field-1": {
      type: "tags",
    },
    "field-2": {
      type: "string",
    },
  },
  availableFields: ["field-1", "field-2"],
  cardsById: {
    "card-1": {
      title: "Poney",
      fieldsById: {
        "field-1": {
          label: "Tags",
          value: [
            { text: "Tag 1", color: "pink" },
            { text: "Tag 2", color: "blue" },
            { text: "Tag 3", color: "red" },
            { text: "Tag 4", color: "orange" },
          ],
        },
        "field-2": {
          label: "Owner",
          value: "John Doe",
        },
      },
    },
    "card-2": {
      title: "Unicorn",
      fieldsById: {
        "field-1": {
          label: "Tags",
          value: [{ text: "Tag 5", color: "purple" }],
        },
        "field-2": {
          label: "Owner",
          value: "Maria Collins",
        },
      },
    },
  },
  cardIds: ["card-1", "card-2"],
  fakeUpdateCard1: async () => {
    const fakeLoaderPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await fakeLoaderPromise;

    set((state) => {
      return {
        cardsById: {
          ...state.cardsById,
          "card-1": {
            ...state.cardsById["card-1"],
            fieldsById: {
              ...state.cardsById["card-1"].fieldsById,
              "field-1": {
                label: "Tags",
                value: [
                  { text: "Tag 1", color: "pink" },
                  { text: "Tag 3", color: "red" },
                  { text: "Tag 4", color: "orange" },
                  { text: "Tag 2", color: "blue" },
                ],
              },
            },
          },
        },
      };
    });
  },
}));
