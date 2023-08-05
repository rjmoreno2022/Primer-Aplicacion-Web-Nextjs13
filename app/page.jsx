import Users from "@/components/Users";

async function fecthUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function IndexPage() {
  const users = await fecthUsers();
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <Users users={users}></Users>
      </div>
    </div>
  );
}

export default IndexPage