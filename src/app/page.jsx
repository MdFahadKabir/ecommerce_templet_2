import HotDealsCardList from "@/components/hotDeals/HotDealsCardList";
import Banner from "./(routes)/_component/Banner";
import ExclusiveOffers from "./(routes)/_component/ExclusiveOffers";
import ExploreCategory from "./(routes)/_component/ExploreCategory";
import FeaturedProducts from "./(routes)/_component/FeaturedProducts";
import Services from "./(routes)/_component/Services";


export default function Home() {
  return (
    <main className="">

      <div>
        <Banner></Banner>
        <ExploreCategory></ExploreCategory>
        <ExclusiveOffers></ExclusiveOffers>
        <FeaturedProducts></FeaturedProducts>
        <Services></Services>
        <HotDealsCardList></HotDealsCardList>
      </div>
    </main>
  );
}
