import { Herosection } from "@/components/Herosection";
import Page from "@/app/(tests)/productpage/page";

export default function Home() {
  return (
    <div>
      <div className="pb-20">
        <Herosection />
      </div>
      <div>
        {" "}
        <Page />
      </div>
    </div>
  );
}
