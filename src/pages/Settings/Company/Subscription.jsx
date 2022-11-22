import { Breadcrumb, Button, Input, Radio } from "@arco-design/web-react";
import { IconCheck, IconHome } from "@arco-design/web-react/icon";
import { useState } from "react";
import {
  PricingColumn,
  FeatureRow,
  FeatureHead,
} from "../components/PricingColumn";

const SettingsIntegrationsSql = () => {
  const [bill, setBill] = useState("yearly");
  const pricing = {
    yearly: {
      sme: {
        user: "1.88",
        month: "47.20",
      },
      smeplus: {
        user: "1.32",
        month: "79.20",
      },
    },
    monthly: {
      sme: {
        user: "2.36",
        month: "59",
      },
      smeplus: {
        user: "1.65",
        month: "99",
      },
    },
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <IconHome />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Settings</Breadcrumb.Item>
        <Breadcrumb.Item>Company</Breadcrumb.Item>
      </Breadcrumb>
      <div className="bg-white p-4 mt-2">
        <h2 className="pt-0 pb-4">Subscription</h2>
        <div className="text-center mb-5">
          <Radio.Group
            type="button"
            defaultValue="yearly"
            size="large"
            onChange={(e) => setBill(e)}
          >
            <Radio value="yearly">Yearly</Radio>
            <Radio value="monthly">Monthly</Radio>
          </Radio.Group>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-3 gap-3" style={{ minWidth: 800 }}>
            <PricingColumn
              title="Startup"
              price="FREE"
              unit="Forever"
              link="/"
              features={[
                "3 Users",
                "Unlimited contacts storage",
                "50 GB Storage",
                "Quotations*",
                "Calendar and timeline view",
                "5 reports*",
              ]}
            />
            <PricingColumn
              title="SME"
              price={`RM${pricing[bill].sme.user}`}
              unit="user/month"
              total={`Total ${pricing[bill].sme.month}/month`}
              term="billed annually"
              link="/"
              features={[
                "25 Users",
                "100 GB Storage",
                "Included everything in Startup",
                "Unlimited Invoices & Quotation",
                "Time Tracking",
                "Claims",
                "Kanban View",
                "Unlimited reports",
              ]}
            />
            <PricingColumn
              title="SME+"
              price={`RM${pricing[bill].smeplus.user}`}
              unit="user/month"
              total={`Total ${pricing[bill].smeplus.month}/month`}
              term="billed annually"
              link="/"
              features={[
                "60 Users",
                "100 GB Storage",
                "Included everything in Startup",
                "Unlimited Invoices & Quotation",
                "Time Tracking",
                "Claims",
                "Kanban View",
                "Unlimited reports",
              ]}
            />
          </div>
          <div
            className="divide-y divide-gray-300 mt-10 "
            style={{ minWidth: 800 }}
          >
            <FeatureHead startup="STARTUP" sme="SME" smeplus="SME+" />
            <FeatureHead name="Fundamentals" />
            <FeatureRow
              name="Workspaces"
              startup="Unlimited"
              sme="Unlimited"
              smeplus="Unlimited"
            />
            <FeatureRow
              name="Maximum Number of Teams"
              startup="1"
              sme="5"
              smeplus="Unlimited"
            />
            <FeatureRow
              name="Maximum Number of Users"
              startup="3"
              sme="25"
              smeplus="60"
            />
            <FeatureRow
              name="Contacts"
              startup="Unlimited"
              sme="Unlimited"
              smeplus="Unlimited"
            />
            <FeatureRow
              name="Attendance"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Storage"
              startup="50GB"
              sme="100GB"
              smeplus="250GB"
            />
            <FeatureRow
              name="Customer Support"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Assisted Onboarding (Paid)"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureHead name="Structure" />
            <FeatureRow
              name="Maximum Number of Tasks"
              startup="50"
              sme="Unlimited"
              smeplus="Unlimited"
            />
            <FeatureRow
              name="Projects"
              startup="Unlimited"
              sme="Unlimited"
              smeplus="Unlimited"
            />
            <FeatureRow
              name="Subtasks and checklist"
              startup="Unlimited"
              sme="Unlimited"
              smeplus="Unlimited"
            />
            <FeatureHead name="Views" />
            <FeatureRow
              name="Column"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Table"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Kanban"
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Calendar"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Timeline"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Charts"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureHead name="Customisation" />
            <FeatureRow
              name="Filters"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Groups"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Multiple Select"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Projects Duplication"
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Tasks Duplication"
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureHead name="Collaboration / Permissions" />
            <FeatureRow
              name="Basic Permissions"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Comments"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Task Sharing"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Notification"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Projects Permission"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureHead name="Integrations" />
            <FeatureRow
              name="Google Drive"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="OneDrive"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="CSV"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="SQL Accounting Software Export Format"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureHead name="Automation" />
            <FeatureRow
              name="Reminders"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Recurring items"
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureHead name="Web and Mobile Apps" />
            <FeatureRow
              name="Web"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="Android"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              name="iOS"
              startup={<IconCheck className="text-brand-500" />}
              sme={<IconCheck className="text-brand-500" />}
              smeplus={<IconCheck className="text-brand-500" />}
            />
            <FeatureRow
              startup={
                <Button type="primary" long>
                  Upgrade
                </Button>
              }
              sme={
                <Button type="primary" long>
                  Upgrade
                </Button>
              }
              smeplus={
                <Button type="primary" long>
                  Upgrade
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsIntegrationsSql;
