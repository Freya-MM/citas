const Error = ({children}) => { //children es una palabra reservada de react
    return (
        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
            <p>{children}</p>
        </div>
    )
}

export default Error