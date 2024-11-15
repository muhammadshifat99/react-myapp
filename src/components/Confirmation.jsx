export default function Cinfirmation(props){
    return (
        <>
            <div className="py-5 mx-5 my-5 bg-slate-200 w-30 rounded-lg shadow-xl text-black">
                <div className="pb-3 text-2xl font-bold border-b-2 border-sky-600">{props.heading}</div>
                <div className="my-4 font-bold font-serif">{props.body}</div>
                <div className="justify-center items-center flex gap-4">
                    <div className="btn btn-info ">Cancel</div>
                    <div className="btn btn-error ">Confirm</div>
                </div>
            </div>
        </>
    )
}