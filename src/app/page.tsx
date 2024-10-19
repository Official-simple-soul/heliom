import Header from './landing/Header';
import LandingPageIntro from './landing/LandingPageIntro';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <LandingPageIntro />
    </div>
  );
}
