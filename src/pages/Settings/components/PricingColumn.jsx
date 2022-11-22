import { Button } from "@arco-design/web-react";
import { IconCheck } from "@arco-design/web-react/icon";

export const PricingColumn = (props) => {
  return (
    <section className="p-4 border border-gray-200">
      <div className="text-center">
        <h3 className="uppercase tracking-wider mb-5 text-brand-500">
          {props.title}
        </h3>
        <div className="text-4xl font-bold">{props.price}</div>
        <div className="text-xl">{props.unit}</div>
        <div className="py-5 text-gray-500 text-lg">
          <div className="h-5">{props.total}</div>
          <div className="h-5">{props.term}</div>
        </div>
      </div>
      <div className="mb-5">
        <Button type="primary" long>
          Upgrade
        </Button>
      </div>
      <div className="divide-y divide-gray-200">
        {(props.features || []).map((ft, i) => (
          <div className="p-2" key={i}>
            <IconCheck className="text-brand-500 mr-1" /> {ft}
          </div>
        ))}
        {props.title === "Startup" && (
          <div className="px-2 pt-5 text-gray-500">
            * Quota refreshes every month
          </div>
        )}
      </div>
    </section>
  );
};
export const FeatureHead = (props) => {
  return (
    <div className="grid grid-cols-5 text-lg font-bold">
      <div className="col-span-2 p-2">{props.name}</div>
      <div className="text-center text-brand-500 tracking-wider p-2">{props.startup}</div>
      <div className="text-center text-brand-500 tracking-wider p-2">{props.sme}</div>
      <div className="text-center text-brand-500 tracking-wider p-2">{props.smeplus}</div>
    </div>
  );
};

export const FeatureRow = (props) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 p-2">{props.name}</div>
      <div className="text-center p-2">{props.startup}</div>
      <div className="text-center p-2">{props.sme}</div>
      <div className="text-center p-2">{props.smeplus}</div>
    </div>
  );
};
