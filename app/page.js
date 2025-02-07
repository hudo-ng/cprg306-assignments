import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="font-bold text-green-900 text-3xl mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p className="text-green-600 text-2xl mb-3">
        <Link href="./week-2">Week 2 Assignment</Link>
      </p>
      <p className="text-green-600 text-2xl mb-3">
        <Link href="./week-3">Week 3 Assignment</Link>
      </p>
      <p className="text-green-600 text-2xl mb-3">
        <Link href="./week-4">Week 4 Assignment</Link>
      </p>
      <p className="text-green-600 text-2xl mb-3">
        <Link href="./week-5">Week 5 Assignment</Link>
      </p>
    </div>
  );
}
