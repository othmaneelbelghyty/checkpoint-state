import ShowProfile from "./ShowProfile";
import person from "./person";
function Profile({ person }) {
  return (
    <>
      {person.shows((index) => {
        return <ShowProfile key={index} person={person} />;
      })};
    </>
  );
}

export default Profile;
