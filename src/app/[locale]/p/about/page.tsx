import { FootBar } from "@/components/elements/FootBar";


export default function About() {
  return (
    <div className="w-screen">

      <div className="w-full p-10 flex items-center justify-center">
        School section
      </div>

      <hr />

      <div className="w-full p-10 flex items-center justify-center">
        Teachers list
      </div>

      <hr />

      <div className="w-full p-10 flex items-center justify-center">
        Students list
      </div>

      {/* <div id="school">
        <TextFade direction="down">
          <School />
        </TextFade>
      </div>

      <div id="team">
        <Teachers />
      </div> */}

      <FootBar />

    </div>
  );
}
