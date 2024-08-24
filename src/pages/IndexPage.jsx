import DisplayEvents from './DisplayEvents';

export default function IndexPage() {
  return (
    <div className="flex flex-col">
      <div className="hidden sm:block">
        <div className="flex item-center inset-0">
          <img src="/hero.jpg" alt="" className="w-full" />
        </div>
      </div>
      <DisplayEvents />
    </div>
  );
}
