import Link from "next/link";
export default function StudentInfo({ name, link }) {
  return (
    <div>
        <p>{name}</p>
        <Link href={link}>
        Github Link
        </Link>
    </div>
  );
}