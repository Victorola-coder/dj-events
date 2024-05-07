import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import styles from "@/styles/EventPage.module.css";

export default function Event({ evt }) {
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.control}></div>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = res.json();

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const event = await res.json();

//   return {
//     props: {
//       evt: event[0],
//     },
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);

  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}

// get static path and get static props
