import { Radio, Button, Select } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InvoiceAdd from "./InvoiceAdd";
import QuotationAdd from "./QuotationAdd";

const TasksBillingNav = (props) => {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/")
  const currentPath = path[3] || "invoices";
  // let currentPath = useLocation().pathname || "";
  // if (currentPath === "/tasks/billing") {
  //   currentPath = "/tasks/billing/invoices"
  // }
  const [modalInvoiceAdd, setModalInvoiceAdd] = useState(false);
  const [modalQuotationAdd, setModalQuotationAdd] = useState(false);
  return (
    <>
      <div className="flex items-center h-12 border-b border-gray-300 px-2">
        <div className="flex-1">
          <Select
            placeholder="Please select"
            bordered={false}
            value={currentPath}
            onChange={(e) => {
              navigate(`/tasks/billing/${e}`);
            }}
            className="w-24 md:hidden"
          >
            <Select.Option value="invoices">Invoices</Select.Option>
            <Select.Option value="quotations">Quotations</Select.Option>
            <Select.Option value="claims">Claims</Select.Option>
            <Select.Option value="timecost">Time Cost</Select.Option>
          </Select>
          <Radio.Group
            type="button"
            size="small"
            defaultValue={currentPath}
            value={currentPath}
            // onChange={(e) => {
            //   navigate(`/tasks/billing/${e}`);
            //   // useNavigate(`/task/billing/${e}`)
            //   // props.setTimeScale(e);
            // }}
            className="hidden md:inline-block"
          >
            <Radio value="invoices">
              <Link to="/tasks/billing/invoices">Invoices</Link>
            </Radio>
            <Radio value="quotations">
              <Link to="/tasks/billing/quotations">Quotations</Link>
            </Radio>
            <Radio value="claims">
              <Link to="/tasks/billing/claims">Claims</Link>
            </Radio>
            <Radio value="timecost">
              <Link to="/tasks/billing/timecost">Time Cost</Link>
            </Radio>
          </Radio.Group>
        </div>
        <div>
          {currentPath === "invoices" && !path[4] && (
            <Button type="primary" size="small" icon={<IconPlus />} onClick={() => setModalInvoiceAdd(true)}>
              Invoice
            </Button>
          )}
          {currentPath === "quotations" && (
            <Button type="primary" size="small" icon={<IconPlus />} onClick={() => setModalQuotationAdd(true)}>
            Quotation
          </Button>
        )}
          {currentPath === "claims" && (
            <Button type="primary" size="small" icon={<IconPlus />}>
              Claim
            </Button>
          )}
          {currentPath === "timecost" && (
            <Button type="primary" size="small" icon={<IconPlus />}>
              Time cost
            </Button>
          )}
        </div>
      </div>
      <InvoiceAdd visible={modalInvoiceAdd} setVisible={setModalInvoiceAdd} />
      <QuotationAdd visible={modalQuotationAdd} setVisible={setModalQuotationAdd} />
    </>
  );
};
export default TasksBillingNav;
