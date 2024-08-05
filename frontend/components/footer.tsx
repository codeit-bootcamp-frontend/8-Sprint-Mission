import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <p>@codeit - 2024</p>
      <div>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div>
        <Image src='twitter.svg' alt='트위터' width={24} height={24} />
        <Image src='facebook.svg' alt='페이스북' width={24} height={24} />
        <Image src='youtube.svg' alt='유튜브' width={24} height={24} />
        <Image src='instagram.svg' alt='인스타그램' width={24} height={24} />
      </div>
    </footer>
  );
}
