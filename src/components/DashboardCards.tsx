import DashboardCard from "./DashboardCard";
import { cardData } from "../data/data";

function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-4 mx-4 py-2">
      {cardData.map((card) => (
        <DashboardCard
          key={card.title}
          card_title={card.title}
          num_metric={card.num_metric}
          trend={card.trend}
          trend_icon={card.trend_icon}
          card_desc={card.card_desc}
          card_icon={card.card_icon}
          card_icon_colour={card.card_icon_color}
        />
      ))}
    </div>
  );
}

export default DashboardCards;
