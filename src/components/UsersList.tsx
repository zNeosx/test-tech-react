import { IUser } from "@/types/users";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { BookOpen,  Phone, UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { buttonVariants } from "./ui/button";

const UsersTable = ({ users }: { users: IUser[] }) => {
  return (
    <Table className="my-8">
      <TableCaption>List of Users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Adress</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Posts</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
        <TableCell className="text-right">$250.00</TableCell> */}
        {users.map((user) => (
          <TableRow key={user.id} className="font-light">
            <TableCell className="whitespace-nowrap">
              <div className="flex items-center gap-2">
                <UserCircle2 className="font-light" />
                <div className="flex flex-col ">
                  <span>{user.name}</span>
                  <span className="text-muted-foreground">
                    @{user.username}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell className="whitespace-nowrap flex flex-col">
              <span>{user.address.street}</span>{" "}
              <span className="text-muted-foreground">{user.address.city}</span>
            </TableCell>
            <TableCell className="whitespace-nowrap">
              <div className="flex items-center gap-2 w-max bg-primary/20 py-1 px-2 rounded-full text-primary font-normal">
                <Phone size={15} />
                {user.phone}
              </div>
            </TableCell>
            <TableCell className="whitespace-nowrap">
              {user.company.name.toUpperCase()}
            </TableCell>
            <TableCell className="whitespace-nowrap">
              <Link
                to={`/user/${user.id}/posts`}
                className={clsx(
                  buttonVariants({
                    variant: "secondary",
                  }),
                  "hover:text-primary"
                )}
              >
                <BookOpen />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
