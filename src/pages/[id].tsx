import { useRouter } from "next/router";


export default function idTablePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>
        <div>
          Table Page for ID: {id}
        </div>
        <div>
          Hello World
        </div>
      </div>
    </>
  )
}