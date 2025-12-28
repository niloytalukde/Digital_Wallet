import { ProfileUpdateModal } from "@/components/Modal/profileUpdate";
import { UpdatePasswordModal } from "@/components/Modal/UpdatePassword";
import { useUserGetMeQuery } from "@/redux/features/User/api.user";
import { useBalanceQuery } from "@/redux/features/Wallet/wallet.api";


const Profile = () => {
  const { data: user } = useUserGetMeQuery(undefined);
  const { data: balance } = useBalanceQuery(undefined);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p">
      <div className="bg-background text-foreground rounded-2xl pb-4 overflow-hidden border border-border hover:-translate-y-1 transition duration-300 shadow-sm p-10">
        <img
          className="w-64 h-52 object-cover object-top justify-center flex mx-auto rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400"
          alt="user"
        />

        <div className="flex flex-col items-center px-4">
          <p className="font-medium mt-3">{user?.name}</p>
          <p className="text-muted-foreground text-sm">{user?.email}</p>

          <button className="mt-5 w-full rounded-full border border-border px-6 py-1 text-sm text-muted-foreground hover:bg-muted transition">
            Balance: {balance?.balance} ৳
          </button>
        </div>
        <div className="">
          <ProfileUpdateModal data={user}/>
          <UpdatePasswordModal />
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
