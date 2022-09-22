import { Modal, Button, Upload, Avatar } from "@arco-design/web-react";

const GroupAdd = (props) => {
  return (
    <Modal
      title="Import Tasks"
      visible={props.visible}
      okText="Import Tasks"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <Upload
          drag
          multiple
          accept="image/*"
          action="/"
          // onDrop={(e) => {
          //   let uploadFile = e.dataTransfer.files[0]
          //   if (isAcceptFile(uploadFile, 'image/*')) {
          //     return
          //   } else {
          //      Message.info('不接受的文件类型，请重新上传指定文件类型~');
          //   }
          // }}
          tip="All .csv, .xls, and .xlsx file types are supported"
          className="border border-gray-600"
        />
        <div className="pt-6 text-center">
          <h3>Import your tasks from excel to GoKudos</h3>
          <div className="mb-4">Add your tasks to the template and upload. That's all 😊</div>
          <div>
            <Button type="outline" className="h-12">
              <Avatar shape="square" size={24} className="gk-extension xlsx mr-2">
                XLSX
              </Avatar>
              <span className="">Download the template</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GroupAdd;
