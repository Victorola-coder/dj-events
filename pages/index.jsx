import Layout from "@/components/Layout";
import EventItems from "@/components/eventItems";
import { API_URL } from "@/config/index";
import Link from "next/link";

export default function Home({ events }) {
  // console.log(events);
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>

        {events.length === 0 && <h3>No events yet</h3>}

        {events.map((evt) => (
          <EventItems evt={evt} key={evt.id} />
        ))}

        {events.length > 0 && (
          <Link href="/events">
            <button className="btn-secondary">See more</button>
          </Link>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log(events);

  return {
    props: { events: events.splice(0, 3) },
    revalidate: 1,
  };
}
