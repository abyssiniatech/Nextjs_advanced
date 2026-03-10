import Childcontext from "../components/hooks/Childcontext"
import Useeffect from "../components/hooks/Useeffect"
import Usereducer from "../components/hooks/Usereducer"
import Useref from "../components/hooks/Useref"
import Usestate from "../components/hooks/Usestate"
import Parentstate from "../components/hooks/Parentstate"
const Hookpage = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen p-4 flex flex-col justify-center items-center gap-2   my-4">
       <h1>Hook page</h1>
       <Usestate />
       <Useeffect />
       <Useref />
       <Usereducer />
       <Childcontext />
       <Parentstate />
    </div>
  )
}

export default Hookpage
 