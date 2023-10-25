import { IPost } from "@/types/users";
import { Loader2, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  textTrigger: string;
  data: IPost;
  triggerClassName?: string;
}
const Modal = ({
  isOpen,
  onClick,
  textTrigger,
  data,
  triggerClassName,
}: Props) => {
  const [comments, setComments] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
        .then((response) => response.json())
        .then((json) => {
          setComments(json);
          setIsFinished(true);
        });
    }
  }, [data]);

  return (
    <Dialog>
      <DialogTrigger onClick={onClick} className={triggerClassName}>
        {textTrigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="p-2">
          <DialogTitle className="text-xl">{data.title}</DialogTitle>
          <DialogDescription>{data.body}</DialogDescription>
        </DialogHeader>
        {isFinished ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MessageCircle />
              <span className="text-sm">Comments ({comments.length})</span>
            </div>

            {comments.length !== 0 ? (
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                {comments?.map((comment: any) => (
                  // <Comment key={comment.id} comment={comment} />
                  <div
                    key={comment.id}
                    className="flex flex-col gap-3 my-3 border-b-[1px] border-b-muted-foreground py-2"
                  >
                    <h3 className="font-normal">{comment.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {comment.body}
                    </p>
                    <span className="self-end italic text-sm">
                      {comment.email}
                    </span>
                  </div>
                ))}
              </ScrollArea>
            ) : (
              <div className="py-6 text-center">No comments found.</div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
