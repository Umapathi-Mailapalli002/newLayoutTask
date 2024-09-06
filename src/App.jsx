import {LeftCard, RightPostion} from "./components/index"


function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#262b30] to-[#17181a] h-[100vh] '>
        <div className='mx-[3%] h-full grid grid-cols-2 gap-[4%] justify-center items-center'>
        <LeftCard/>
        <RightPostion/>
        </div>

      </div>
    </>
  )
}

export default App
