import { AccountCreation } from "@/components/appComponents/AccountCreation";
import { MintNft } from "@/components/appComponents/MintNft";
import { SocialWallets } from "@/components/appComponents/SocialWallets";

export default function Home() {
  return (
    <div className='flex flex-col space-y-10'>
      <AccountCreation />
      <MintNft />
      <SocialWallets />
    </div>
  );
}
