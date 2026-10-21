import type { HomePageViewModel } from "@/controllers/home.controller";

interface HomePageProps {
  readonly viewModel: HomePageViewModel;
}

export default function HomePage({ viewModel }: HomePageProps) {
  return <main aria-label={viewModel.mainLabel} className="flex-1" />;
}
