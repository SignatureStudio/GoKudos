import { Breadcrumb, Button, Input } from "@arco-design/web-react";
import { IconHome } from "@arco-design/web-react/icon";

const SettingsIntegrationsSql = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <IconHome />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Settings</Breadcrumb.Item>
        <Breadcrumb.Item>Integrations</Breadcrumb.Item>
      </Breadcrumb>
      <div className="bg-white p-4 mt-2">
        <h2 className="pt-0 pb-4">SQL Accounting</h2>
        <div className="max-w-sm mb-4">
          <div className="mb-2">Sale Code</div>
          <div><Input defaultValue="500-000" /></div>
        </div>
        <div>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </>
  );
};

export default SettingsIntegrationsSql;
