import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("/api/events");
}
