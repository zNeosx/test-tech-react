import { IUser } from "@/types/users";
import { Building2, UserCircle2 } from "lucide-react";

const UserHeader = ({ user }: { user: IUser }) => {
  return (
    <div className="bg-primary text-primary-foreground flex flex-col items-center justify-center gap-4 p-10 my-8">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <UserCircle2 size={60} />
        <div className="text-center md:text-left">
          <h2 className="text-2xl">{user.name}</h2>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Building2 size={16} />
            <span className="text-sm">{user.company.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
