import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Event({ evt }) {
  return (
    <Layout>
      <h1>My Event</h1>
      <h1>{evt.name}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);

  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
