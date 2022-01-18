export default function Launches({ data }) {
  if (data === null) {
    return null;
  }

  return (
    <ol>
      {data.map((item, index) => {
        return <li key={index}>{item.mission_name}</li>;
      })}
    </ol>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
