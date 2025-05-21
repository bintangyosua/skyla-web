import { Session } from "next-auth";

export default async function getServerSideProps(session: Session) {
  const image = session?.user?.image;
  const splittedImage = image?.split("/");
  let arr: string[] = [];
  splittedImage?.forEach((e) => {
    arr.push(e);
  });

  const discordId = arr[4];
  // console.log(discordId);

  return discordId;
}
