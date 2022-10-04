import {
  Modal,
  Avatar,
  Input,
  Radio,
  Carousel,
  Tag,
} from "@arco-design/web-react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { TASK } from "@/constants";

const InvoiceAdd = (props) => {
  const [avatarText, setAvatarText] = useState("A");
  const [avatarBg, setAvatarBg] = useState("gray");
  return (
    <Modal
      title="Add Invoice"
      visible={props.visible}
      okText="Add Invoice"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div className="flex-1 pl-4">
        <div>
          <label>
            <div>Invoice name</div>
            <Input allowClear placeholder="Add an invoice name" />
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default InvoiceAdd;
