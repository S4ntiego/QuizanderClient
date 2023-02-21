import { useRouter } from "next/router";

export default async function QuizPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>siema</div>;
}
