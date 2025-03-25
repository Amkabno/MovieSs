import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";

const cardsData = [
  {
    id: 1,
    rate: 7.9,
    title: "Dear Santa",
    src: "https://s3-alpha-sig.figma.com/img/6415/2808/0ffbeccc1a7cdd3a5199e0755d66e253?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AS8EPdv~x6yXBnnCr0HtPNJMQXl-w6OMtVgOn9Wbk1RRRL035pJR2d2Tkap6qL~U64gN-riv3BME6UsCZqtlcicIgQQgRiyhoPU7-p5ZbromcjFJYAufoGYM4kslHlprbM0X~1jOkC73qDXodFn0kPmInBKyR~jrr3VJuDw8VzUXtt~Wn9WTHRwHW8ImiK-fxL9Y6w1S~rxm~zQqniv7ux1qqb0eKyjezE-jYTT8MkY2ZYR5xgfJwDZ-8GQv1ZPfy2BCsSF6AcSyaruAwgZRMBFMIMJG3ZMX0l1Sn9vuVxRcVBfiTiInXM8hHpf7tUrPdvObSCZl97XHhwZHz0Inng__",
  },
  {
    id: 2,
    rate: 7.9,
    title: "How To Train Your Dragon Live Action",
    src: "https://s3-alpha-sig.figma.com/img/4b08/7764/bc03cf6c5fe844d5ce89f9658466dfef?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Cx1~GE5DZzazAXv5LtLuPktDuwJlTjgqFK9HRYxPbXXVG6BVXq10FgTCk-l2hVuJ9Y8dWkVIkWbnXPHWN9Io-~3DO6N4wgnSrus2wkZ43vZOOq1YOJamaOJG-QIoVBF0vLUrDmSZtU2LfpoMREaOIwZNnA9f81bwgIMhxmjdrat-NjDbb9DSRSg4Lvsga464cxh4MiJ7ehFDJ1lHuXFrh6F1vlSqQtnYzQpcDMuHWiVCBF9LjEy6jaLO~LfLd6E5zWL0IXUWhCsKHy0EHLh2gC4KPkpxMAyPqR46upwXWayqlWXOhIkKe3eaM6Aa1lqapb5KhvJgNZBh5ayfKTTe5Q__",
  },
  {
    id: 3,
    rate: 9.0,
    title: "Alien Romulus",
    src: "https://s3-alpha-sig.figma.com/img/7aa1/1575/96c5c5026e3cccbd4a9ca91b9d63dc7a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fK44S7O~43dIBHWj4ZLaFUxdsPi~l8Nje4~btQ11yGnMd2iKsct0jRmll2mPdYTdcl5Vj38Qpo3V0i55CsQlyfJyTj5xVaxUGfZu~NJLogCWdps90hHeTXV4IwMIR48BIWuWNQ9oh-fRj7A07wtSw9KNPOnTYG6E8RuxmmnUzMvlgclCc1wzEt48sf1KTAKssdgpM4x5mhYOvxMhwT~G5HcCH-Ojgm7lnEVyOSxxb8-9CU9StCen6ftdDVDrXIGXh5xkG3u--cPO9N-gs16sZ-flhQHfheJSZUjCUg2DANsdrMRZemdNGrlxpeuykKPDHp9a0vs~sQ7PjMay0W2F4w__",
  },
  {
    id: 4,
    rate: 8.2,
    title: "From the Ashes",
    src: "https://s3-alpha-sig.figma.com/img/a2ea/3dd2/e396dc1c5e4ace3bda976b474aaef0b3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jSVOCcitc7v5TNiO-O5toGH2qnrLSgvtnJyCqhl4liTWwVVJB8VY-ukD1cKJy1kX0JV3p~gaW-JDkxMPVv7QPCUbQhyomaL5s2hXy-NYujbM-9-wFJtbVt4JjvXgyc2Gn2nsO3qe4qbWRiC~lESu4tpOQ61TCn483V4d2t9hyBxe2pb8entjmIT5fprXpCmr8qQwWtvXuJWAsyMZv065oKkfe8t6z2GM2uOGTCYahCn9d~sm3KUqUCy3zyyCg35wQeYgw~45yj5oqMZNP1toGd87CZ6OYZ31oMiYRbykbIlgF8EZ9luMCSXgDzijZO8sSQJQt9koV5l5FDjO4~2e0A__",
  },
  {
    id: 5,
    rate: 7.6,
    title: "Spice Dogg",
    src: "https://s3-alpha-sig.figma.com/img/4225/7c9e/0fafe04642928fbdc70a93ae0f01002d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aO0FI0K00mY8XNxqsPjPOe8nIk4Cq3Xwn1p5QcDzEWTnncsWjILAr0fz~1L5mpwoiD6YmlY5OCoG7a3A3vIkaIUv7kbE8ZypdjGm2zTJr-G~T1Y~FnUll8QltBLXda0ozesVgilrf3qhS3Cx93rjbo3R4jbGkBT8mebjZwI7emM3pjlyf92vFQV8lnFD2b9zI-rM8N8UkUsl06AgZaxJUS52paV15zvcahUHzZdFBxVG8BcgCijdf5TlqCAPcmxyPr97NjOYnwHAXcvOfHo1OuvNTvj7TDXdONjMF9K14Xq6rPv9MOr4~Iu6K4qO-pxX~9Tvr22-0LxgH2GgKdqgug__",
  },
  {
    id: 6,
    rate: 8.1,
    title: "The Order",
    src: "https://s3-alpha-sig.figma.com/img/d9b1/c0d7/d14a24b806271aee27997170978ff626?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gr7ivtd~c8Krt5dwi~1sYaauSrreD~lhss1MP5cn3CNSLblOpJkeAGBY52BZhGBlYItQGkz4grlz6Uw1WRJGeq5yBSXknLl3myNovfygwy-9HGnYVL88sC8ZFDm2SItWc8BHWaDE8SjW9U1prAge6U~a6uKdXFBrdcAtv0Qh0BwSTWB1rEKTSLK8Ja9CcWvjaAyMrcqPY20W~VjJHiJh7G~uSeoY--rX9Zd~a~I8ETXnXEXyLesG44JNqunVAQPjuNybHU1Tc9WYgD6koZ8VZbUpDPYS360nAXyaCqVk5MzmCjSLuF8yoSgv5MlXj5Ent0Ty6mum24IP7K9516m14Q__",
  },
  {
    id: 7,
    rate: 7.4,
    title: "Y2K",
    src: "https://s3-alpha-sig.figma.com/img/9e65/3e1b/e01fc9c4092dfdecd24369e2487d8635?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZvRegjDCzO3tiH7YouxygZbxfxhY3ssUojapHFdPEYm2wGD0fUQfuBC8~q0yuBeE9pHHCdl2iyeNIsRD5LDdNLTPr4jt8kERKcg4pIgsrlFG3IIw~icFGpn-yZvdWL8bFlTFkArcD3XT3EYOgdqorp1hy3E0TIM4jwaLwgUqtnQN3Fc3e3nZV8Y7W~QCloRvAlo4w1WErRtWGfsNFcxdkpKW2TVj-P4Qve9JNnHvYyrOS0AGu9ZcEYU3aOHxPgTy7JLt~EZ7TQxCw4Yobtc-T3H~VbhVLi4JlLR6C-9s6Z-PgO6LZjluaEGGVAxhxTEK-bYwj6VhqlhiCAdRty~7qg__",
  },
  {
    id: 8,
    rate: 8.7,
    title: "Solo Leveling: ReAwakening",
    src: "https://s3-alpha-sig.figma.com/img/b356/27f6/7090bf8bfd9ce9490b6575d8d0114025?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jZ9vyW9CH6~sHJ3pV5X1YT1wlYNOWHUHWbQH6LdxK7cJ2I-gwFcIrY-9t-sOP~gdbOSUQjhQXZPAuiW8bCxzxqpaIvAfLZ7AtW6PSlNEIifYxruTV6EnoSrMhih6h45XIni2VNDiFbsH1Nfq8o-grL-Ij2VGlEZhBTVviuOtjU3wP0Sed69iPeKTnDC~SbQ~AkVVwm2xgw7fm9Ne08ydL2~9ET5ZSbees~~MnPcM~TrjpI-4NRWiRhiR7jf0yAAHPo14rBRnEWhlQ07hcNATkLRX4OfDLvZoVUFvBie1yvho0bVee5nVlwDgQrML-RsNLNvJMrfXiR8g6kJpE-MgYw__",
  },
  {
    id: 9,
    rate: 8.3,
    title: "Get Away",
    src: "https://s3-alpha-sig.figma.com/img/3272/77d4/dd6fe464242bf3ceb00cbf7c51bd7f42?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LCyAiTRJ4MdqXDkFMxiPHC1cVZHknaJOCHxtK03Ie6fQnVyP-TMCO8QzKIcEGbq5QDybeWRicsMw4Q1agEECrr9uFJSBVUEWg2v3CM9q6EvALLc4HT3QVp~tgqDKpxPDhKDRu2ja~RCGoPsK-PzRpjjIwI~Iu28Ha5qxjr-ftPct~u6YC8YMlo4twxN4fJGxZ-pKMqQ1U0fFsFN94x~870ry-QmPwWgIX~hFEea3t6h0xZ90PeaJTKBp5cjW12m4dYnDymx8I4IHsEYOUqzAnRM4I4CMkVCMbwff-ZXlab89C1ER0UwMXSCZGKs73wX7XmMO0-RqrWrhUoZQHfKTJQ__",
  },
  {
    id: 10,
    rate: 8.9,
    title: "Sonic the Hedgehog 3",
    src: "https://s3-alpha-sig.figma.com/img/1a78/359a/45da022f45cbd49977b6b63d7ecfb7c8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SWV-bEQ8EaDRjbjG~VGuQEs2OFSo50fkG7zthFHIgt04C82upSDrfmSUEd4xSRZJECqFbyBtRol48PHAIpNhFSTNfQNkdr4w-OTVPEtQwOUntOrs1rveUvn~tclYIINKhkG~3eJqJgRI8ZbnKwG6j9TWMXTE2cMsXNB2WZ0PBXnZTzjxQufUzQFRzWZJ2hpqu-9633mZyR9qqjIe1BV3MiBJYpYvihtHkcS17S3mEHrXgxdSUJFFR~qJx44e9aoK7CfQ0nYw6z-X1OgQZLNbzDhuuOmAs8RVMWweiIX--qPJPH7C7WHNh8h4lE9dqnWZvndtmEJQr1LKT-NyFSFjwQ__",
  },
];

export const Upcoming = () => {
  return (
    <div className="pt-[52px] px-[80px] flex flex-col gap-[8px] ">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600]">Upcoming</p>
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
