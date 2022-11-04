import { Modal, Table, Radio, Button } from "@arco-design/web-react";
import { Link, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import InvoiceSend from "../components/InvoiceSend";
import InvoiceVoid from "../components/InvoiceVoid";
import { useState } from "react";

const InvoicePreview = (props) => {
  const [modalInvoiceSend, setModalInvoiceSend] = useState(false);
  const [modalInvoiceVoid, setModalInvoiceVoid] = useState(false);
  const download = () => {
    // const html = document.getElementById("InvoicePreview");

    html2canvas(document.getElementById("InvoicePreview")).then(function (
      canvas
    ) {
      const img = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const width = doc.internal.pageSize.getWidth();
      // const height = doc.internal.pageSize.getHeight();
      const imgProps = doc.getImageProperties(img);
      const height = (imgProps.height * width) / imgProps.width;
      doc.addImage(img, "PNG", 0, 0, width, height);
      doc.save("I-000001.pdf");
      // pdf.html(html, {
      //   callback: function (pdf) {
      //     pdf.save("I-000001.pdf");
      //   },
      // x: 10,
      // y: 10
      //  });
    });

    // pdf.html(html);
    // pdf.save("pdf");
  };
  function numberWithCommas(num) {
    num = Number(num);
    return num
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const columns = [
    {
      dataIndex: "index",
      title: "#",
      width: 25,
      align: "center",
      render: (col, record, index) => {
        return <div className="text-gray-300">{index + 1}</div>;
      },
    },
    {
      dataIndex: "item",
      title: "Item",
      width: 300,
    },
    {
      dataIndex: "planned",
      title: "Planned (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
        // return (
        //   <div>
        //     <InputText data={col} number={true} placeholder="RM" />
        //   </div>
        // );
      },
    },
    {
      dataIndex: "discount",
      title: "Disc (%)",
      width: 60,
      align: "right",
      fixed: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "tax",
      title: "Tax (%)",
      width: 60,
      align: "right",
      fixed: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "billed",
      title: "Billed (RM)",
      width: 100,
      align: "right",
      fixed: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
        // return (
        //   <div>
        //     <InputText data={col} number={true} placeholder="RM" />
        //   </div>
        // );
      },
    },
  ];

  const data = [
    {
      key: 1,
      item: "Financial Statement",
      planned: 1000,
      actual: 500,
      variance: 500,
      discount: 0,
      tax: 0,
      billed: 1000,
    },
    {
      key: 2,
      item: "Completion Procedures",
      planned: 1000,
      actual: 1500,
      variance: -500,
      discount: 0,
      tax: 0,
      billed: 2000,
    },
    {
      key: 3,
      item: "Audit Procedures/Execution",
      planned: 0,
      actual: 0,
      variance: 0,
      discount: 0,
      tax: 0,
      billed: 0,
    },
  ];
  return (
    <>
      <Modal
        title="Invoice Preview"
        visible={props.visible}
        okText="Invoice Preview"
        footer={null}
        onOk={() => props.setVisible(false)}
        onCancel={() => props.setVisible(false)}
        autoFocus={false}
        focusLock={true}
        wrapClassName="full"
        className="w-full max-w-4xl"
      >
        <div
          className="overflow-auto border-b border-gray-200"
          style={{ height: `${80}vh` }}
        >
          <div style={{ width: 864 }} className="p-8" id="InvoicePreview">
            <div className="flex items-center mb-8">
              <div className="flex-1">
                <img src="/logotype.png" className="w-40" />
              </div>
              <div className="text-3xl text-right">INVOICE</div>
            </div>
            <div className="flex mb-8">
              <div className="w-80">
                <div className="text-sm font-bold text-gray-300">Bill To</div>
                <div className="font-bold">TCH Sdn Bhd</div>
                <div>Tee Chee Hong</div>
                <div>55, Persiaran Batu Belah</div>
                <div>Taman Sentosa</div>
                <div>50000 Kuala Lumpur</div>
                <div>Malaysia</div>
              </div>
              <div className="text-right flex-1">
                <div className="text-sm font-bold text-gray-300">
                  Invoice Number
                </div>
                <div className="font-bold mb-2">INV-10000001</div>
                <div className="text-sm font-bold text-gray-300">
                  Invoice Date
                </div>
                <div className="mb-2">1 October 2022</div>
                <div className="text-sm font-bold text-gray-300">Due Date</div>
                <div>31 October 2022</div>
              </div>
            </div>
            <Table
              size="small"
              scroll={{ x: true }}
              columns={columns}
              data={data}
              pagination={false}
              noDataElement={<div>NOTHING</div>}
              className="border-gray-300 border rounded"
              summary={(currentData) => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={5} className="text-right">
                      Discount (RM)
                    </Table.Summary.Cell>
                    <Table.Summary.Cell className="text-right">
                      {numberWithCommas(0)}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={5} className="text-right">
                      Tax (RM)
                    </Table.Summary.Cell>
                    <Table.Summary.Cell className="text-right">
                      {numberWithCommas(0)}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={5} className="text-right">
                      Total (RM)
                    </Table.Summary.Cell>
                    <Table.Summary.Cell className="text-right font-bold">
                      {numberWithCommas(2000)}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={5} className="text-right">
                      Balance Due (RM)
                    </Table.Summary.Cell>
                    <Table.Summary.Cell className="text-right">
                      {numberWithCommas(2000)}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
            <div className="my-8">
              <div className="text-sm font-bold text-gray-300">Notes</div>
              <div>All payment made to GoKudos Sdn Bhd</div>
            </div>
            <div className="py-4 border-t border-gray-200">
              <div>
                <span className="font-bold">TCH Sdn Bhd</span> (2020202020202)
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <div>
                    55, Persiaran Batu Belah, Address 2, 50000 Kuala Lumpur,
                    Malaysia.
                  </div>
                  <div>+6012 3456 789</div>
                </div>
                <div className="text-right">
                  <div>
                    <a href="mailto:email@gokudos.io">email@gokudos.io</a>
                  </div>
                  <div>
                    <a href="https//:www.gokudos.io">www.gokudos.io</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex">
            <div className="flex-1">
              <Button type="primary" onClick={() => setModalInvoiceSend(true)}>
                Send
              </Button>
              <Button onClick={download} className="ml-2">
                Download
              </Button>
            </div>
            <div>
              <Button type="text" onClick={() => setModalInvoiceVoid(true)}>
                Void
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <InvoiceSend
        visible={modalInvoiceSend}
        setVisible={setModalInvoiceSend}
      />
      <InvoiceVoid
        visible={modalInvoiceVoid}
        setVisible={setModalInvoiceVoid}
      />
    </>
  );
};
export default InvoicePreview;
