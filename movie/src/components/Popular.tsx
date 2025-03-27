import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";

const cardsData = [
  {
    id: 1,
    rate: 9.3,
    title: "The Shawshank Redemption",
    src: "https://s3-alpha-sig.figma.com/img/a5d5/80e9/c9924c8d3c5e8e941a5ba1d2e52d8b4b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OtMFnaVjn9~QaFeFLjQB-owm4ZnYe65dqwRCfTZ~kCvyMO2TwPJMnQwutPkBd3qp6B2qbhazYHYlVQbHHvSIIkA-6gD5cSqD1BIUCwRJe9Nyunu78zmdkBm0uaVcA1Kc2mmYtra3dahBzlZ8eSYRK25kAovZXfxKbE0xo38Vtn9j9uUtAcgN7bVRPnF5b0~asVonPlHp4sIWiFVQX3a26-oMwbjQ6J~FNdURHZa2k01BKGeVJgsGLerSEXPbiFk7rMy6IVoV6cHMwD40HM6ip5tjCyQ24n5UnNWkYxUggx6ai9K3G7lYCUnKcdmoiVOr6pIqqiz5eFUu4xmbe8E-cA__",
  },
  {
    id: 2,
    rate: 9.2,
    title: "The Godfather",
    src: "https://s3-alpha-sig.figma.com/img/18d4/e152/3a9723ae5397841adf7fbaed84bd30b2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nhtnom1Z79W2g-o~oXiYTnbm2nUyAtuIjKiyaEjzJiOQl1x-y5hlG3T2VgFSqmdikwZ~fqDd4Te7f5cNYela~tdpZ~wxFv-IFMGTk1ixopI5f6uSCNqxgt1EKrgJn1MdHLukhB8mT3SwATeebr6-sucz0862lFuTmFFesL-cxOv1pni-I69WrkPz2D79FkmPVOL6xUHHmK9wuJzEy7LXaUqzyLZhIgjWkwftpzc7iN1b9Vwc5QnXlKO-6tp~v-tIIT6N4s8TeUO~nQxjC2m2EeDg7rarejGsdqzlq250SPOS-eCpuAqCCKc4wN7OLOr3SJMnVRbV1pnaz2e1eVVYdg__",
  },
  {
    id: 3,
    rate: 9.0,
    title: "The Dark Knight",
    src: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 4,
    rate: 9.0,
    title: "Angry Men",
    src: "https://s3-alpha-sig.figma.com/img/e5f6/3d6a/89bab25bc0763dfbbbf7c3bee6852e83?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TrB5xdylEZNw90aYOfLiSYR6HBg9KDNy620N2hflYFaG4Es0I~jbnk-1xKQwJdFcLyeE7uK11gPqCe7dTGeowmQcIubeWG~~MTClE3PNK25CagF2kNiywCBRMrFQ5xcE2OCfBH6HnffO~Gc-QPu7qVzqTY9w8sOEScptMzugmjVCHqBXHIyvjQBIDnG9oIvH2m-LucKMJxGettilLPwOOdp0WpZtQI6z4U3IVQZUAQXVxakUvuf2B3yWVcRrjnNa3OuBYKJFsW49ae0yMa2Uo46ybmcZvOuLcVGSHoEfe2EXLgyB9SQnDwWw509Nt~NcOnbabCkN6vIE8~GrVNoEtg__",
  },
  {
    id: 5,
    rate: 9.0,
    title: "The Lord of the Rings: The Return of the King",
    src: "https://s3-alpha-sig.figma.com/img/3dda/7d0f/d43f8bf0d05709315bdef844728edcdd?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lNuIuVUvpn0P7qZ3Kvuf6Kibp2mkvmslI2CBgrrMzhW-cH7SNU~-TYLgvHE19hINyV-S~24YOtXzTLQbe3CLjvYcaJXCyVKDzmAjgmAQSV7DHzAyiz6zNIzlphCF94QeopL-UYUKvEhlmC5QY~X59E-feUHvLStqgcIzVkdgTrdM~~QnsMVR2iPLFEE17tvG-wbao7AnwCCKspxbA7lDhPpvrFOa67ALpEF9NKbONY0nWHM2FFjPyhC0zDlhv4RvfzqeImNk94WqjkM8UA39~ekNnqyF2iSEjTmlg84CbP4~DFeHoMys4n6Bmzp3pjWgWM3IqhEAichzjaMUZ57YSA__",
  },
  {
    id: 6,
    rate: 8.7,
    title: "Internstellar",
    src: "https://s3-alpha-sig.figma.com/img/c7c0/24b2/b3afd710377fb0b9f108ff36fba45e4c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jy17qbJyICAYwyhgs7IHFdq3x1Ar1j2fSOVD22u9clrD15sAGPROZj6xU8iK3K6PfnHk0b69x9oqldV65LPvqryQrAsWN08MmaBfjGfx1KM8jyS95rOQIpHILq0AcTj63eWmXfm2QzeYdof8HijoBtYRkbmPifJ4fb~PV8obMI7n7HUepxxpwB4m-B53sHzVi5zqfZthYfq8zWDZfTXQvQ~C~CV56FNumPLGOAxNDJki~DNkritDOA1Xz7x4eVoY9iUaTukeePbPaZahysMU9FUbU4h94y12v7xyuR1RF5nI9JoN6O38NwJW8sOMS0WqrfgGpooOCUOuPVu50LYB1g__",
  },
  {
    id: 7,
    rate: 8.6,
    title: "Se7en",
    src: "https://s3-alpha-sig.figma.com/img/3acb/3a09/851aa126ab35026523f2e2e190b23fe7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Pdum97Y5btSrDTFO6P0KOlGN6Nua7ZpGM9Dz54X6-FTXaFjhCGuStl4PtZxpTkyqMlRpnnOYri-Nu6dlbUE7wI8cT5YGljQ7XwWfGp9-oFnNViLtQJO6RDkk0KlgHuRZfI4fnrp5CVSLGq8SxXvhP9JprHAUOHAzxA6bTqZmo95U9SzlUUUrx8loTv5w99Wq9kshSAhkVRn4DdL1STu3kfubNvGlxQAj0gkqqVXkLBvuCvcCdq4Pedr6kT4uF0XZAoFBuujzsFXDrTtrnPkNBlOVn5QnC3H68kM3GvYgPp7cYfK2HI1GpQexwgefKLt3HFzza75rmry-yuoomc2MZg__",
  },
  {
    id: 8,
    rate: 8.6,
    title: "It's Wonderful life",
    src: "https://s3-alpha-sig.figma.com/img/2956/d72d/5d02f54d89cfd16de886a197c7726cdd?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UGdLb~piDF~Tt8VgbkOpb0rk8y5XodFXzg1pb-hZ28LUmD0zpRBFEgthR7xaJeljxqrTlEAaUXa5mG9Wpg1~wzpGfpLrSZR7emdhKPfch-CvovtRoKQf86kXUd-tKIT4H2M1VY3CfydaY0rnJR2fAu6HO5aGrlm4D6Z2sNv~lzSTfsSErmOqsDGHVKMOfaZdMOJa-~ZrkGSPlUMARlfKnEKrvDKJexzt9-a90NWhkgqnVMyQLdzsm9W7NuHuGOlunXN093Fjc9zrpKP2~hmsPIsr-8XQHI2zzhwuoxdM7IccQB8jeKuQe1eZNBSDh8bGK~h2XDD8B-LMK6QmbOq29A__",
  },
  {
    id: 9,
    rate: 6.3,
    title: "Seven samurai",
    src: "https://s3-alpha-sig.figma.com/img/58b7/6625/d56cec413aaa9f82fa807c4236d4e1eb?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o4RpLGRhLW53nK9Cc0LOUFduabvsf47De7COIP1jeMJjx4uQCDbNg-BloRyBnj1urqaIrXbUt2XTNrDqMtKkVcXbA6PCYscvjng5u1226HOv0PJ8peK1KkoijzGLoEkZDn3OLYVxum-ttPtVnpHEwWHCEacxFox3~39SxxX7xDMB4slzwvrdpFjnrRYp0eDdJmFXdiL3cOwRlinbDDdQfTnFr6x9Td3Wt4LXFRBbx9SSznXQ0cn6A8RsPw7M30nGzP4VFFwStPJCMqx5KAHuFHIGTJNRY--WBenq7OXZh3ZJo5VML7SP1lVA-b0nqPmWbP36g3Nn8Bl2853XR4NG-w__",
  },
  {
    id: 10,
    rate: 8.6,
    title: "The Silence of the Lambs",
    src: "https://s3-alpha-sig.figma.com/img/0b32/61eb/4bb822b1588e21cad535fbaad83aa44f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fr~-6tWejrE5Y9IYLSlmut5lh-z8etaWpvyGrOHtP0ZDm5SV4Ph-uuQIEyp77sS1c9543F6RwmpcgLl8rmQgkzaPZGNHWDhXtoiyuHESyHUuT3iKYfp8UlbruyX~~p9VwC~hQ7RbZ9PbVnjRNQSQTGFIwePZd6lFsuCODbgC3a-WUIJkOUjVRNjDJsiQCC~3leBUMrtp9sKFWl3eVwyonz3p8NZLf1mQb3TMxk4WFTeJn0hVavrRB73CkmenE--jMm-cec~b9U6iKdAHAiSi17mc0ufSZnTkH~7ntZHGjWDJtlaqsTKjDAXoM4GDAcVQYCmpz7w6LX0ZkaM1TM6yEA__",
  },
];

export const Popular = () => {
  return (
    <div className=" px-[80px]">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600]">Popular</p>
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
