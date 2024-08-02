import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section>
        <h1>일상의 모든 물건을 거래해보세요</h1>
        <Link href='/more'>구경하러 가기</Link>
        <Image src='banner-top.svg' alt='상단 배너' width={746} height={340} />
      </section>
      <section>
        <div>
          <Image priority src='landing-01.svg' alt='랜딩 이미지 1' width={588} height={444} />
          <div>
            <p>Hot item</p>
            <p>인기 상품을{'\n'}확인해보세요</p>
            <p>가장 HOT한 중고거래 물품을{'\n'}판다 마켓에서 확인해보세요</p>
          </div>
        </div>
        <div>
          <Image priority src='landing-03.svg' alt='랜딩 이미지 2' width={588} height={444} />
          <div>
            <p>Search</p>
            <p>구매를 원하는 상품을{'\n'}검색하세요</p>
            <p>구매하고 싶은 물품은 검색해서{'\n'}쉽게 찾아보세요</p>
          </div>
        </div>
        <div>
          <Image priority src='landing-03.svg' alt='랜딩 이미지 3' width={588} height={444} />
          <div>
            <p>Register</p>
            <p>판매를 원하는 상품을{'\n'}등록하세요</p>
            <p>어떤 물건이든 판매하고 싶은 상품을{'\n'}쉽게 등록하세요</p>
          </div>
        </div>
      </section>
      <section>
        <h1>믿을 수 있는 판다마켓 중고거래</h1>
        <Image src='banner-bottom.svg' alt='하단 배너' width={746} height={397} />
      </section>
    </main>
  );
}
