import { cookies } from "next/headers";
import Testpages2 from "./_component/section";

const Testpage = () => {
  const cookieStore = cookies();
  const tokens = cookieStore.get("token");
  console.log(tokens);
  return (
    <>
      <Testpages2 token={tokens} />
    </>
  );
};
export default Testpage;
