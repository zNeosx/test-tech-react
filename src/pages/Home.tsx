import { Button } from "@/components/ui/button";

import { getUsers } from "@/api/user/routes";
import pdf from "@/assets/documents/test_technique_reactjs.pdf";
import UsersTable from "@/components/UsersList";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const { users } = await getUsers();

  return { users };
}

const Home = () => {
  const { users }: any = useLoaderData();

  return (
    <section className="">
      <div className="bg-secondary rounded-lg w-full flex flex-col gap-6 items-center text-center px-4 py-8">
        <h1 className="text-4xl font-normal">Why This Test ?</h1>

        <p className="text-xl text-muted-foreground max-w-xl font-light">
          The purpose of this technical test is to validate a minimum level of
          knowledge in ReactJS.
        </p>
        <p className="text-xl text-muted-foreground max-w-xl font-light">
          Anyone who needs my services as a React front-end developer can
          analyze my code and deduce my level in this exercise at the time it
          was coded.
        </p>
        <Button>
          <a
            href={pdf}
            target="_blank"
            className="flex items-center gap-2 font-normal"
          >
            Read the topic
          </a>
        </Button>
      </div>

      <UsersTable users={users} />
    </section>
  );
};

export default Home;
