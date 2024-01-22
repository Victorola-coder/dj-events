import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Home({ events }) {
  // console.log(events);
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>

        {events.length === 1 && <h3>No events yet</h3>}

        {events.map((evt) => (
          <h4 key={evt.id}>{evt.name}</h4>
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log(events);

  return {
    props: { events },
    revalidate: 1,
  };
}