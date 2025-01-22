import Header from "../../components/Header";
import { useLocation } from "react-router-dom";

interface ProfileData {
    email: string;
    name: string;
}

const AuthenticatedUser: React.FC = () => {
    
    const location = useLocation();
    const { email, name } = location.state as ProfileData;

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center min-h-screen  bg-custom-bg bg-cover bg-center h-screen">
                <div className="bg-zinc-800 p-6 rounded-xl shadow-2xl shadow-teal-400 w-72 h-52 text-center ">
                    <h2 className="text-4xl text-teal-50 font-bold mb-8">Bem-vindo!</h2>
                    <p className="text-xl text-teal-50 te mb-4" >Nome do usuario: {name}</p>
                    <p className="text-xl text-teal-50 te mb-4">Email: {email}</p>
                </div>
            </div>
        </>
    )
}

export default AuthenticatedUser