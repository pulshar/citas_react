

const ErrorAlert = ( { children } ) => {
  return (
    <div className="p-3 bg-red-500 text-center rounded-md mb-5 text-white font-bold">
            {children}
    </div>
  )
}

export default ErrorAlert