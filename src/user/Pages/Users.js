import UsersList from "../Components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "jagadeesh Talari",
      image:
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
