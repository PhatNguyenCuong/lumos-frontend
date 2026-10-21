import { getHome } from "@/models/home.model";

export interface HomePageViewModel {
  readonly mainLabel: string;
}

export function getHomePageViewModel(): HomePageViewModel {
  const home = getHome();

  return {
    mainLabel: `${home.name} landing page`,
  };
}
