export interface Home {
  readonly name: string;
}

export function getHome(): Home {
  return {
    name: "Cooking",
  };
}
