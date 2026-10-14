import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OperationsGrid } from "./components/OperationsGrid";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { Sustainability } from "./components/Sustainability";
import { ExecutiveTeam } from "./components/ExecutiveTeam";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <OperationsGrid />
        <ImpactMetrics />
        <Sustainability />
        <ExecutiveTeam />
      </main>
      <Footer />
    </div>
  );
}
