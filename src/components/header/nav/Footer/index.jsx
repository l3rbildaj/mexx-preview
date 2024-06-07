import Link from "next/link";


export default function index() {
  return (
    <div className={" flex w-full justify-between sm:justify-around text-[12px] gap-[10px] text-black/70 "}>
        <Link href={"#"} lang="fr" target="_blank">Instagram</Link>
        <Link href={"#"} lang="fr" target="_blank">LinkedIn</Link>
        <Link href={"#"} lang="fr" target="_blank">Gmail</Link>
    </div>
  )
}


