import Link from "next/link";

export default function StudentInfo() {
    const name = "Hung Dong"
    const githubLink = "https://github.com/hudo-ng/cprg306-assignments.git"
    return(
        <div>
            <h3>{name}</h3>
            <p><Link href="https://github.com/hudo-ng/cprg306-assignments.git">{githubLink}</Link></p>
        </div>
    )
}