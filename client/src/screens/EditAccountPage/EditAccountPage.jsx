import EditAccount from "../../components/Forms/editForm/EditAccount";
import { Layout } from "../../components/Layout/Layout";
import classes from "./EditAccount.module.css";

export default function EditAccountPage() {
  return (
    <div>
      <Layout>
        <div className={classes.edit_page}>
          <h2 className={classes.title}>Update Account Information</h2>
          <EditAccount />
        </div>
      </Layout>
    </div>
  );
}
