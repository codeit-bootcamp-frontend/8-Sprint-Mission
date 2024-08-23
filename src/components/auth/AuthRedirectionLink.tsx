import Link from "next/link";

interface AuthLinkProps {
  descriptionText: string;
  linkText: string;
  href: string;
}

export default function AuthRedirectionLink({ descriptionText, linkText, href }: AuthLinkProps) {
  return (
    <div className="flex justify-center gap-[4px] text-[14px] font-medium text-gray-800">
      <p>{descriptionText}</p>
      <Link className="underline text-brand-blue" href={href}>
        {linkText}
      </Link>
    </div>
  );
}
