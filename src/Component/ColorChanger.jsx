
import { heroData } from "../data/heroData";

function ColorChanger({ setActiveId }) {
  return (
    <div className="flex flex-col gap-4">
      {heroData.map((hero) => (
        <button
  key={hero.id}
  onClick={() => setActiveId(hero.id)}
  className={`${hero.rightSectionBgColor} z-2 h-8 w-8 rounded-full font-bold text-white cursor-pointer shadow-[0_0_1px_1px_white] transition-transform duration-200 hover:scale-110`}
>
  {hero.id}
</button>
      ))}
    </div>
  );
}

export default ColorChanger;
