import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";

const cardsData = [
  {
    id: 1,
    rate: 8.9,
    title: "Pulp Fiction",
    src: "https://s3-alpha-sig.figma.com/img/cf17/af98/7703b40890cd1344aa613664135f2e57?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bs55UOPnoS5YwrbccP06wX2XIUbgCFNefqGicuwCTIPg1ohjWSJR~4skOormF1dA7WNtpy7jmODZObHLkIJ6guBRWi3IYcao-yQaV-e~ds2O9o2YwsIRP2ru7j3jvBItZsfvnfeBrv7rkyqhNnTOx4Vpmw2sVHvieDfNShf2bWGFdp0ZkB~~AOlsuX~GY571dbeQQS0dvEqfrIbqpJae3Oiv-H-gsZW-6sO4Gxz7iGBvxGi~ezGRAd5i4WRneJ0pD5Ml8X03w4~ArsBMHfN-j-yJYkzGze~pl7vDbuMuEag0rZLbAVq1en9diB8DgxwJlyb3yWEJURCJj~s8lU8iFA__",
  },
  {
    id: 2,
    rate: 8.9,
    title: "The Lord of the Rings: Fellowship of the Kings",
    src: "https://s3-alpha-sig.figma.com/img/6c1e/36de/9221fa86d0b4e1a635830dc0332c811e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hnehUxosd5xxPp7nH11H8V2oM70qGF8w9VUcFuXjR9dQFKo~W71nT-RHVvSAD~r7KNhyC4hR3MjN3tihFZRmvMyS0PrAtWxCGRRggMmVkE9OmN2S0iwfT23W2sQ7pKw6dAJLG9i8I~v0K5xkosDJ~ZJHYQ-o-73pFqla~lXID8YaYVmiEFw3squ2Ynu~aV2~2H8amrQTkejFSYcmThC-HwGdYnsxcbYnNnW3oXpI2vdwpDzAe5uwp0pkIVWnqNLb9KWKfUMX24RXoM2KJ0vve~RJwKk6umgHmQtu028ETupdcFVhuHAKpataQRBOuSOEezau5VPOOjLaAJqq3ErPUA__",
  },
  {
    id: 3,
    rate: 8.8,
    title: "The Good, the Bad and the Ugly",
    src: "https://s3-alpha-sig.figma.com/img/706b/eb6b/0ee523250991ecb1d87699f60c1073d9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RQaWbiZXlCwq4GPFz80Bzz50jeE6wiWr0yFpcxvCpNHVHoPNA6nxRa19H6o10oRNkROG~Ey7Mh0y2h4~CHrAqOeKJYIsz5QNlskHeU~tmZurYsg1G7B8auwRVwjPTPhhCKyMMhybY5UB6dWp3bfHrFtwVjqyai7S4QKPcRyjpewwDyR5KmjUYKGjPqfjjvavKYFu1F9gEkH5fBctM-KgG9Y1Yx5Qq-MrDWrrOtow8EHL-aeZTiYDRvQbrnJIDX6qwPKZvYFhMKwtqLiKhd-9hgNFZ4A9ZwWzI0xXFoA5oW5TzA2tbVMLT~bzcXcsFpvT5H9hdvckb3uWzvLJJSplEw__",
  },
  {
    id: 4,
    rate: 8.8,
    title: "Forrest Gump",
    src: "https://s3-alpha-sig.figma.com/img/df80/0d0a/908ecd9eb3fe52f587a5e1d0d29006ac?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HFHiCwRmj7X9Q3iVtRwvWSWmmMybiger-tDspAUl5l4jJhNsoXq4Gjjg0a~J3UJCo4XM-5LiUdqfpZKQshGa22nLKDuzflChTuMBj9Te-ehg400Zvn7WTAfM4yFLcNbXwTdmvGDT4fC7wJx2~y8XNyaytadgIgt8jMboT9BQnx9jtX6QpYmi1QAgs1DJFIWX-r9qb1GmJMUGZCezNYCKEGhsAzAlP0bfocKGuvN4~XsvakU6i-oTjUVfJnO2TSJ1PqkquVV94Iq3O9dGhF3e0go8cmfoWz6F2XPS4OHS8SxPvOGAnh4cYyKaROElfSKgVHQzmErhDI2ECtqQqq~ahg__",
  },
  {
    id: 5,
    rate: 8.8,
    title: "Fight Club",
    src: "https://s3-alpha-sig.figma.com/img/d866/cb3c/ba3f0c5f843cce238d40df0684d88488?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JoWY9o9kHxn7EIa9kySMo3Y5Z3euZMwP3Bf8uJNYOaG1RzrQ~yy0wtFbNsx-~2SdpqacAWSlqVwTQ2ph5GBN50ZuvQnXb2Fgq1A7bvPxXJX~CDjYeLYC~9nRH3Ee-vsRR8FKHA6EaUpn5nG8JNt-ZmiFHXBJqU5IuHvhz8RYuEJL86qVzVS~~qXEGHX~uMVZXykT3n2bPngvuJ~Kgl0tZgi4xDq3-ECmEMnEU7ZQStMByAV52jb6YxGx2BqbDAfrVTvEgL6KxIhegp04Wz9gdtOsZqJ6Ryw5wUCcDW6XYtK1YDPqdikr6eP8H0w0Ze-42QBh61vlGcrqR9pqKjNdMA__",
  },
  {
    id: 6,
    rate: 8.6,
    title: "Saving Private Ryan",
    src: "https://s3-alpha-sig.figma.com/img/10f8/b0b2/fb5855ff72d7afbffcb7e63d2a0ed956?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n0AdbaB-gWtKrxz3woBqyo4-BZZBlswNPZ~jWiVKsf8m-7TgFtPtgWIbLLu9aFi5~gk9-VGi6d1fuQ1OC-ysUOGvSRr2lpcqY48BItHeVl0uTeyts0uKieaIHRtfsXOtvY9SDICwV4SMvVkPgxgzH0XqUTE92cyYiYy1thzci~ZXELsFo-MBVc4afc8pfrKsWFkmKqrrGVUv5lseoFkopa7NfUyP9251SoSCD5p90CpjXwTCUD1UyaUyZbNk66ALLu70jeZqs8vvZSlJa6JDf3hfvsAPuHK8xbB4KuXl7A24yVLIqnP6PIQ98~AyQahwhkI3aYmdQ~tje62xvU1crA__",
  },
  {
    id: 7,
    rate: 8.6,
    title: "City of God",
    src: "https://s3-alpha-sig.figma.com/img/2e25/409a/4c2ed4d2de131a5a578da7c6661daca9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XDmz7Sc3nd-cFfSOx~ppMxiLoVFUUiKbUUvNqaJjs5RbGhI5Jut4C7Ehihpq3Q3VFfSw-hB6T1AyTyNQSaj2aPijX6HcAMnMaG7qmQRitCZ1sWW~HjS1hysIABBbn7WWbGk5T14qLskharK6D89DXwvhQk-QJ4ikRWSFt81h1pE3waQGMXxBK1YgqYVx6WB4y-zJgdUU8Bpsko62cGNTDoMCQXOokbmqQjlXYgWasIXLlNHDF2qt2jJsM7qleKDLgGXPBbNlkKuiaWWWHURe~DV-0IFWDkBsOlZy9CJtUvDD1Gk2mLEOM3dFkw-18Qz2GVhshI9JgeoUBdMWqMMnMA__",
  },
  {
    id: 8,
    rate: 8.6,
    title: "The Green Mile",
    src: "https://s3-alpha-sig.figma.com/img/3c89/618f/d6e7943c1ccbd074c826b6305cd89425?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tyb2AEOYxYs4RXVu3ogFNZGTEjYcK8aY-Cho9i--nEFk0UXnNPAxpreYr7HYFu8CBbB2Jx6xsv5sEIo6cOVcVgO7Gh2rH73yhjoBDcgZM84KRv8t5Gy9xdzgs8dHGtKoVtzjaowAkE0iypP~OdqNiNwThcnB0jjpw7aMTh6okKgIHPjp2wX7hjcWeFAt3wgJsRU454WqjPNyDBf6NGV5uFKQUZsxW1OPbIcpyi00slXKVLGVPZQVCb7GWHmikYYZU9GUMBwRTtQThtbzrHrCGN5NqkjHQt-UhZueTJ752biDE3MdQm28aeYvq4lL8WGOe7c8~S1RV70Jct9tTLupsw__",
  },
  {
    id: 9,
    rate: 8.6,
    title: "Life is Beautiful",
    src: "https://s3-alpha-sig.figma.com/img/efcd/4e59/ee05b883c3fe14fee45058479e958594?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EW-2BjFFVK2N4kr6KvYC4ZeKvOuwAgokgzJTnr~XTSwHJ5-F95IrfSLtSFryJLbnwvTpVfLX4VVVJzlyM1iTqNQ9C7xHhxpaFHblJ9yBGSpTMhcPfDkH2K0SV02dTNEobUBV06uzAAHwDTeLG~KacvSnO2cKFhcVPORFnBiWgkqnpDPckdzersLa3~YXj8gj~TbseXA9YNAgMy~-4vkn6bxB1lKiqtxrCtzgYNTDo-4H15gUUc-aOQZvn3zRq8PtbiN4aMiJQdGiIPCb~xpasTRpR-YE3McxqMNH7IMvNeAcz-heUfyCSlIMwSoYV0gsDykesq3kbvR3oUHZHeonww__",
  },
  {
    id: 10,
    rate: 8.6,
    title: "Terminator 2: Judgement Day",
    src: "https://s3-alpha-sig.figma.com/img/9b5c/2b39/321996ea21e05ed372aa26ac4e0d889d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fVhl12BG7PdG~jYiHoeUBk3sgnx-ZZcdOERwiuNkg-rbkHEVojAAo3Frn0ENFQUO2lbuLDuFMm6acpn5w3REGQNijt1M-t2YjXpKJN9in7ZWkeRGdis7~NBDKDXkuo9rY8b7T7KifF03WmAHwWM7ejrpkyWhTMAUqiFHdcStw5tEiqP6TDR-U7fCYasqHMjRna9yF~jNaaLvP26btKjMexPgniCUEn~2iBYFvJrnQlbfwxQuROy3hGZmZ53wlfB8pfeBFraPBS2kqm~pjME9LuJxnuFMCMTgabqTds2YkyAxQS4Z6~x9vXt1a5uobUcF1ZfWQcwASjP~xD5t6m1csg__",
  },
];

export const TopRated = () => {
  return (
    <div className=" px-[80px]">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600]">Top Rated</p>
        <button className="text-[14px] font-[500] flex gap-[8px] items-center">
          See more <ArrowRight className="stroke-[1.2px]" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-[16px]">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            rate={card.rate}
            title={card.title}
            src={card.src}
          />
        ))}
      </div>
    </div>
  );
};
