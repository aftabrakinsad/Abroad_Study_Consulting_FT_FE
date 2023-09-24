import MyLayout from "@/pages/component/layout";
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/adminlayout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";

export default function AdminProfile({ data }) {
  const router = useRouter();

  if (!data) {
    return <div>Error fetching admin data.</div>;
  }

  return (
    <>
      <SessionCheck />
      <MyLayout title={data.id} />
      <AdminDrawer />

      <UserLayout
        id={data.id}
        username={data.username}
        email={data.email}
        address={data.address}
      />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  try {
    const response = await axios.get('http://localhost:3001/admin/' + id);
    const data = response.data;

    return { props: { data } };
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return { props: { data: null } };
  }
}