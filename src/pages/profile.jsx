import { useLogin } from "../hooks/useLogin";
export const ProfilePage = () => {
    const username = useLogin();
    return (
        <div className="pt-20">
            <h1>Halo, selamat datang</h1>
            <p>Username: {username}</p>
        </div>
    )
}

export default ProfilePage;