import Header from "../../components/Header";



const UnauthenticatedUser: React.FC = () => {
    
   
    

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded shadow-md w-96 text-center">
                    <h1> LOGIN DEU ERRADO ZÉ</h1>
                </div>
            </div>
        </>
    )
}

export default UnauthenticatedUser