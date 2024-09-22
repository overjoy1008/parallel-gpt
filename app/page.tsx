import MainLogo from "@/app/components/logo";
import Button from "@/app/components/ui/button";

export default function Home() {
  const id = 1;
  return (
    <main className="flex min-h-screen p-6">
      <div className="flex flex-col items-center justify-evenly">
        <MainLogo />
        <Button text="Start" type="main" href={`/${id}/chat`} />
      </div>
    </main>
  );
}
