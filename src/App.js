import "antd/dist/antd.min.css";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Upload {...props} multiple directory>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
}

export default App;
