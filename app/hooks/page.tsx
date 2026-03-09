import Useeffect from "../components/hooks/Useeffect"
import Usereducer from "../components/hooks/Usereducer"
import Useref from "../components/hooks/Useref"
import Usestate from "../components/hooks/Usestate"

const Hookpage = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen p-4 flex flex-col justify-center items-center gap-2  text-white my-4">
       <h1>Hook page</h1>
       <Usestate />
       <Useeffect />
       <Useref />
       <Usereducer />
    </div>
  )
}

export default Hookpage
 