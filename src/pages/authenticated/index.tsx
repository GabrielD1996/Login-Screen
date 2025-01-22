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
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded shadow-md w-96 text-center">
                    <h2 className="text-2xl font-bold mb-4">Bem-vindo, {name}!</h2>
                    <p className="text-gray-700 mb-4">Email: {email}</p>
                </div>
            </div>
        </>
    )
}

export default AuthenticatedUser