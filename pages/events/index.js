import Layout from "@/components/Layout";
import EventItems from "@/components/eventItems";
import { API_URL } from "@/config/index";

export default function Events({ events }) {
  // console.log(events);
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>

        {events.length == 0 && <h3>No events yet</h3>}

        {events.map((evt) => (
          <EventItems evt={evt} key={evt.id} />
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
