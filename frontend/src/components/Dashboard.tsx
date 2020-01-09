import React from "react";
import Header, { HeaderBucketProps } from "./HeaderBucket";

const headers: HeaderBucketProps[] = [
  { header: "Backlog", meta: "", description: "" },
  { header: "Sprint", meta: "", description: "" },
  { header: "To Do", meta: "", description: "" },
  { header: "In Progress", meta: "", description: "" },
  { header: "Test", meta: "", description: "" },
  { header: "Done", meta: "", description: "" }
];
const dashboard = () => <div>
  {headers.map(header => <Header {...header} ></Header>)}
</div>;

export default dashboard;
