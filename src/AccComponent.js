

const AccComponent = ({acc,flag,hide,HideFunc})=>{
    
    const {title, body, id} = acc

    const Hide = ()=>{
            flag(id)
            HideFunc(hide)
    }

    return (
        <>
         <div className="p-4 w-6/12 m-auto my-5 border border-grey rounded-md shadow-md bg-white">
            <div className="flex justify-between">
                <h2 className="font-medium">{title}</h2>
                <p onClick={Hide}>{hide?"⬆️":"⬇️"}</p>
                
            </div>
            <hr className="mt-2 "></hr>
            <div className="m-4">
                {hide && <p>{body}</p>}
            </div>
         </div>
        </>
    )
}

export default AccComponent