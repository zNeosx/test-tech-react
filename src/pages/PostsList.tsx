import { getUser, getUserPosts } from "@/api/user/routes";
import PostCard from "@/components/PostCard";
import UserHeader from "@/components/UserHeader";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Postschema } from "@/lib/validations/post";
import { IPost } from "@/types/users";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { CornerDownLeft, FilePlus2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import { InferType } from "yup";

export async function loader({ params }: { params: any }) {
  const { posts } = await getUserPosts(params.id);
  const { user } = await getUser(posts[0].userId);

  return { posts, user };
}

function PostsList() {
  const { posts, user }: any = useLoaderData();
  const { toast } = useToast();

  const [postsList, setPostsList] = useState(posts);

  const form = useForm({
    resolver: yupResolver(Postschema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: InferType<typeof Postschema>) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: values.title,
        body: values.content,
        userId: user.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newPost = await response.json();

    setPostsList((prev: IPost[]) => [
      ...prev,
      {
        id: newPost.id,
        userId: newPost.userId,
        title: newPost.title,
        body: newPost.body,
      },
    ]);

    toast({
      className: "bg-success/70 text-success-foreground",
      title: "Congratulations !",
      description: "Your post has been added successfully.",
    });
  };

  return (
    <section>
      <Link
        to={"/"}
        className={clsx(buttonVariants(), "flex items-center gap-2")}
      >
        <CornerDownLeft />
        Return
      </Link>

      <UserHeader user={user} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Card
              className={clsx(
                buttonVariants({
                  variant: "outline",
                }),
                "w-full h-full flex items-center justify-center group animate cursor-pointer border-2 border-dashed hover:border-primary"
              )}
            >
              <CardContent className="p-0 group-hover:text-primary animate flex items-center gap-2">
                <FilePlus2 />
                <span>Add Post</span>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add post</DialogTitle>
              <DialogDescription>Make your new post here.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                      <FormLabel className="">Title*</FormLabel>
                      <FormControl className="flex-1 ">
                        <Input type="text" className="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                      <FormLabel className="">Content*</FormLabel>
                      <FormControl className="flex-1 ">
                        <Textarea rows={15} className="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Create post</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {postsList.map((post: IPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsList;
