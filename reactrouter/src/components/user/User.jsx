import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center text-3xl bg-gray-600 text-white py-10">
      User: {userid}
    </div>
  );
}

export default User;
