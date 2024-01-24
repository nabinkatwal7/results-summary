import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center content-center gap-2 w-screen min-h-screen">
      <div className="shadow-2xl rounded-lg flex flex-col lg:flex-row gap-2 lg:min-h-[500px]" >
        <div className="container bg-[#5F3FFC] p-4 rounded-lg flex flex-col justify-evenly items-center">
            <p className={"text-[#C9C2FF] text-3xl"} >Your Result</p>
            <div className={"flex flex-col justify-center items-center p-10 rounded-full bg-[#4A24CF]"} >
                <p className={"text-white text-6xl font-bold"} >76</p>
                <p className={"text-[#C9C2FF]"}>out of 100</p>
            </div>
            <p className={"text-white text-4xl"} >Great</p>
            <p className={"text-center text-[#C9C2FF]"}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
          <div className="container flex flex-col justify-evenly p-4 rounded-lg">
              <p className={"text-[#3E4059] text-3xl font-bold"}>Summary</p>
              <div className={"flex flex-row justify-between p-2 rounded-lg bg-[#FFF6F5]"}>
                  <div className={"flex flex-row content-center gap-2"}>
                      <img src="/assets/images/icon-reaction.svg" alt="icon"/>
                      <p className={"text-[#FFA19D]"}>Reaction</p></div>
                  <div className={"flex flex-row font-bold"}><p className={"text-[#3E4059]"}>80</p><p
                      className={"text-[#929095]"}>/100</p></div>
              </div>
              <div className={"flex flex-row justify-between p-2 rounded-lg bg-[#FFFBF2]"}>
                  <div className={"flex flex-row content-center gap-2"}>
                      <img src="/assets/images/icon-memory.svg" alt="icon"/>
                      <p className={"text-[#FFA19D]"}>Memory</p></div>
                  <div className={"flex flex-row font-bold"}><p className={"text-[#3E4059]"}>91</p><p
                      className={"text-[#929095]"}>/100</p></div>
              </div>
              <div className={"flex flex-row justify-between p-2 rounded-lg bg-[#F2FBFA]"}>
                  <div className={"flex flex-row content-center gap-2"}>
                      <img src="/assets/images/icon-verbal.svg" alt="icon"/>
                      <p className={"text-[#5AAF9C]"}>Reaction</p></div>
                  <div className={"flex flex-row font-bold"}><p className={"text-[#3E4059]"}>80</p><p
                      className={"text-[#929095]"}>/100</p></div>
              </div>
              <div className={"flex flex-row justify-between p-2 rounded-lg bg-[#F3F3FD]"}>
                  <div className={"flex flex-row content-center gap-2"}>
                      <img src="/assets/images/icon-visual.svg" alt="icon"/>
                      <p className={"text-[#1B228A]"}>Reaction</p></div>
                  <div className={"flex flex-row font-bold"}><p className={"text-[#3E4059]"}>80</p><p
                      className={"text-[#929095]"}>/100</p></div>
              </div>
              <button className="bg-[#5F3FFC] p-3 rounded-full w-full text-white">Continue</button>
          </div>
      </div>
    </div>
  );
}

export default App;
