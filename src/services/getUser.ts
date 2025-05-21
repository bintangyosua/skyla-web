export default async function getServerSideProps(id: string) {
  const response = await fetch(`/api/discord/users/${id}`);
  // console.log(id);
  const data = await response.json();
  // console.log(data);
  return { props: { data: data } };
}
