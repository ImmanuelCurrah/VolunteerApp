import EditAccount from "../../components/Forms/editForm/EditAccount";
import { Layout } from "../../components/Layout/Layout";

export default function EditAccountPage() {
  return (
    <div>
      <Layout>
        <div className="signup-page">
          <h2>Update Account Information</h2>
          <EditAccount />
        </div>
      </Layout>
    </div>
  );
}
