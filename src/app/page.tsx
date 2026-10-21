import { getHomePageViewModel } from "@/controllers/home.controller";
import HomePage from "@/views/pages/home/home-page";

export default function HomeRoute() {
  const viewModel = getHomePageViewModel();

  return <HomePage viewModel={viewModel} />;
}
