import React from "react";

// Mock data for rewards
const rewards = [
  {
    id: 1,
    title: "Complimentary Breakfast Item",
    description: "Enjoy an additional breakfast item during your stay.",
    imageUrl:
      "https://media.cntraveler.com/photos/5a380338bbb64f1f2f4ef8de/master/pass/MAG18-JANFEB-HOTEL-BREAKFAST-hranek.jpg",
    redeemable: true,
  },
  {
    id: 2,
    title: "30 min Facial",
    description:
      "Relax and unwind with a complimentary Facial at Lotus Hotels Spa.",
    imageUrl:
      "https://connecticutexplorer.com/wp-content/uploads/2021/07/shutterstock_232040587.jpg",
    redeemable: false,
  },
  {
    id: 3,
    title: "Air Miles",
    description: "Redeem your NFT token for Air Miles.",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwifihifi.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fair-miles-card.jpeg&f=1&nofb=1&ipt=7c9a2d47d7cf03fff147991f679ef917a84ad4b53d949078959ed1c8c42d707f&ipo=images",
    redeemable: false,
  },
  {
    id: 4,
    title: "Mini Bar Snack",
    description: "Choose any of the three available snacks from our mini bar.",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0448%2F7554%2F6777%2Ffiles%2Ftorn-ranch-minibar-contemporary.jpg%3Fv%3D1598388721&f=1&nofb=1&ipt=ee32acbc69504bfa97eea3459c22f4f6f043e3540f2657b0ae32ea7bb6bdb5e6&ipo=images",
    redeemable: true,
  },
  {
    id: 5,
    title: "Mini Bar Drink",
    description: "Choose any of the four available drinks from our mini bar.",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Ffacd4f037544c0bb1b3ad015a873b6a30d8ba05e%2Fc%3D0-227-3000-1915%2Flocal%2F-%2Fmedia%2FDetroitNews%2F2014%2F09%2F28%2Fminibar2.jpg%3Fwidth%3D3200%26height%3D1680%26fit%3Dcrop&f=1&nofb=1&ipt=daae943121c9f2bb4de2c62afbbd50dde602f410ff79ba0b93530b5490aea549&ipo=images",
    redeemable: true,
  },
  {
    id: 6,
    title: "Tea Selection Upgrade",
    description: "Get up to 4 additional premium tea selections for your stay.",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.honestbrandreviews.com%2Fwp-content%2Fuploads%2F2022%2F06%2FTea-Forte-Review-9.jpg&f=1&nofb=1&ipt=81acbdf5b152666f6fe69aa60482026bf0998abbd3ff82eb5a849053cb2f13de&ipo=images",
    redeemable: true,
  },
];

const Assets: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Redeem your rewards here!</h1>
      <p className="mb-4">
        The more you use the QR code, the more eligible you become for rewards!
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="overflow-hidden rounded-lg border shadow-md"
          >
            <img
              src={reward.imageUrl}
              alt={reward.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{reward.title}</h2>
              <p className="mb-4 text-gray-600">{reward.description}</p>
              <button
                className={`rounded px-4 py-2 transition-colors ${
                  reward.redeemable
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "cursor-not-allowed bg-gray-300 text-gray-500"
                }`}
                disabled={!reward.redeemable}
              >
                {reward.redeemable ? "Redeem" : "Not Available"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
