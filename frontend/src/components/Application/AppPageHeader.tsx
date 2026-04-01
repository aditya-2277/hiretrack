import AppPageButtons from "./AppPageButtons";

type AppPageHeaderProps = {
  title: string;
  desc: string;
  onNewClick?: () => void;
};
//Recruitment Dashboard
//Your career progress and interview pipeline at a glance
function AppPageHeader({ title, desc, onNewClick }: AppPageHeaderProps) {
  return (
    <div className="flex justify-between">
      <div className="">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-md text-gray-400">{desc}</p>
      </div>
      <AppPageButtons onNewClick={onNewClick} />
    </div>
  );
}

export default AppPageHeader;
