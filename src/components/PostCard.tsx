import { IPost } from "@/types/users";
import clsx from "clsx";
import Modal from "./Modal";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";

interface Props {
  post: IPost;
}

const PostCard = ({ post: { userId, id, title, body } }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="hover:bg-secondary animate group flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body.substring(0, 150) + "..."}</p>
      </CardContent>
      <CardFooter>
        <Modal
          isOpen={isOpen}
          onClick={() => setIsOpen((state) => !state)}
          textTrigger="Read More"
          data={{ userId, id, title, body }}
          triggerClassName={clsx(
            buttonVariants({ variant: "secondary" }),
            "group-hover:bg-primary group-hover:text-primary-foreground animate"
          )}
        />
      </CardFooter>
    </Card>
  );
};

export default PostCard;
